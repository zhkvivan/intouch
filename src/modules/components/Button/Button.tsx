import { MyButton } from './Button.style';
import { ButtonProps } from './Button.types';

const Button = ({ label, type }: ButtonProps) => {
  return <MyButton $type={type}>{label}</MyButton>;
};

export default Button;
