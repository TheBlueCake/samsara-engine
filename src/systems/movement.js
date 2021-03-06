import { addLog } from '../index';
import { grid } from '../lib/canvas';
import { readCacheSet } from '../state/cache';
import {
  Defense,
  Health,
  IsTalkable,
  Move,
  Paralyzed,
  Position,
} from '../state/components';
import world from '../state/ecs';

const movableEntities = world.createQuery({
  all: [Move],
});

const attack = (entity, target) => {
  const damage = entity.power.current - target.defense.current;
  target.fireEvent('take-damage', { amount: damage });

  if (target.health.current <= 0) {
    if (entity.description.name === 'Neo') {
      addLog(
        `You strike the ${target.description.name} for ${damage} damage and banish it!`
      );
    }
    if (entity.description.name !== 'Neo') {
      addLog(
      `${entity.description.name} fatally strikes you for ${damage} damage.`
    );
  }
}
  if (entity.description.name === 'Neo') {
    addLog(
      `You strike the ${target.description.name} for ${damage} damage.`
    );
  }

  if (entity.description.name !== 'Neo') {
    if (target.description.name === 'Neo') {
      addLog(
        `The ${entity.description.name} strikes you for ${damage} damage.`
      );
    };
  }
};

export const movement = () => {
  movableEntities.get().forEach((entity) => {
    if (entity.has(Paralyzed)) {
      return;
    }

    let mx = entity.move.x;
    let my = entity.move.y;
    let mz = entity.move.z;

    if (entity.move.relative) {
      mx = entity.position.x + entity.move.x;
      my = entity.position.y + entity.move.y;
    }

    // this is where we will run any checks to see if entity can move to new location
    // observe map boundaries
    mx = Math.min(grid.map.width + grid.map.x - 1, Math.max(21, mx));
    my = Math.min(grid.map.height + grid.map.y - 1, Math.max(3, my));

    // check for blockers
    const blockers = [];
    // read from cache
    const entitiesAtLoc = readCacheSet(
      'entitiesAtLocation',
      `${mx},${my},${mz}`
    );

    for (const eId of entitiesAtLoc) {
      if (world.getEntity(eId).isBlocking) {
        blockers.push(eId);
      }
    }
    if (blockers.length) {
      blockers.forEach((eId) => {
        const target = world.getEntity(eId);
        if (target.has(Health) && target.has(Defense) && !target.has(IsTalkable)) {
          attack(entity, target);
        } else {
          if (entity.description.name !== 'Neo' && !target.has(IsTalkable)) {
            addLog(
              `${entity.description.name} bumps into a ${target.description.name}.`
            );
          } else {
            if (target.has(IsTalkable)) {
              addLog(target.isTalkable.dialogueArray[target.isTalkable.dialogueIndex]);
              target.isTalkable.dialogueIndex++;
              if (target.isTalkable.dialogueIndex == target.isTalkable.dialogueArray.length) {
                target.remove(target.isBlocking);
                target.isTalkable.dialogueIndex = 0;
              }
            };
          }
        };
      });

      entity.remove(entity.move);
      return;
    }

    entity.remove(entity.position);
    entity.add(Position, { x: mx, y: my, z: mz });

    entity.remove(entity.move);
  });
};
