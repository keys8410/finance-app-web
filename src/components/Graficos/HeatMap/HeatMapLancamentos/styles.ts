import styled from 'styled-components';

export const CardContentHeatMap = styled.div`
  @media (max-width: 768px) {
    width: 414.14px;

    white-space: nowrap;

    overflow-x: scroll;
    overflow-y: hidden;
  }

  & > div {
    min-width: 1250px;
    max-width: 1468px;

    width: 100%;

    @media (max-width: 768px) {
      padding-right: 2rem;
    }
  }
`;
