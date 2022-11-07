import styled from 'styled-components';

export const Form = styled.form`
  max-width: 400px;
  border: 1px solid rgb(244, 205, 151);
  padding: 20px;
  border-radius: 10px;
  box-shadow: inset 0 0 10px rgb(244, 205, 151),
    inset 0 0 40px rgb(160, 111, 43);
  margin: auto;
  @media screen and (min-width: 768px) {
    width: 320px;
  }
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  color: rgb(244, 205, 151);
  margin-bottom: 10px;
  font-weight: 500;
  font-size: 14px;
  line-height: 1.71;
  letter-spacing: 0.03em;
`;
export const Input = styled.input`
  width: 100%;
  height: 30px;
  padding-left: 10px;
  background-color: transparent;
  border: 1px solid rgb(244, 205, 151);
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.03em;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
  margin-top: 10px;
  color: rgb(244, 205, 151);
  &:focus {
    box-shadow: inset 0 0 10px rgb(244, 205, 151);
  }
  &::placeholder {
    color: rgb(160, 111, 43);
  }
`;
export const Button = styled.button`
  width: 80px;
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
  padding: 5px 10px;
  margin: 20px auto 0 auto;
  display: block;
  &:hover,
  &:focus {
    box-shadow: inset 0 0 10px rgb(244, 205, 151);
  }
`;
