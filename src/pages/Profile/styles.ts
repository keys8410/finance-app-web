import styled from 'styled-components';

export const ImageProfile = styled.img`
  cursor: pointer;

  border-radius: 1.2rem;

  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 12%), 0px 4px 5px 0px rgb(0 0 0 / 6%),
    0px 1px 10px 0px rgb(0 0 0 / 5%);

  transition: all 0.3s ease-in-out;

  @media (max-width: 768px) {
    margin-top: 0.5rem;
  }
`;
