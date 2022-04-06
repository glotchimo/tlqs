import { useAuth0 } from '@auth0/auth0-react';
import * as React from 'react';
import SessionGlance from './tutor/SessionGlance';
    
user = {
    id: '1',
    name: 'Luis Garcia',
    email: 'lgarcia29@ewu.edu',
    description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.',
    role: '1',
    //sessions
    //Courses
}

user2 = {
    id: '2',
    name: 'Luis fdsaf',
    email: 'lgarcia2fdsf9@ewu.edu',
    description: 'I need help cleaning my fish',
    role: '1',
    //sessions
    //Courses
}

export default () => {
    return (
        <>
        <SessionGlance 
        name={user.name}
        email={user.email}
        role={user.role}
        description={user.description}/>
        </>
    );
};
