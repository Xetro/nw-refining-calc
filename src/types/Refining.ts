export interface Proffesion {
  id: string;
  name: string;
  img_url: string;
}

export interface Item {
  id: string;
  name: string;
  tier: number;
  img_url: string;
}

export interface ItemTree {
  proffesion: string;
  raw: Item[];
  refined: Item[];
  ref_mat: Item[];
}

export interface RefiningTree {
  proffesion: string;
  refining_material: string;
  chains: RefiningChain[];
}

export interface RefiningChain {
  name: string;
  input: RefiningChainInput[];
  output: string;
  experience: number;
  tax: number;
  base_chance: number;
  ref_mat_required: boolean;
  ref_mat_adds_bonus: boolean;
  chain_tier: number;
}

export interface RefiningChainInput {
  item_id: string;
  amount: number;
}
