import React from 'react'
import Box from '@mui/material/Box';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';

function ProblemDescription({ studentProblem, setStudentProblem }) {

    const handleChange = (event) => {
        setStudentProblem(event.target.value);
    };

    return (
        <Box sx={{ width: '90%', height: '55vh', overflow: 'hidden' }}>
            <FormControl fullWidth>
                <TextField multiline sx={{ m: 2 }}
                    label="Problem"
                    placeholder="Where do I begin..."
                    rows={14}
                    onChange={handleChange}
                />
            </FormControl>
        </Box>
    )
}

export default ProblemDescription