export const RECIPES = [
  {
    proffesion: 'smelting',
    refining_material: 'flux',
    chains: [
      {
        name: 'Charcoal',
        input: [
          {
            item_id: 'wood',
            amount: 2,
          },
        ],
        output: 'charcoal',
        experience: 18,
        tax: 0.01,
        base_chance: -0.02,
        ref_mat_required: false,
        ref_mat_adds_bonus: false,
        chain_tier: 2,
      },
      {
        name: 'Iron Ingot',
        input: [
          {
            item_id: 'iron_ore',
            amount: 4,
          },
        ],
        output: 'iron_ingot',
        experience: 36,
        tax: 0.01,
        base_chance: -0.02,
        ref_mat_required: false,
        ref_mat_adds_bonus: false,
        chain_tier: 2,
      },
      {
        name: 'Silver Ingot',
        input: [
          {
            item_id: 'silver_ore',
            amount: 4,
          },
        ],
        output: 'silver_ingot',
        experience: 36,
        tax: 0.01,
        base_chance: -0.02,
        ref_mat_required: false,
        ref_mat_adds_bonus: false,
        chain_tier: 2,
      },
      {
        name: 'Steel Ingot',
        input: [
          {
            item_id: 'iron_ingot',
            amount: 3,
          },
          {
            item_id: 'charcoal',
            amount: 2,
          },
        ],
        output: 'steel_ingot',
        experience: 228,
        tax: 0.04,
        base_chance: -0.02,
        ref_mat_required: true,
        ref_mat_adds_bonus: true,
        chain_tier: 3,
      },
      {
        name: 'Gold Ingot',
        input: [
          {
            item_id: 'gold_ore',
            amount: 5,
          },
          {
            item_id: 'silver_ingot',
            amount: 2,
          },
        ],
        output: 'gold_ingot',
        experience: 304,
        tax: 0.04,
        base_chance: -0.05,
        ref_mat_required: true,
        ref_mat_adds_bonus: true,
        chain_tier: 3,
      },
      {
        name: 'Starmetal Ingot',
        input: [
          {
            item_id: 'starmetal_ore',
            amount: 6,
          },
          {
            item_id: 'steel_ingot',
            amount: 2,
          },
          {
            item_id: 'charcoal',
            amount: 2,
          },
        ],
        output: 'starmetal_ingot',
        experience: 2035,
        tax: 0.07,
        base_chance: -0.02,
        ref_mat_required: true,
        ref_mat_adds_bonus: true,
        chain_tier: 4,
      },
      {
        name: 'Platinum Ingot',
        input: [
          {
            item_id: 'platinum_ore',
            amount: 6,
          },
          {
            item_id: 'gold_ingot',
            amount: 2,
          },
        ],
        output: 'platinum_ingot',
        experience: 1665,
        tax: 0.07,
        base_chance: -0.07,
        ref_mat_required: true,
        ref_mat_adds_bonus: true,
        chain_tier: 5,
      },
      {
        name: 'Orichalcum Ingot',
        input: [
          {
            item_id: 'orichalcum_ore',
            amount: 8,
          },
          {
            item_id: 'starmetal_ingot',
            amount: 2,
          },
          {
            item_id: 'charcoal',
            amount: 2,
          },
        ],
        output: 'orichalcum_ingot',
        experience: 10010,
        tax: 0.13,
        base_chance: -0.02,
        ref_mat_required: true,
        ref_mat_adds_bonus: true,
        chain_tier: 5,
      },
      {
        name: 'Asmodeum Ingot',
        input: [
          {
            item_id: 'tolvium',
            amount: 1,
          },
          {
            item_id: 'cinnabar',
            amount: 1,
          },
          {
            item_id: 'orichalcum_ingot',
            amount: 5,
          },
          {
            item_id: 'charcoal',
            amount: 2,
          },
        ],
        output: 'asmodeum',
        experience: 7700,
        tax: 0.19,
        base_chance: -0.2,
        ref_mat_required: true,
        ref_mat_adds_bonus: true,
        chain_tier: 5,
      },
      {
        name: 'Voidbent Ingot',
        input: [
          {
            item_id: 'void_ore',
            amount: 1,
          },
          {
            item_id: 'void_essence',
            amount: 1,
          },
        ],
        output: 'voidbent_ingot',
        experience: 0,
        tax: 1,
        base_chance: 0,
        ref_mat_required: false,
        ref_mat_adds_bonus: false,
        chain_tier: 5,
      },
    ],
  },
  {
    proffesion: 'woodworking',
    refining_material: 'sandpaper',
    chains: [
      {
        name: 'Timber',
        input: [
          {
            item_id: 'green_wood',
            amount: 4,
          },
        ],
        output: 'timber',
        experience: 36,
        tax: 0.01,
        base_chance: -0.02,
        ref_mat_required: false,
        ref_mat_adds_bonus: false,
        chain_tier: 2,
      },
      {
        name: 'Lumber',
        input: [
          {
            item_id: 'aged_wood',
            amount: 4,
          },
          {
            item_id: 'timber',
            amount: 2,
          },
        ],
        output: 'lumber',
        experience: 266,
        tax: 0.04,
        base_chance: -0.02,
        ref_mat_required: true,
        ref_mat_adds_bonus: true,
        chain_tier: 3,
      },
      {
        name: 'Wyrdwood Planks',
        input: [
          {
            item_id: 'wyrdwood',
            amount: 6,
          },
          {
            item_id: 'lumber',
            amount: 2,
          },
        ],
        output: 'wyrdwood_plank',
        experience: 1665,
        tax: 0.07,
        base_chance: -0.02,
        ref_mat_required: true,
        ref_mat_adds_bonus: true,
        chain_tier: 4,
      },
      {
        name: 'Ironwood Planks',
        input: [
          {
            item_id: 'ironwood',
            amount: 8,
          },
          {
            item_id: 'wyrdwood_plank',
            amount: 2,
          },
        ],
        output: 'ironwood_plank',
        experience: 8470,
        tax: 0.13,
        base_chance: -0.02,
        ref_mat_required: true,
        ref_mat_adds_bonus: true,
        chain_tier: 5,
      },
    ],
  },
];
