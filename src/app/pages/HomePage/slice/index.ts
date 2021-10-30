import { PayloadAction } from '@reduxjs/toolkit';
import { createSlice } from 'utils/@reduxjs/toolkit';
import { useInjectReducer } from 'utils/redux-injectors';
import { HomePageState } from './types';

import { ITEMS } from 'models/items';
import { PROFFESIONS } from 'models/proffesions';
import { RECIPES } from 'models/recipes';

export const initialState: HomePageState = {
  proffesions: PROFFESIONS,
  items: ITEMS,
  recipes: RECIPES,
  activeProffesionId: 'smelting',
  activeItemId: null,
};

const slice = createSlice({
  name: 'homePage',
  initialState,
  reducers: {
    setActiveProffesionId(state, action: PayloadAction<string>) {
      let newState = JSON.parse(JSON.stringify(state));
      newState.activeProffesionId = action.payload;
      // state.activeProffesionId = action.payload;
      return newState;
    },
    setActiveItemId(state, action: PayloadAction<string | null>) {
      let newState = JSON.parse(JSON.stringify(state));
      newState.activeItemId = action.payload;
      return newState;
    },
  },
});

export const { actions: homePageActions } = slice;

export const useHomePageSlice = () => {
  useInjectReducer({ key: slice.name, reducer: slice.reducer });
  return { actions: slice.actions };
};

/**
 * Example Usage:
 *
 * export function MyComponentNeedingThisSlice() {
 *  const { actions } = useHomePageSlice();
 *
 *  const onButtonClick = (evt) => {
 *    dispatch(actions.someAction());
 *   };
 * }
 */
