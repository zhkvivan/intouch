import SignInOutButton from '../Button/sign-in-out-button';
import {
  StyledHeader,
  StyledHeaderTitle,
  SubHeading,
  GreetingsContainer,
} from './header.style';

const Header = () => {
  return (
    <StyledHeader>
      <GreetingsContainer>
        <StyledHeaderTitle>Hi, Ivan</StyledHeaderTitle>
        <SubHeading>You have 4 important connections today</SubHeading>
      </GreetingsContainer>
      <SignInOutButton label="Sign in" />
    </StyledHeader>
  );
};

export default Header;
