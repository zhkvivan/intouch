'use client';
import styled from 'styled-components';

const Wrapper = styled.div`
  display: flex;
  gap: 10px;
  align-items: center;
`;

const Name = styled.span``;

const Avatar = styled.div`
  flex: 0 0 30px;
  width: 30px;
  aspect-ratio: 1;
  border-radius: 50%;
  background-color: #ccc;
  overflow: hidden;
`;

const AvatarImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export { Name, Wrapper, Avatar, AvatarImage };
