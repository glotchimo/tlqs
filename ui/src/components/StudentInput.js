import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import TextField from '@mui/material/TextField';


function StudentInput({ formData, setFormData }) {
    const handleChange = (event) => {
        setFormData({ ...formData, studentInput: event.target.value })
    };

    return (
        <div className='student-input-container'>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, width: '100ch' },
                    display: 'inline-block',
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
                    value={formData.studentInput}
                    onChange={handleChange}
                    autoComplete="off"

                />

            </Box>


        </div>
    )
}

export default StudentInput