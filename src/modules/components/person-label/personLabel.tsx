import React from 'react';
import { Avatar, AvatarImage, Name, Wrapper } from './personLabel.style';

interface PersonLabelProps {
  name: string;
  avatar?: string;
}

const PersonLabel = ({ name, avatar }: PersonLabelProps) => {
  return (
    <Wrapper>
      <Avatar>
        <AvatarImage src={avatar} />
      </Avatar>
      <Name>{name}</Name>
    </Wrapper>
  );
};

export default PersonLabel;
