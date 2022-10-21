import {
    AppShell,
    Burger,
    Footer,
    Header,
    MediaQuery,
    Navbar,
    Text,
    useMantineTheme,
} from '@mantine/core';
import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { NavLinks } from './NavLinks';

interface CounterCardModel {
    title: string;
    additionalInformation: string;
    date: number;
}

const RootView = () => {
    const theme = useMantineTheme();
    const [opened, setOpened] = useState(false);

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
                    hidden={!opened}
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
                    <div
                        style={{
                            display: 'flex',
                            alignItems: 'center',
                            height: '100%',
                        }}
                    >
                        <MediaQuery
                            largerThan="sm"
                            styles={{ display: 'none' }}
                        >
                            <Burger
                                opened={opened}
                                onClick={() => setOpened(o => !o)}
                                size="sm"
                                color={theme.colors.gray[6]}
                                mr="xl"
                            />
                        </MediaQuery>
                        <Text weight={700}>TerminPlaner (Admin)</Text>
                    </div>
                </Header>
            }
        >
            <Outlet></Outlet>
        </AppShell>
    );
};

export default RootView;
