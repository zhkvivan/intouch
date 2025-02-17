import { StyledSignInButton } from './sign-in-out-button.style';
import { UserButton, SignInButton, SignedIn, SignedOut } from '@clerk/nextjs';

interface SignInOutButtonProps {
  label: string;
}

const SignInOutButton = ({ label }: SignInOutButtonProps) => {
  return (
    <>
      <SignedOut>
        <SignInButton mode="modal">
          <StyledSignInButton>{label}</StyledSignInButton>
        </SignInButton>
      </SignedOut>
      <SignedIn>
        <UserButton />
      </SignedIn>
    </>
  );
};

export default SignInOutButton;
