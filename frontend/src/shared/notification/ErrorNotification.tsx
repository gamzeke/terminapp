import React from 'react'
import { Notification } from '@mantine/core';
import { IconX } from '@tabler/icons';

const ErrorNotification = ({ title }: { title: string }) => {
    return (
        <Notification
            icon={<IconX size={18} />}
            color="teal"
            title="Fehler bei der Aktualisierung">
            {title}
        </Notification>
    )
}


export default ErrorNotification