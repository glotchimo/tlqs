import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';

function StudentInput({ studentData, setStudentData }) {

    const [userInput, setUserInput] = useState('');

    const renderValue = (event) => {
        setUserInput(event.target.value);
        setStudentData(studentData => ({ ...studentData, studentDescription: event.target.value }));
    }

    return (

        <Box
            component="form"
            noValidate
            autoComplete="on"
            sx={{
                m: 1,
                width: '100%',
                display: 'inline-block',
            }}>
            <FormControl sx={{ width: '97.80%' }}>
                <TextField
                    maxRows={29.75}
                    sx={{ height: '100px' }}
                    id="outlined-textarea"
                    label="Student Input"
                    placeholder="Where do I begin to describe..."
                    multiline
                    value={userInput}
                    onChange={renderValue}
                    autoComplete="off"
                />
            </FormControl>

        </Box>

    )
}

export default StudentInput