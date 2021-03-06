// Base
export const Tile = {
  name: 'Tile',
  components: [
    { type: 'Appearance' },
    { type: 'Description' },
    { type: 'Layer100' },
  ],
};

export const Being = {
  name: 'Being',
  components: [
    { type: 'Appearance' },
    { type: 'Defense' },
    { type: 'Description' },
    { type: 'Health' },
    { type: 'IsBlocking' },
    { type: 'Layer400' },
    { type: 'Power' },
  ],
};

export const Item = {
  name: 'Item',
  components: [
    { type: 'Appearance' },
    { type: 'Description' },
    { type: 'Layer300' },
    { type: 'IsPickup' },
  ],
};

export const Gear = {
  name: 'Gear',
  inherit: ['Item'],
  components: [{ type: 'IsEquippable' }],
};

// Complex
export const Weapon = {
  name: 'Weapon',
  inherit: ['Gear'],
  components: [
    { type: 'Appearance', properties: { char: '⚔', color: '#0066ff' } },

    {
      type: 'Description',
      properties: { name: 'weapon' },
    },
    {
      type: 'Slot',
      properties: {
        name: 'weapon',
      },
    },
  ],
};

export const Armor = {
  name: 'Armor',
  inherit: ['Gear'],
  components: [
    { type: 'Appearance', properties: { char: '🛡', color: '#ff99ff' } },

    {
      type: 'Description',
      properties: { name: 'armor piece' },
    },
  ],
};

export const Chest = {
  name: 'Chest',
  inherit: ['Armor'],
  components: [
    {
      type: 'Description',
      properties: { name: 'chest piece' },
    },
    {
      type: 'Slot',
      properties: {
        name: 'chest',
      },
    },
  ],
};

export const Helmet = {
  name: 'Helmet',
  inherit: ['Armor'],
  components: [
    {
      type: 'Description',
      properties: { name: 'helmet' },
    },
    {
      type: 'Slot',
      properties: {
        name: 'head',
      },
    },
  ],
};

export const Shield = {
  name: 'Shield',
  inherit: ['Armor'],
  components: [
    {
      type: 'Description',
      properties: { name: 'shield' },
    },
    {
      type: 'Slot',
      properties: {
        name: 'shield',
      },
    },
  ],
};

export const Boots = {
  name: 'Boots',
  inherit: ['Armor'],
  components: [
    {
      type: 'Description',
      properties: { name: 'boots' },
    },
    {
      type: 'Slot',
      properties: {
        name: 'legs',
      },
    },
  ],
};

export const HealthPotion = {
  name: 'HealthPotion',
  inherit: ['Item'],
  components: [
    {
      type: 'Appearance',
      properties: { char: '!', color: '#DAA520' },
    },
    {
      type: 'Description',
      properties: { name: 'health potion' },
    },
    {
      type: 'Effects',
      properties: {
        component: 'health',
        delta: 5,
        animate: { color: '#ff0000', char: '♥' },
      },
    },
  ],
};

export const ScrollLightning = {
  name: 'ScrollLightning',
  inherit: ['Item'],
  components: [
    {
      type: 'Appearance',
      properties: { char: '♪', color: '#DAA520' },
    },
    {
      type: 'Description',
      properties: { name: 'scroll of lightning' },
    },
    {
      type: 'Effects',
      properties: {
        animate: { color: '#F7FF00' },
        events: [
          {
            name: 'take-damage',
            args: { amount: 25 },
          },
        ],
      },
    },
    { type: 'RequiresTarget', properties: { acquired: 'RANDOM' } },
  ],
};

export const ScrollParalyze = {
  name: 'ScrollParalyze',
  inherit: ['Item'],
  components: [
    {
      type: 'Appearance',
      properties: { char: '♪', color: '#DAA520' },
    },
    {
      type: 'Description',
      properties: { name: 'scroll of paralyze' },
    },
    {
      type: 'Effects',
      properties: {
        animate: { color: '#FFB0B0' },
        addComponents: [
          {
            name: 'Paralyzed',
            properties: {},
          },
        ],
        duration: 10,
      },
    },
    { type: 'RequiresTarget', properties: { acquired: 'MANUAL' } },
  ],
};

export const ScrollFireball = {
  name: 'ScrollFireball',
  inherit: ['Item'],
  components: [
    {
      type: 'Appearance',
      properties: { char: '♪', color: '#DAA520' },
    },
    {
      type: 'Description',
      properties: { name: 'scroll of fireball' },
    },
    {
      type: 'Effects',
      properties: {
        animate: { color: '#FFA200', char: '^' },
        events: [
          {
            name: 'take-damage',
            args: { amount: 25 },
          },
        ],
      },
    },
    {
      type: 'RequiresTarget',
      properties: {
        acquired: 'MANUAL',
        aoeRange: 3,
      },
    },
  ],
};

export const Wall = {
  name: 'Wall',
  inherit: ['Tile'],
  components: [
    { type: 'IsBlocking' },
    { type: 'IsOpaque' },
    {
      type: 'Appearance',
      properties: { char: '#', color: '#AAA' },
    },
    {
      type: 'Description',
      properties: { name: 'wall' },
    },
  ],
};

export const Floor = {
  name: 'Floor',
  inherit: ['Tile'],
  components: [
    {
      type: 'Appearance',
      properties: { char: '•', color: '#555' },
    },
    {
      type: 'Description',
      properties: { name: 'floor' },
    },
  ],
};

export const StairsUp = {
  name: 'StairsUp',
  inherit: ['Tile'],
  components: [
    {
      type: 'Appearance',
      properties: { char: '<', color: '#AAA' },
    },
    {
      type: 'Description',
      properties: { name: 'set of stairs leading up' },
    },
  ],
};

export const StairsDown = {
  name: 'StairsDown',
  inherit: ['Tile'],
  components: [
    {
      type: 'Appearance',
      properties: { char: '>', color: '#AAA' },
    },
    {
      type: 'Description',
      properties: { name: 'set of stairs leading down' },
    },
  ],
};

export const Player = {
  name: 'Player',
  inherit: ['Being'],
  components: [
    {
      type: 'Appearance',
      properties: { char: '@', color: '#FFF' },
    },
    {
      type: 'Description',
      properties: { name: 'Neo' },
    },
    { type: 'Inventory' },
  ],
};

export const Desire = {
  name: 'Desire',
  inherit: ['Being'],
  components: [
    { type: 'Ai' },
    {
      type: 'Appearance',
      properties: { char: '&', color: 'red' },
    },
    {
      type: 'Description',
      properties: { name: 'Desire' },
    },
    { type: 'Power', properties: { base: 2, current: 2 } },
    { type: 'Health', properties: { base: 7, current: 7 } },
  ],
};

export const GreaterDesire = {
  name: 'Greater Desire',
  inherit: ['Being'],
  components: [
    { type: 'Ai' },
    {
      type: 'Appearance',
      properties: { char: '@', color: 'red' },
    },
    {
      type: 'Description',
      properties: { name: 'Greater Desire' },
    },
    { type: 'Defense', properties: { base: 2, current: 2 } },
    { type: 'Power', properties: { base: 4, current: 4 } },
  ],
};

export const Morpheus = {
  name: 'Morpheus',
  inherit: ['Being'],
  components: [
    {
      type: 'Appearance',
      properties: { char: '@', color: 'green' },
    },
    { type: 'IsTalkable',
    properties: { dialogueArray: ['Hello, Neo. It seems you\'ve forgotten your memories. My name is Morpheus.', 'This place is called Samsara.', 'It\'s a nigh-inescapable prison guarded by the Desires, agents of suffering.', 'I\'ve heard the only way to leave is by following the Eightfold Path.', 'I\'ll give you the two pieces I have:', 'The Right View, which allows you to see Desires,', 'and the Right Effort, which allows you to banish them.', 'To reach Nirvana, you\'ll have to find the other six on your own.', 'If you find a bodhisattva, they\'ll teach you a piece of the Path.', 'Good luck on your journey, Neo.'] },
    },
    {
      type: 'Description',
      properties: { name: 'Morpheus, your mentor from the Matrix and first bodhisattva.' },
    },
    { type: 'Defense', properties: { base: 9999, current: 9999 } },
  ],
};

export const Bodhisattva = {
  name: 'Bodhisattva',
  inherit: ['Being'],
  components: [
    {
      type: 'Appearance',
      properties: { char: '@', color: 'green' },
    },
    { type: 'IsTalkable' },
    {
      type: 'Description',
      properties: { name: 'A wandering bodhisattva.' },
    },
    { type: 'Defense', properties: { base: 9999, current: 9999 } },
  ],
};