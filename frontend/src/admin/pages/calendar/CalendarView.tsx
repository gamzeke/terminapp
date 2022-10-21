import { Group, Paper, Space, Title } from '@mantine/core';
import { Calendar } from '@mantine/dates';
import { useState } from 'react';


const CalendarView = () => {

    const [value, setValue] = useState<Date | null | undefined>(new Date());

    const change = (e: any) => {
        setValue(e)
    }

    return (
        <>
            <Paper p="xs">
                <Group position="apart">
                    <Title order={2}>
                        Kalendar
                    </Title>
                </Group>
            </Paper>
            <Space h="md" />
            <Paper>
                <Calendar
                    value={value}
                    onChange={change}
                    fullWidth
                    size="xl"
                    styles={(theme) => ({
                        cell: {
                            border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
                                }`,
                        },
                        day: { borderRadius: 0, height: 70, fontSize: theme.fontSizes.lg },
                        weekday: { fontSize: theme.fontSizes.lg },
                        weekdayCell: {
                            fontSize: theme.fontSizes.xl,
                            backgroundColor:
                                theme.colorScheme === 'dark' ? theme.colors.dark[5] : theme.colors.gray[0],
                            border: `1px solid ${theme.colorScheme === 'dark' ? theme.colors.dark[4] : theme.colors.gray[2]
                                }`,
                            height: 70,
                        },
                    })}
                />
            </Paper>
        </>
    )
}

export default CalendarView