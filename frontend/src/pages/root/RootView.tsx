import {
    AppShell,
    Navbar,
    Header,
    Footer,
    Text,
    MediaQuery,
    Burger,
    useMantineTheme,
} from '@mantine/core';
import { useState } from 'react';
import { NavLinks } from './NavLinks';
import { Outlet } from 'react-router-dom';

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
                    background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
                },
            }}
            navbarOffsetBreakpoint="sm"
            asideOffsetBreakpoint="sm"
            fixed
            navbar={
                <Navbar p="md" hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 220 }}>
                    <Navbar.Section>
                        <NavLinks />
                    </Navbar.Section>
                </Navbar>
            }
            // aside={
            //   <MediaQuery smallerThan="sm" styles={{ display: 'none' }}>
            //     <Aside p="md" hiddenBreakpoint="sm" width={{ sm: 200, lg: 300 }}>
            //       <Text>Application sidebar</Text>
            //     </Aside>
            //   </MediaQuery>
            // }
            footer={
                <Footer height={50} p="sm">
                    Make with ❤️ by Gamze Ketenci (Development Mode)
                </Footer>
            }
            header={
                <Header height={70} p="md">
                    <div style={{ display: 'flex', alignItems: 'center', height: '100%' }}>
                        <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                            <Burger
                                opened={opened}
                                onClick={() => setOpened((o) => !o)}
                                size="sm"
                                color={theme.colors.gray[6]}
                                mr="xl"
                            />
                        </MediaQuery>
                        {/* TODO-MMUEJDE: Logo des Unternehmens */}
                        <Text weight={700}>TerminPlaner</Text>
                    </div>
                </Header>
            }
        >
            <Outlet></Outlet>
        </AppShell>
    );
};

export default RootView;