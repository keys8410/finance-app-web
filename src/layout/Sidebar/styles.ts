import styled from 'styled-components';

export const CompositionContainer = styled.div`
  border-radius: 1.1rem;
  background: ${({ theme }) => theme.palette.components.composition.background};
  padding: 1rem 0.5rem;
  height: 100%;

  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 8%), 0px 4px 5px 0px rgb(0 0 0 / 5%),
    0px 1px 10px 0px rgb(0 0 0 / 4%);

  transition: padding 0.2s ease-in-out;
  transition: height 0.2s ease-in-out;
`;

export const CompositionContainerSidebar = styled(CompositionContainer)`
  display: grid;

  grid-template-rows: auto 1fr;
`;
