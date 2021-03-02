import styled from 'styled-components';
import { AppTheme } from '../../../../@types/appTheme';

export const ContainerTransacaoItem = styled.div<{ visible: boolean }>`
  height: 100%;
  width: 100%;
  padding: 0 0.5rem;
  background: ${({ visible }) => (visible ? '#f5f5f5' : '#fff')};
  border-radius: 0.5rem;
  cursor: ${({ visible }) => (visible ? 'default' : 'pointer')};
`;

export const TitleTransacao = styled.p<{ theme: AppTheme }>`
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
  display: grid;
  grid-template-columns: 1fr 1fr 1fr auto;
  grid-gap: 0.8rem;
  height: 100%;

  & > div {
    display: flex;
    align-items: center;
    justify-content: center;
  }
`;
