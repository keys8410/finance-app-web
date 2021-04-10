import styled, { css, keyframes } from 'styled-components';

const bounceInLeft = keyframes`
  0% {
      opacity: 0;
      transform: translateX(-80px);
  }
  60% {
      opacity: 1;
      transform: translateX(3px);
  }
  75% {
      transform: translateX(-3px);
  }
  100% {
      transform: translateX(0);
  }`;

export const ContainerTransacaoItem = styled.div<{ visible: boolean }>`
  height: 100%;
  width: 100%;
  padding: 0 0.3rem;
  box-shadow: 0 0 0 rgba(0, 0, 0, 0);

  transition: all 0.15s ease-in-out;

  transition: box-shadow 300ms cubic-bezier(0.4, 0, 0.2, 1) 0ms;
  box-shadow: 0px 2px 4px -1px rgb(0 0 0 / 10%), 0px 4px 5px 0px rgb(0 0 0 / 5%),
    0px 1px 10px 0px rgb(0 0 0 / 4%);

  border: 1px solid ${({ theme }) => theme.palette.components.transacao.border};
  border-radius: 0.5rem;
  cursor: ${({ visible }) => (visible ? 'default' : 'pointer')};
`;

export const TitleTransacao = styled.p`
  margin-left: 0.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.palette.text.primary};

  display: flex;
  align-items: center;
  height: 100%;
`;

export const SubtitleTransacao = styled.span`
  font-weight: 400;
  color: ${({ theme }) => theme.palette.text.secondary};

  display: flex;
  align-items: center;
  height: 100%;
`;

export const TransacaoContainer = styled.section`
  height: 100%;

  animation: ${bounceInLeft} 1s;
  animation-fill-mode: both;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const ContainerTransacao = styled.div`
  width: 160px;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;

  @media (min-width: 768px) {
    width: 250px;
  }
`;

export const IconAction = styled.div`
  cursor: pointer;
`;
