import styled from 'styled-components';

export const CardCategorias = styled.div`
  border-radius: 1.2rem;

  background: ${({ theme }) => theme.backgroundInsideBlocks};

  padding: 1rem 1.2rem;
`;

export const Li = styled.li<{ dotColor: string }>`
  font-weight: 500;
  display: grid;
  grid-template-columns: auto 1fr auto;
  text-transform: capitalize;

  align-items: center;

  font-size: 1.1rem;

  &::before {
    content: '';
    width: 0.65rem;
    height: 0.65rem;
    border-radius: 50%;
    background-color: ${({ dotColor }) => dotColor};
    margin-right: 1rem;
  }

  & svg {
    cursor: pointer;
    transform: scale(1.2) rotate(0deg);

    transition: all 0.2s ease-in-out;
  }

  & svg:hover {
    transform: scale(1.35) rotate(90deg);
  }

  transition: all 0.3s ease-in-out;
`;

export const Ul = styled.ul`
  & ${Li} {
    margin-bottom: 0.6rem;
  }

  & ${Li}:last-child {
    margin-bottom: 0rem;
  }
`;
