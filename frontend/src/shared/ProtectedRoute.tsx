import { useLocalStorage } from '@mantine/hooks';
import { showNotification } from '@mantine/notifications';
import { PropsWithChildren } from 'react';
import { Navigate } from 'react-router-dom';

interface ProtectedRouteProps extends PropsWithChildren {
    redirectPath?: string;
}

const ProtectedRoute = ({
    redirectPath = '/auth',
    children,
}: ProtectedRouteProps) => {
    const [currentUser, ...rest] = useLocalStorage({
        key: 'current-user',
    });

    console.log(currentUser);

    if (!currentUser) {
        showNotification({
            title: 'Fehler',
            color: 'red',
            message: 'Loggen Sie sich bitte ein',
        });
        return <Navigate to={redirectPath} replace />;
    }
    return <>{children}</>;
};

export default ProtectedRoute;
