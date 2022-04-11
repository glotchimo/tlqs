import { useAuth0 } from '@auth0/auth0-react';
import * as React from 'react';

export default () => {
    const { isLoading, isAuthenticated } = useAuth0();

    return (
        <>
            {isLoading && "Loading"}
            {!isLoading && (
                <>
                    {!isAuthenticated && "Reroute to SSO"}
                    {isAuthenticated && "Route to whatever view"}
                </>
            )}
        </>
    );
};
