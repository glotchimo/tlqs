import { useAuth0 } from '@auth0/auth0-react';
import Form from './components/Form';
import './App.css'
import * as React from 'react';
//Change
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
        </>,
        <div className="App">
            <Form />
        </div>
    );
};
