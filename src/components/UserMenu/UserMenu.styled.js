import styled from 'styled-components';

export const Box = styled.div`
  display: flex;
  justify-content: end;
  align-items: center;
`;
export const Text = styled.p`
  color: rgb(244, 205, 151);
  margin-right: 20px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.71;
  letter-spacing: 0.03em;
`;
export const Button = styled.button`
  padding: 5px;
  background: transparent;
  color: rgb(244, 205, 151);
  box-shadow: 0 0 10px rgba(255, 72, 0, 0.474), 0 0 40px rgb(244, 205, 151);
  border-radius: 4px;
  border: transparent;
  outline: none;
  cursor: pointer;
  &:focus,
  &:hover {
    color: rgb(160, 111, 43);
  }
`;
