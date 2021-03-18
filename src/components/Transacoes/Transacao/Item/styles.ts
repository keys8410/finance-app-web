import styled, { css, keyframes } from 'styled-components';
import { AppTheme } from '../../../../@types/appTheme';

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
  padding: 0 0.5rem;
  background: ${({ visible }) => (visible ? '#f5f5f5' : '#fff')};
  border-radius: 0.5rem;
  cursor: ${({ visible }) => (visible ? 'default' : 'pointer')};
`;

export const TitleTransacao = styled.p<{ theme: AppTheme; titulo?: boolean }>`
  margin-left: 1rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colorTitleTransacao};

  display: flex;
  align-items: center;
  height: 100%;

  text-overflow: ellipsis;

  white-space: nowrap;
  overflow: hidden;

  ${({ titulo }) =>
    titulo &&
    css`
      min-width: 10rem;
      max-width: 10rem;
    `}
`;

export const SubtitleTransacao = styled.span<{ theme: AppTheme }>`
  font-weight: 400;
  color: ${({ theme }) => theme.colorSubtitleTransacao};

  display: flex;
  align-items: center;
  height: 100%;
`;

export const TransacaoContainer = styled.section`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr auto;
  grid-gap: 0.8rem;
  height: 100%;

  animation: ${bounceInLeft} 1.2s;
  animation-fill-mode: both;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;

export const TransacaoContent = styled.div``;
