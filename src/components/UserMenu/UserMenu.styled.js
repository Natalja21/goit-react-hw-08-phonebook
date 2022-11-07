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
 border: 1px solid rgb(244, 205, 151);
  border-radius: 4px;
  outline: none;
  cursor: pointer;
&:hover,
  &:focus {
    box-shadow: inset 0 0 10px rgb(244, 205, 151);
  }
`;
