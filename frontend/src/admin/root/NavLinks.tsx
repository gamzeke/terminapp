import { Group, Text, ThemeIcon, UnstyledButton } from '@mantine/core';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Calendar, Dashboard, Database, ExternalLink, Home, QuestionMark } from 'tabler-icons-react';

interface NavLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  url: string;
}

const menuItems = [
  { icon: <Dashboard size={16} />, color: 'blue', label: 'Dashboard', url: '/admin' },
  { icon: <Calendar size={16} />, color: 'red', label: 'Kalendar', url: 'calendar' },
  { icon: <Database size={16} />, color: 'green', label: 'Kundendatenbank', url: 'customer' },
  { icon: <QuestionMark size={16} />, color: 'yellow', label: 'FAQs', url: 'faq' },
  { icon: <Home size={16} />, color: 'teal', label: 'Geschäftsdaten', url: 'company' },
  { icon: <ExternalLink size={16} />, color: 'lime', label: 'Webseite', url: '/' },
];

const NavLink = ({ icon, color, label, url }: NavLinkProps) => {

  const navigate = useNavigate();

  return (
    <UnstyledButton
      sx={(theme) => ({
        display: 'block',
        width: '100%',
        padding: theme.spacing.xs,
        borderRadius: theme.radius.sm,
        color: theme.colorScheme === 'dark' ? theme.colors.dark[0] : theme.black,
        '&:hover': {
          backgroundColor:
            theme.colorScheme === 'dark' ? theme.colors.dark[6] : theme.colors.gray[0],
        },
      })}
      onClick={() => { navigate(url) }}
    >
      <Group>
        <ThemeIcon color={color} variant="light">
          {icon}
        </ThemeIcon>
        <Text size="sm">{label}</Text>
      </Group>
    </UnstyledButton>
  );
}

const NavLinks = () => {
  const links = menuItems.map((link) => <NavLink {...link} key={link.label} />);
  return <div>{links}</div>;
}

export { NavLinks };
