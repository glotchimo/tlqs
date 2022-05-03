import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

function Topics({ studentData, setStudentData }) {

    const handleChange = (event) => {
        event.target.value === null ? studentData.topicSelection = '' : studentData.topicSelection = event.target.value;
    };

    return (
        <Box className="Topics-class-container" sx={{ width: '100%' }}>
            <TextField
                sx={{ width: '80%', textAlign: "center" }}
                label="Relevant Topics"
                placeholder="Describe what topics your problem touches on..."
                onChange={handleChange}
            >
            </TextField>
        </Box >
    )
}


export default Topics