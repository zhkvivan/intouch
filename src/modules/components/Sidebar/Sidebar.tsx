'use client';
import Link from 'next/link';
import SidebarItem from './sidebar-item';
import {
  SidebarWrapper,
  SidebarCollection,
  SidebarLogo,
} from './Sidebar.style';
import PersonLabel from '../person-label/personLabel';
import { UsersThree } from '@phosphor-icons/react/dist/ssr';

interface SidebarItem {
  icon: React.ReactNode;
  text: string;
  href: string;
}

const sidebarItems: SidebarItem[] = [
  {
    icon: <UsersThree size="100%" weight="light" />,
    text: 'Daily Bonds',
    href: '/daily-bonds',
  },
  {
    icon: <UsersThree size="100%" weight="light" />,
    text: 'Needs Attention',
    href: '/needs-attention',
  },
];

const personList = [
  {
    name: 'Emma Holloway',
    avatar: '/portraits/portrait-1.jpg',
  },
  {
    name: 'Liam Whitaker',
    avatar: '/portraits/portrait-2.jpg',
  },
  {
    name: 'Nathan Sinclair',
    avatar: '/portraits/portrait-3.jpg',
  },
  {
    name: 'Sophia Caldwell',
    avatar: '/portraits/portrait-4.jpg',
  },
];
const Sidebar = () => {
  return (
    <SidebarWrapper>
      <SidebarLogo>InTouch</SidebarLogo>
      <SidebarCollection>
        {sidebarItems.map((item) => (
          <Link
            href={item.href}
            key={item.text}
            // style={{ textDecoration: 'none' }}
          >
            <SidebarItem icon={item.icon} text={item.text} />
          </Link>
        ))}
      </SidebarCollection>
      <SidebarCollection>
        {personList.map((person) => (
          <PersonLabel
            key={person.name}
            name={person.name}
            avatar={person.avatar}
          />
        ))}
      </SidebarCollection>
    </SidebarWrapper>
  );
};

export default Sidebar;
