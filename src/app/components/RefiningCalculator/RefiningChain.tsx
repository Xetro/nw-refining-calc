import {
  selectActiveItem,
  selectItemById,
} from 'app/pages/HomePage/slice/selectors';
import { useSelector } from 'react-redux';
import styled from 'styled-components';


export const ChainColumn = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  // border: solid 3px green;

  &:first-child {
    /* border-right: solid 3px blue; */
    align-items: baseline;
    // margin-left: 0;
  }

  // margin: 0 40px;
`;
export const ChainRow = styled.div`
  display: flex;
  position: relative;
  // border: solid 3px red;

  & > * {
    // border: 4px solid blue;
  }
  justify-content: space-between;
  align-items: flex-start;
  /* border-top: solid 6px ${props => (props.color ? props.color : 'gray')}; */

  margin: 0 15px;

  &:after {
    content: '';
    position: absolute;
    top: -96px;
    left: calc(50% - 3px);
    height: 90px;
    width: 6px;
  }
  &.first-tier {
    border-top: solid 6px #540b0e;
    &:after {
      background-color: #540b0e;
    }
  }

  &.second-tier {
    border-top: solid 6px #335c67;
    &:after {
      background-color: #335c67;
    }
  }

  &.third-tier {
    border-top: solid 6px #fff3b0;
    &:after {
      background-color: #fff3b0;
    }
  }

  &.fourth-tier {
    border-top: solid 6px #e09f3e;
    &:after {
      background-color: #e09f3e;
    }
  }

  &.fifth-tier {
    border-top: solid 6px #9e2a2b;
    &:after {
      background-color: #9e2a2b;
    }
  }

  &.iron-margin {
    /* border-right: solid 3px blue; */
    margin: 0;
  }

  &:first-child {
    border: none;

    &:after {
      display: none;
    }
  }

  &:last-child {
    // margin: 0;
  }
`;

let colorClases = [
  'first-tier',
  'second-tier',
  'third-tier',
  'fourth-tier',
  'fifth-tier',
];
export function RefiningChain({ allChains, chain, isIronOre }) {
  // console.log('ALES CHAINES: ', allChains)
  // let kek = [...allChains].reverse();
  const chainCount = [...allChains].reverse().indexOf(chain);

  return (
    <ChainRow
      className={[
        isIronOre ? 'iron-margin' : undefined,
        colorClases[chainCount],
      ].join(' ')}
    >
      {chain.input.map(ingredient => {
        let child_chain = allChains.find(
          chain => chain.output === ingredient.item_id,
        );
        return (
          <>
            {child_chain && (
              <ChainColumn className={''}>
                <RefiningChainItem
                  chainCount={chainCount}
                  ingredient={ingredient}
                  hasChild={true}
                />
                <RefiningChain
                  allChains={allChains}
                  chain={child_chain}
                  isIronOre={child_chain.input[0].item_id === 'iron_ore'}
                />
              </ChainColumn>
            )}
            {!child_chain && (
              <ChainColumn className="COLUMN">
                <RefiningChainItem
                  chainCount={chainCount}
                  ingredient={ingredient}
                  hasChild={false}
                />
              </ChainColumn>
            )}
          </>
        );
      })}
      {chain.ref_mat_required && (
        <RefiningChainItem
          chainCount={chainCount}
          ingredient={{ item_id: 'obsidian_flux', amount: 1 }}
          hasChild={false}
        ></RefiningChainItem>
      )}
    </ChainRow>
  );
}

const AmountInput = styled.input`
  height: 50px;
  width: 100px;
  margin-top: 20px;
  margin-bottom: 20px;
  z-index: 50;
`;

const ChainItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const ResourceButton = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 170px;
  text-align: center;
  background-color: #2e2a2a;
  border-radius: 0 0 10px 10px;
  position: relative;
  // margin: 10px 10px 10px 0;

  padding: 5px;
  cursor: pointer;

  &:before {
    content: '';
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    height: 10px;
  }

  &.first-tier {
    border-top: solid 4px #540b0e;
    &:before {
      border-left: solid 10px #540b0e;
      border-right: solid 10px #540b0e;
    }
  }

  &.second-tier {
    border-top: solid 4px #335c67;
    &:before {
      border-left: solid 10px #335c67;
      border-right: solid 10px #335c67;
    }
  }

  &.third-tier {
    border-top: solid 4px #fff3b0;
    &:before {
      border-left: solid 10px #fff3b0;
      border-right: solid 10px #fff3b0;
    }
  }

  &.fourth-tier {
    border-top: solid 4px #e09f3e;
    &:before {
      border-left: solid 10px #e09f3e;
      border-right: solid 10px #e09f3e;
    }
  }

  &.fifth-tier {
    border-top: solid 4px #9e2a2b;
    &:before {
      border-left: solid 10px #9e2a2b;
      border-right: solid 10px #9e2a2b;
    }
  }

  &.has-children {
    border-radius: 0;

    &:after {
      content: '';
      position: absolute;
      left: 0;
      right: 0;
      bottom: 0;
      height: 10px;
    }

    &.first-tier {
      border-bottom: solid 10px #335c67;

      &:after {
        border-left: solid 10px #335c67;
        border-right: solid 10px #335c67;
      }
    }

    &.second-tier {
      border-bottom: solid 10px #fff3b0;

      &:after {
        border-left: solid 10px #fff3b0;
        border-right: solid 10px #fff3b0;
      }
    }

    &.third-tier {
      border-bottom: solid 10px #e09f3e;
      &:after {
        border-left: solid 10px #e09f3e;
        border-right: solid 10px #e09f3e;
      }
    }

    &.fourth-tier {
      border-bottom: solid 10px #9e2a2b;
      &:after {
        border-left: solid 10px #9e2a2b;
        border-right: solid 10px #9e2a2b;
      }
    }

    &.fifth-tier {
      border-bottom: solid 10px #540b0e;
      &:after {
        border-left: solid 10px #540b0e;
        border-right: solid 10px #540b0e;
      }
    }
  }

  &.first-row {
    border-top: 0;
    &:before {
      display: none;
    }
  }
`;

export const ResourceImg = styled.img`
  max-width: 50px;
  max-height: 50px;
`;

function RefiningChainItem({ chainCount, ingredient, hasChild }) {
  const item = useSelector(selectItemById(ingredient.item_id));
  const activeItem = useSelector(selectActiveItem);

  console.log('CHAIN COUNT: ', chainCount, ingredient);

  return (
    <ChainItemWrapper>
      <ResourceButton
        className={[
          hasChild ? 'has-children' : undefined,
          chainCount === 0 ? 'first-row' : undefined,
          colorClases[chainCount],
        ].join(' ')}
      >
        <span>{item?.tier}</span>
        <ResourceImg src={item?.img_url}></ResourceImg>
        <span>{item?.name}</span>
        <span>x{ingredient.amount}</span>
      </ResourceButton>
      <AmountInput />
    </ChainItemWrapper>
  );
}
