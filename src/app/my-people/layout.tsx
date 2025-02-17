interface MyPeopleLayoutProps {
  children: React.ReactNode;
}

export default function MyPeopleLayout({ children }: MyPeopleLayoutProps) {
  return <main>I am layout {children}</main>;
}
