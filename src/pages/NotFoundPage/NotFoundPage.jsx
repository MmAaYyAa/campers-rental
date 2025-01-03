import { StyledLink, Message } from "./NotFoundPage.styled";

export default function NotFound() {
    return (<Message>
      Sorry, page is not found! Please back to <StyledLink to="/">Home Page</StyledLink>!
    </Message>); 
  }