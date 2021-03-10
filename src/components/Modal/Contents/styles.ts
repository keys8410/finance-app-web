import styled, { css } from 'styled-components';

type ModalBodyTypes = {
  quitMission?: boolean;
  infosUser?: boolean;
};

export const ModalFooter = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const Modalbody = styled.div<ModalBodyTypes>`
  padding: 0.3rem;

  ${({ quitMission }) =>
    quitMission &&
    css`
      max-width: 20.5rem;
    `}

  ${({ infosUser }) =>
    infosUser &&
    css`
      width: 100%;
      max-width: 56rem;
    `}

    @media(max-width:768px) {
    padding: 0.3rem;
    padding-right: 0.8rem;
  }
`;
