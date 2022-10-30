import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 400px;
  height: 200px;
  margin: auto;
  
`;

export const Label = styled.label`
  display: flex;
  flex-direction: column;
  font-weight: 500;
  font-size: 12px;
  line-height: 1.17;
  letter-spacing: 0.01em;
  color: #857c7c;
  margin-bottom: 10px;
`;
export const Input = styled.input`
  width: 100%;
  height: 30px;
  padding-left: 10px;
  border: transparent;
  box-sizing: border-box;
  border-radius: 4px;
  font-size: 14px;
  line-height: 1.14;
  letter-spacing: 0.01em;
  transition: border 250ms cubic-bezier(0.4, 0, 0.2, 1);
  outline: transparent;
  margin-top: 10px;
  box-shadow: 0 0 10px rgba(255, 72, 0, 0.474);
  color: #857c7c;
  &:focus {
    border: 1px solid #f39c21;
   
  }
   &::placeholder {
      color: orange;
    }
`;
export const Button = styled.button`
  font-weight: 700;
  font-size: 16px;
  line-height: 1.87;
  text-align: center;
  align-items: center;
  letter-spacing: 0.06em;
  background: #fff;
  color: #85807c;
  box-shadow: 0 0 10px rgba(255, 72, 0, 0.474);
  border-radius: 4px;
  border: transparent;
  outline: none;
  cursor: pointer;
  padding: 5px 10px;
  display: block;
  margin: 10px auto;
`;
