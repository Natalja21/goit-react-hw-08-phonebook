import styled from 'styled-components';

export const ContactBox = styled.div`
  @media screen and (min-width: 768px) {
    display: flex;
    justify-content: space-evenly;
    align-items: flex-start;
    padding-left:20px
  } ;
`;

export const ContactsTitle = styled.h2`
  text-align: center;
  color: rgb(160, 111, 43);
  margin-bottom: 10px;
  font-weight: 900;
  font-size: 18px;
  line-height: 1.17;
  letter-spacing: 0.03em;
`;
