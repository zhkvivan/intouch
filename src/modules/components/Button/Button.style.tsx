'use client';

import styled from 'styled-components';

type ButtonProps = {
  $type?: string;
};

export const MyButton = styled.button<ButtonProps>`
  background-color: red;
  color: white;
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;
