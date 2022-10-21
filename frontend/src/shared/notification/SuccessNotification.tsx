import { Notification } from '@mantine/core';
import { IconCheck } from '@tabler/icons';
import React from 'react';

const SuccessNotification = ({ title }: { title: string }) => {
    return (
        <Notification
            icon={<IconCheck size={18} />}
            color="teal"
            title="Aktualisierung"
        >
            {title}
        </Notification>
    );
};

export default SuccessNotification;
