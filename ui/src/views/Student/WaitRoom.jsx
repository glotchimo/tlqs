import { React, useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function WaitRoom({ sessionId, studentId, sessionData, setSessionData, studentProblem, setStudentProblem }) {
    const cancelSession = () => {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "id": sessionId,
            "tutor": "None",
            "completed": true
        });

        var requestOptions = {
            method: 'PATCH',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("/sessions/" + sessionId + "/", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
        setSessionData(sessionData => ({ ...sessionData, submitted: false }));
    }

    useEffect(() => {
        setStudentProblem('');
    }, [])



    return (

        <Box className='WaitRoom-Container' sx={{
            display: 'flex',
            fontFamily: 'IBM Plex Sans',
            justifyContent: 'center',
            height: 'auto',
            width: 'auto',
            mt: '35vh'
        }}>
            <Box className='WaitRoom-Prompt-Box' sx={{
                display: 'flex',
                fontFamily: 'IBM Plex Sans',
                backgroundColor: 'black',
                p: 3,
            }}>
                <Box className='left' sx={{
                    width: '80%'
                }}>
                    <Typography variant="h4" sx={{

                        textAlign: 'center',
                        fontFamily: 'IBM Plex Sans',
                        fontSize: '2.5vw',
                        fontWeight: 700,
                        color: 'white',
                        m: 3
                    }}>
                        You have successfully <br></br>entered the queue🚀
                    </Typography>
                    <Typography variant="body2" sx={{
                        textAlign: 'center',
                        fontFamily: 'IBM Plex Sans',
                        fontSize: '0.9vw',
                        fontWeight: 400,
                        color: 'white',
                    }}>
                        A tutor will be with you shortly.
                    </Typography>
                </Box>

                <Box className='right' sx={{
                    width: '20%',
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                }}>
                    <Button className='queue-leave-btn' variant="contained" sx={{
                        backgroundColor: '#A41029',
                        color: 'white',

                        '&:hover': {
                            color: '#b7142e',
                            bgcolor: 'white',
                        },
                        fontSize: '1vw',

                    }} onClick={cancelSession}>Leave Queue</Button>
                </Box>
            </Box>
        </Box>)
}

export default WaitRoom