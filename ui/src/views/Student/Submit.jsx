import React, { useState } from 'react'
import Button from '@mui/material/Button';
import WaitingRoom from './WaitRoom';
import { useEffect } from 'react';

function Submit({ studentData, setStudentData, studentDescription, setStudentDescription }) {
    const [submitted, setSubmitted] = useState(false);
    let deptValid = studentData.departmentSelection !== '';
    let classValid = studentData.classSelection !== '';
    let topicValid = studentData.topicSelection !== '';
    let studentInputValid = studentDescription !== '';

    function sendSession() {
        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({
            "student": "WIP -- not valid",
            "tutor": "WIP -- not valid",
            "course": studentData.classSelection,
            "topic": studentData.topicSelection,
            "description": studentDescription,
            "retrospective": "Not yet touched."
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
        if (studentData.departmentSelection === '') {
            results += " \nDepartment choice"
        }
        if (studentData.classSelection === '') {
            results += "\nClass choice"
        }
        if (studentData.topicSelection === '') {
            results += "\nTopic choice"
        }
        if (studentDescription === '') {
            results += "\nStudent description"
        }
        return results
    }

    //Debug function
    const verify = () => {
        //Topic is not included yet, because it's WIP at the moment
        //let missingFields = verifyMissingFields();
        if (deptValid && classValid && topicValid && studentInputValid) {
            sendSession();
            setSubmitted(true);
            setStudentData(studentData => ({ ...studentData, submitted: true }));
        }
        else {
            let notification = verifyMissingFields();
            alert(notification);
            console.log(studentData);
        }
    }

    return (
        <Button sx={{ alignItems: 'center', justifyContent: 'center', color: 'white' }} variant="contained" onClick={verify}>Submit</Button>
    )
}

export default Submit