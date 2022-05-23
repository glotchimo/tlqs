import Box from '@mui/material/Box';
import React, { useState } from 'react'
import Button from '@mui/material/Button';

function Submit({ sessionData, setSessionData, studentProblem, studentTopic, studentId }) {
    const [submitted, setSubmitted] = useState(false);
    let deptValid = sessionData.department !== '';
    let classValid = sessionData.classId !== '';
    let topicValid = studentTopic !== '';
    let studentInputValid = studentProblem !== '';

    function sendSession() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "student": studentId,
            "tutor": '',
            "course": sessionData.classId,
            "topic": studentTopic,
            "description": studentProblem,
            "retrospective": ''
        });

        var requestOptions = {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        };

        fetch("http://localhost:8080/sessions/", requestOptions)
            .then(response => response.text())
            .then(result => console.log(result))
            .catch(error => console.log('error', error));
    }

    function verifyMissingFields() {
        let results = "You are missing the following fields: ";
        if (sessionData.department === '') {
            results += " \nDepartment choice is empty."
        }
        if (sessionData.classId === '') {
            results += "\nClass choice is empty."
        }
        if (studentTopic === '') {
            results += "\nTopic field is empty."
        }
        if (studentProblem === '') {
            results += "\nStudent description is empty."
        }
        return results
    }

    //Debug function
    const verify = () => {
        if (deptValid && classValid && topicValid && studentInputValid) {
            sendSession();
            setSubmitted(true);
            setSessionData(sessionData => ({ ...sessionData, submitted: true }));
        }
        else {
            let notification = verifyMissingFields();
            alert(notification);
        }
    }
    return (
        <Box sx={{ mt: '2vh', overflow: 'hidden' }}>
            <Button variant="contained" onClick={verify} sx={{
                color: '#white',
                bgcolor: '#b7142e',
                '&:hover': {
                    backgroundColor: '#D41837',
                    color: 'white'
                }
            }}>Submit</Button>
        </Box>
    )
}

export default Submit