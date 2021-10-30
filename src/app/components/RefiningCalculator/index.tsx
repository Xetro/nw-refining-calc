import styled from 'styled-components/macro';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHomePageSlice } from 'app/pages/HomePage/slice';
import {
  selectActiveItem,
  selectActiveProffesion,
  selectItemsForActiveProffesion,
} from 'app/pages/HomePage/slice/selectors';
import { RefiningChain } from './RefiningChain';
import { RECIPES } from 'models/recipes';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  
`;

const CalculatorWrapper = styled.div`
  margin: 0 10px 10px 10px;
  border: solid 10px #426642;
  border-radius: 5px;
  flex-grow: 1;
`;

const Calculator = styled.div``;

const ResourceWrapper = styled.div`
  display: flex;
  justify-content: center;
  
`;

// align-items: flex-start;
// justify-content: space-between;
export const ResourceImg = styled.img`
  max-width: 80px;
  max-height: 80px;
`;

export const ResourceButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 120px;
  height: 170px;
  text-align: center;
  background-color: #2e2a2a;
  border-radius: 3px;
  margin: 20px 10px;
  padding: 10px;
  cursor: pointer;

  &.selected {
      position: relative;
    border: solid 5px #426642;
    /* border-right: solid 15px #426642; */
    /* border-top-right-radius: 0; */
    border-bottom-right-radius: 0;
    border-bottom-left-radius: 0;
    /* margin-right: 0; */
    /* width: 130px; */

    &:after {
        content: "";
        position: absolute;
        left: -5px;
        right: -5px;
        top: calc(100% + 5px);
        height: 20px;
        background-color: #426642;
    }
  }

  &:hover {
    background-color: #2e2a2a54;
  }
`;

const NekDive = styled.div`
  padding: 20px;
  background-color: #426642;
`;

export function RefiningCalculator({ proffesion, recipes, items }) {
  const { actions } = useHomePageSlice();
  const dispatch = useDispatch();
  const selectedItem = useSelector(selectActiveItem);
  const selectedProffesion = useSelector(selectActiveProffesion);
  const kekect = useSelector(selectItemsForActiveProffesion);

  //   const selectActiveProffesion = (proffesion: string) => {
  //     setSelectedProffesion(proffesion);

  //     dispatch(actions.setActiveProffesion(proffesion));

  console.log('SELECTED ITEM: ', selectedItem);
  console.log('SELECTED PROFFESION: ', selectedProffesion);
  console.log('kekectPROFFESION: ', kekect);

  return (
    <>
      <Wrapper>
        <ResourceWrapper>
          {recipes &&
            recipes.chains.map(recipe => {
              let item = items.refined.find(item => item.id === recipe.output);
                
              console.log('ITEM: ', item)
              console.log('repc outp: ', recipe.output)
              return (
                <ResourceButton
                  key={item.id}
                  onClick={() => dispatch(actions.setActiveItemId(item.id))}
                  className={
                    selectedItem && item.id === selectedItem?.id
                      ? 'selected'
                      : undefined
                  }
                >
                  <ResourceImg src={item.img_url}></ResourceImg>
                  <span>{item.name}</span>
                </ResourceButton>
              );
            })}
        </ResourceWrapper>
        <CalculatorWrapper>
          <NekDive>
            <input></input>
          </NekDive>
          {selectedItem && (
            <RefiningChain
              allChains={recipes.chains}
              chain={recipes.chains.find(
                chain => chain.output === selectedItem.id,
              )}
              isIronOre={false}
            />
          )}
          {!selectedItem && <p>SELEKTOMUNDO MODELO!</p>}
        </CalculatorWrapper>
      </Wrapper>
    </>
  );
}
