import styled, { css, keyframes } from 'styled-components';
import { AppTheme } from '../../../../@types/appTheme';
import { manusearCor } from '../../../../utils/colorUtils';

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
  border: 1px solid #fff;
  border-radius: 0.5rem;
  cursor: ${({ visible }) => (visible ? 'default' : 'pointer')};

  transition: all 0.15s ease-in-out;
  ${({ visible }) =>
    visible &&
    css`
      border: 1px solid #eee;
      box-shadow: 0 0.125rem 0.25rem rgba(0, 0, 0, 0.075);
    `};
`;

export const TitleTransacao = styled.p<{ theme: AppTheme }>`
  margin-left: 0.25rem;
  font-weight: 700;
  color: ${({ theme }) => theme.colorTitleTransacao};

  display: flex;
  align-items: center;
  height: 100%;
`;

export const SubtitleTransacao = styled.span<{ theme: AppTheme }>`
  font-weight: 400;
  color: ${({ theme }) => theme.colorSubtitleTransacao};

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
