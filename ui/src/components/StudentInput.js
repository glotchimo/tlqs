import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';


function StudentInput({ formData, setFormData }) {

    const handleChange = (event) => {
        setFormData({ ...formData, StudentInput: event.target.value })
    };

    return (
        <div className='student-input-container'>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '45ch' },
                }}
                noValidate
                autoComplete="on"
            >
                <InputLabel id="student-input-group-label">Tell us more about your problem:</InputLabel>
                <TextField
                    id="outlined-textarea"
                    label="Student Input"
                    placeholder="Where do I begin..."
                    multiline
                    defaultValue={formData.studentInput}
                    onChange={handleChange}

                />

            </Box>


        </div>
    )
}

export default StudentInput