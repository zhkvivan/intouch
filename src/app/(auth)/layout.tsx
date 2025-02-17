import { StyledSignInOutLayout } from '@/src/modules/layouts/sign-in-out-layout.style';
import React from 'react';

export default function Layout({ children }: { children: React.ReactNode }) {
  return <StyledSignInOutLayout>{children}</StyledSignInOutLayout>;
}
