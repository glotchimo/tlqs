import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';


function Submit({ sessionData, setSessionData, studentProblem, studentTopic }) {

    const debug = () => {

        console.log(sessionData);
        console.log(studentTopic);
        console.log(studentProblem);
    }

    return (
        <Box sx={{ mt: '2vh', overflow: 'hidden' }}>
            <Button variant="contained" onClick={debug}>Submit</Button>
        </Box>
    )
}

export default Submit