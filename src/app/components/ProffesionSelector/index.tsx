import styled from 'styled-components/macro';
import { Link as RouterLink } from 'react-router-dom';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHomePageSlice } from 'app/pages/HomePage/slice';

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

const ProffesionImg = styled.img`
  max-height: 100px;
`;

const ProffesionButton = styled.button`
  background-color: transparent;
  border: none;
  color: white;
  border: solid 3px transparent;
  border-radius: 5px;
  cursor: pointer;

  &.selected {
    border: solid 3px white;
  }

  &:hover {
    background-color: #ffffff24;
  }
`;

export function ProffesionSelector({ proffesions }) {
  const { actions } = useHomePageSlice();
  const dispatch = useDispatch();

  const [selectedProffesion, setSelectedProffesion] = useState('smelting');

  const selectActiveProffesion = (proffesion: string) => {
    setSelectedProffesion(proffesion);

    dispatch(actions.setActiveItemId(null));
    dispatch(actions.setActiveProffesionId(proffesion));
  };

  return (
    <>
      <Wrapper>
        {proffesions.map(prof => (
          <ProffesionButton
            className={prof.id === selectedProffesion ? 'selected' : undefined}
            key={prof.id}
            onClick={() => selectActiveProffesion(prof.id)}
          >
            <ProffesionImg src={prof.img_url}></ProffesionImg>
            <p>{prof.name}</p>
          </ProffesionButton>
        ))}
      </Wrapper>
    </>
  );
}

export const Link = styled(RouterLink)`
  color: ${p => p.theme.primary};
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    opacity: 0.8;
  }

  &:active {
    opacity: 0.4;
  }
`;
