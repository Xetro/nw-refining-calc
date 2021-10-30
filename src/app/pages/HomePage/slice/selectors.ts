import { createSelector } from '@reduxjs/toolkit';

import { RootState } from 'types';
import { initialState } from '.';

const selectSlice = (state: RootState) => state.homePage || initialState;

export const selectProffesions = createSelector(
  [selectSlice],
  state => state.proffesions,
);
export const selectRecipes = createSelector(
  [selectSlice],
  state => state.recipes,
);
export const selectItems = createSelector([selectSlice], state => state.items);

export const selectActiveProffesionId = createSelector(
  [selectSlice],
  state => state.activeProffesionId,
);
export const selectActiveProffesion = createSelector([selectSlice], state => {
  let active = state.proffesions.find(
    proff => proff.id === state.activeProffesionId,
  );
  return active;
});

export const selectRecipesForActive = createSelector([selectSlice], state => {
  let recipes = state.recipes.find(
    recipe => recipe.proffesion === state.activeProffesionId,
  );
  return recipes;
});

export const selectItemsForActiveProffesion = createSelector(
  [selectSlice, selectActiveProffesionId],
  (state, active_id) => {
    let items = state.items.find(item => item.proffesion === active_id);
    return items;
  },
);

export const selectActiveItemId = createSelector(
  [selectSlice],
  state => state.activeItemId,
);

export const selectItemById = item_id =>
  createSelector([selectItemsForActiveProffesion], items => {
    if (!items) {
      return null;
    }
    return [...items?.refined, ...items?.raw, ...items?.ref_mat].find(
      item => item.id === item_id,
    );
  });

export const selectActiveItem = createSelector(
  [selectActiveItemId, selectItemsForActiveProffesion],
  (active_id, items) => {
    let active = items
      ? items.refined.find(item => item.id === active_id)
      : undefined;
    return active;
  },
);
