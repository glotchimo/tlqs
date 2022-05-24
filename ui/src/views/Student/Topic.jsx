import React from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import FormControl from '@mui/material/FormControl';



function Topic({ studentTopic, setStudentTopic }) {

    const handleChange = (event, newValue) => {
        event.target.value === null ? setStudentTopic('') : setStudentTopic(event.target.value);
    };

    return (
        <Box sx={{ width: '90%', height: '10vh', overflow: 'hidden' }}>
            <FormControl fullWidth>
                <TextField
                    label="Topic"
                    placeholder='What topics does your problem touch on?'
                    sx={{ m: 2 }}
                    onChange={handleChange}
                    variant="outlined"
                ></TextField>
            </FormControl>
        </Box>
    )
}

export default Topic