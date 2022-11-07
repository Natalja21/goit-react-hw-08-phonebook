import styled from 'styled-components';

// export const Label = styled.label`
//   max-width: 400px;
//   margin: auto;
//   border: 1px solid rgb(244, 205, 151);
//   padding: 20px;
//   border-radius: 10px;
//   box-shadow: inset 0 0 10px rgb(244, 205, 151), inset 0 0 40px rgb(160, 111, 43);
// `;
export const Input = styled.input`
  min-width: 260px;
  display: block;
  margin: 0 auto;
  border: 1px solid rgb(244, 205, 151);
  border-radius: 10px;
  box-shadow: inset 0 0 10px rgb(244, 205, 151),
    inset 0 0 40px rgb(160, 111, 43);
  height: 30px;
  padding-left: 10px;
  background-color: transparent;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.03em;
  transition: box-shadow 250ms cubic-bezier(0.4, 0, 0.2, 1);
  outline: none;
  color: rgb(244, 205, 151);
  &:focus {
    box-shadow: inset 0 0 10px rgb(244, 205, 151);
  }
  &::placeholder {
    color: rgb(160, 111, 43);
  }
  @media screen and (min-width: 768px) {
    width: 300px;
  }
`;
