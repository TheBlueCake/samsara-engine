export const MAX_ITEMS_BY_FLOOR = {
  // floor: items
  1: 2,
  5: 3,
  9: 5,
  14: 7,
  19: 10,
};

export const ITEM_WEIGHT = {
  0: [
    { name: 'HealthPotion', weight: 0 },
    { name: 'Weapon', weight: 30 },
    { name: 'Shield', weight: 30 },
    { name: 'Boots', weight: 30 },
    { name: 'Helmet', weight: 30 },
    { name: 'Chest', weight: 30 },
  ],
  2: [{ name: 'ScrollParalyze', weight: 10 }],
  4: [{ name: 'ScrollLightning', weight: 25 }],
  6: [{ name: 'ScrollFireball', weight: 25 }],
};

export const MAX_MONSTERS_BY_FLOOR = {
  // floor: monsters
  1: 6,
  5: 9,
  9: 12,
  14: 15,
  19: 18,
};

export const MONSTER_WEIGHT = {
  0: [{ name: 'Desire', weight: 80 }],
  3: [{ name: 'GoblinWarrior', weight: 15 }],
  5: [{ name: 'GoblinWarrior', weight: 30 }],
  7: [{ name: 'GoblinWarrior', weight: 60 }],
};
