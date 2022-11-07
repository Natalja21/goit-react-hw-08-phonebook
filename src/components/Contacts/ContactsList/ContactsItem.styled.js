import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 40px;
  background-color: transparent;
  border: 1px solid rgb(244, 205, 151);
  box-sizing: border-box;
  border-radius: 4px;
  margin-top: 10px;
  color: rgb(244, 205, 151);
  list-style: none;
   box-shadow: inset 0 0 10px rgb(244, 205, 151), inset 0 0 40px rgb(160, 111, 43);

`;
export const Text = styled.p`
  padding: 10px;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.03em;
  
`;
export const Button = styled.button`
  height: 100%;
  font-weight: 700;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.03em;
  background: transparent;
  text-align: center;
  align-items: center;
  color: rgb(244, 205, 151);
  border-radius: 4px;
  border: 1px solid rgb(244, 205, 151);
  outline: none;
  cursor: pointer;
  display: block;
  &:hover,
  &:focus {
    box-shadow: inset 0 0 10px rgb(244, 205, 151);
  }
`;
