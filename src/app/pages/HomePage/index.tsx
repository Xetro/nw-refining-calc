import { ProffesionSelector } from 'app/components/ProffesionSelector';
import { RefiningCalculator } from 'app/components/RefiningCalculator';
import * as React from 'react';
import { Helmet } from 'react-helmet-async';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { useHomePageSlice } from './slice';
import {
  selectActiveProffesion,
  selectItems,
  selectItemsForActiveProffesion,
  selectProffesions,
  selectRecipes,
  selectRecipesForActive,
} from './slice/selectors';

const Wrapper = styled.section`
  padding: 4em;
`;

export function HomePage() {
  const {} = useHomePageSlice();
  // const items = useSelector(selectItems);
  const proffesions = useSelector(selectProffesions);
  const activeProffesion = useSelector(selectActiveProffesion);
  const recipes = useSelector(selectRecipesForActive);
  const items = useSelector(selectItemsForActiveProffesion);

  console.log('ACTIVE: ', activeProffesion);
  console.log('recip', recipes);

  // const recipes = useSelector(selectRecipes);

  return (
    <>
      <Helmet>
        <title>Home Page</title>
        <meta name="description" content="A Boilerplate application homepage" />
      </Helmet>
      <Wrapper>
        <ProffesionSelector proffesions={proffesions}></ProffesionSelector>
        <RefiningCalculator
          proffesion={activeProffesion}
          recipes={recipes}
          items={items}
        ></RefiningCalculator>
      </Wrapper>
    </>
  );
}
