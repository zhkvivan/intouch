import { ReactNode } from 'react';
import {
  SidebarItemWrapper,
  SidebarItemIcon,
  SidebarItemText,
} from './Sidebar.style';

interface SidebarItemProps {
  icon: ReactNode;
  text: string;
  onClick?: () => void;
  children?: ReactNode;
}

const SidebarItem = ({ icon, text, onClick, children }: SidebarItemProps) => {
  return (
    <SidebarItemWrapper onClick={onClick}>
      <SidebarItemIcon>{icon}</SidebarItemIcon>
      <SidebarItemText>{text}</SidebarItemText>
      {children}
    </SidebarItemWrapper>
  );
};

export default SidebarItem;
