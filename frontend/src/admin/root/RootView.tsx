import {
    AppShell,
    Footer,
    Header,
    Navbar,
    Text,
    useMantineTheme,
} from '@mantine/core';
import { Outlet } from 'react-router-dom';
import { NavLinks } from './NavLinks';

const RootView = () => {
    const theme = useMantineTheme();

    return (
        <AppShell
            styles={{
                main: {
                    background:
                        theme.colorScheme === 'dark'
                            ? theme.colors.dark[8]
                            : theme.colors.gray[0],
                },
            }}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            fixed
            navbar={
                <Navbar
                    p="md"
                    hiddenBreakpoint="sm"
                    width={{ sm: 200, lg: 220 }}
                >
                    <Navbar.Section>
                        <NavLinks />
                    </Navbar.Section>
                </Navbar>
            }
            footer={
                <Footer height={50} p="sm">
                    <Text size="sm">Version 1.0.0 (Dev)</Text>
                </Footer>
            }
            header={
                <Header height={70} p="md">
                    <Text weight={700}>TerminPlaner (Admin)</Text>
                </Header>
            }
        >
            <Outlet></Outlet>
        </AppShell>
    );
};

export default RootView;
