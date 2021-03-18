import styled, { css } from 'styled-components';

type ModalBodyTypes = {
  lancamento?: boolean;
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

  ${({ lancamento }) =>
    lancamento &&
    css`
      width: 30rem;
    `}

  ${({ infosUser }) =>
    infosUser &&
    css`
      width: 100%;
      max-width: 56rem;
    `}

    @media(max-width:768px) {
    padding: 0.3rem;
    padding-right: 2.3rem;
    padding-bottom: 0.8rem;
  }
`;
