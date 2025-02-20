import React from 'react';
import {
  SubHeadingWrapper,
  SubHeadingText,
  SubHeadingIconWrapper,
} from './daily-bonds.style';
import { Gift } from '@phosphor-icons/react/dist/ssr';

export const Subheading = ({
  text,
  icon,
}: {
  text: string;
  icon: React.ReactNode;
}) => {
  return (
    <SubHeadingWrapper>
      <SubHeadingIconWrapper>{icon}</SubHeadingIconWrapper>
      <SubHeadingText>{text}</SubHeadingText>
    </SubHeadingWrapper>
  );
};
