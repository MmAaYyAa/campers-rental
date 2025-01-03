import styled from 'styled-components';
import { Link } from "react-router-dom";


export const Message = styled.p`
margin-top: 200px;
font-size: 24px;
text-align: center;
`;

export const StyledLink = styled(Link)`
  color: var( --color-button);
  text-decoration: underline;

  &:hover{
    color: var(--color-button-hover);
  }
`;





