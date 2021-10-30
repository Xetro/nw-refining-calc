import { ItemTree, Proffesion, RefiningTree } from 'types/Refining';

/* --- STATE --- */
export interface HomePageState {
  proffesions: Proffesion[];
  items: ItemTree[];
  recipes: RefiningTree[];
  activeProffesionId: string;
  activeItemId: string | null;
}
