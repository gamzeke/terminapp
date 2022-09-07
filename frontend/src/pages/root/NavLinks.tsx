import React from 'react';

import { Dashboard, Settings, Calendar, Database, Home, ExternalLink } from 'tabler-icons-react';
import { ThemeIcon, UnstyledButton, Group, Text } from '@mantine/core';
import { useNavigate } from 'react-router-dom';

interface NavLinkProps {
  icon: React.ReactNode;
  color: string;
  label: string;
  url: string;
}

const menuItems = [
  { icon: <Dashboard size={16} />, color: 'blue', label: 'Dashboard', url: '/backoffice' },
  { icon: <Calendar size={16} />, color: 'red', label: 'Kalendar', url: 'calendar' },
  { icon: <Database size={16} />, color: 'green', label: 'Kundendatenbank', url: 'customer' },
  { icon: <Settings size={16} />, color: 'pink', label: 'Bildergallerie', url: 'gallery' },
  { icon: <Settings size={16} />, color: 'yellow', label: 'FAQs', url: 'faq' },
  { icon: <Settings size={16} />, color: 'teal', label: 'Einstellungen', url: 'settings' },
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