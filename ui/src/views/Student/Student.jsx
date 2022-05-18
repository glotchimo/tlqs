import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Tutorial from './Tutorial'
import Department from './Department'
import Classes from './Classes'
import Topic from './Topic'
import Problem from './Problem'
import Submit from './Submit'
import './Student.css'

function Student({ user }) {

    const fetchLocation = "http://localhost:8080/users/";
    const [studentId, setStudentId] = useState('');
    const [studentTopic, setStudentTopic] = useState('');
    const [studentProblem, setStudentProblem] = useState('');
    const [sessionData, setSessionData] = useState({
        department: '',
        classId: '',
        problem: '',
        submitted: false
    });

    useEffect(() => {
        const fetchData = async () => {

            try {
                const response = await fetch(fetchLocation + "?email=" + user.email);
                const json = await response.json();
                if (studentId == '') {
                    setStudentId(json[0].id);
                }
            } catch (error) {
                console.log("error", error);
            }
        }

        fetchData();

    }, []);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container>
                <Grid item xs={6} sx={{ backgroundColor: 'white', height: '100vh' }}>
                    <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Department sessionData={sessionData} setSessionData={setSessionData} />
                        <Classes sessionData={sessionData} setSessionData={setSessionData} />
                        <Topic studentTopic={studentTopic} setStudentTopic={setStudentTopic} />
                        <Tutorial />
                    </Grid>

                </Grid>
                <Grid item xs={6} sx={{
                    backgroundColor: 'white', height: '100vh',
                    '*::-webkit-scrollbar': {
                        width: '8px',
                        height: '8px'
                    },
                    '*::-webkit-scrollbar-track': {
                        backgroundColor: 'rgba(0,0,0,0.4)',
                        borderRadius: '10px'
                    },
                    '*::-webkit-scrollbar-thumb': {
                        backgroundColor: '#dfdfdf',
                        outline: '10px'
                    }
                }}>
                    <Grid
                        container
                        spacing={0}
                        direction="column"
                        alignItems="center"
                        justifyContent="center"
                    >
                        <Problem studentProblem={studentProblem} setStudentProblem={setStudentProblem} />
                        <Submit sessionData={sessionData} setSessionData={setSessionData} studentProblem={studentProblem} studentTopic={studentTopic} studentId={studentId} />
                    </Grid>
                </Grid>
            </Grid>
        </Box>
    )
}

export default Student