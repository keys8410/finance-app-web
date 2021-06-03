import ReactInputMask from 'react-input-mask';
import styled from 'styled-components';

export const CustomInputMask = styled(ReactInputMask)`
  border-radius: 5px;
  padding: 11px 9px;
  transition: 0.1s;
  font-size: 0.9rem;
  width: stretch;

  border: 1.5px solid #ddd;
  color: ${({ theme }) => theme.typography.input};

  filter: brightness(1);

  background: transparent;

  &:focus {
    border: 1.5px solid #51beff88;
  }

  &:hover {
    border: 1.5px solid #ccc;
  }
`;
