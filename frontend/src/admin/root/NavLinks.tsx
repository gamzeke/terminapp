import { Group, Text, ThemeIcon, UnstyledButton } from '@mantine/core';
import {
    IconCalendar,
    IconDashboard,
    IconDatabase,
    IconExternalLink,
    IconHome,
    IconLogout,
    IconQuestionMark,
} from '@tabler/icons';
import React from 'react';
import { useNavigate } from 'react-router-dom';

interface NavLinkProps {
    icon: React.ReactNode;
    color: string;
    label: string;
    url: string;
}

const menuItems = [
    {
        icon: <IconDashboard size={16} />,
        color: 'blue',
        label: 'Dashboard',
        url: '/admin',
    },
    {
        icon: <IconCalendar size={16} />,
        color: 'red',
        label: 'Kalendar',
        url: 'calendar',
    },
    {
        icon: <IconDatabase size={16} />,
        color: 'green',
        label: 'Kundendatenbank',
        url: 'customer',
    },
    {
        icon: <IconQuestionMark size={16} />,
        color: 'yellow',
        label: 'FAQs',
        url: 'faq',
    },
    {
        icon: <IconHome size={16} />,
        color: 'teal',
        label: 'Geschäftsdaten',
        url: 'company',
    },
    {
        icon: <IconExternalLink size={16} />,
        color: 'lime',
        label: 'Webseite',
        url: '/',
    },
    {
        icon: <IconLogout size={16} />,
        color: 'red',
        label: 'Ausloggen',
        url: '/',
    },
];

const NavLink = ({ icon, color, label, url }: NavLinkProps) => {
    const navigate = useNavigate();

    return (
        <UnstyledButton
            sx={theme => ({
                display: 'block',
                width: '100%',
                padding: theme.spacing.xs,
                borderRadius: theme.radius.sm,
                color:
                    theme.colorScheme === 'dark'
                        ? theme.colors.dark[0]
                        : theme.black,
                '&:hover': {
                    backgroundColor:
                        theme.colorScheme === 'dark'
                            ? theme.colors.dark[6]
                            : theme.colors.gray[0],
                },
            })}
            onClick={() => {
                navigate(url);
            }}
        >
            <Group>
                <ThemeIcon color={color} variant="light">
                    {icon}
                </ThemeIcon>
                <Text size="sm">{label}</Text>
            </Group>
        </UnstyledButton>
    );
};

const NavLinks = () => {
    const links = menuItems.map(link => <NavLink {...link} key={link.label} />);
    return <div>{links}</div>;
};

export { NavLinks };
