import React, { useState } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function Department({ sessionData, setSessionData }) {
    const [department, setDepartment] = useState('');

    const handleChange = (event) => {
        setDepartment(event.target.value);
        setSessionData(sessionData => ({ ...sessionData, department: event.target.value }));
    };

    return (
        <Box sx={{ width: '90%', height: '21.5vh', mt: '5vh', backgroundColor: '#E9E9E9', overflow: 'hidden' }}>
            <FormControl fullWidth>
                <InputLabel sx={{ m: 2 }} id="department-select-label">Department</InputLabel>
                <Select
                    sx={{ m: 2 }}
                    labelId="department-select-label"
                    id="department-simple-select"
                    value={department}
                    label="Department"
                    onChange={handleChange}
                >
                    <MenuItem value={'Computer Science'}>Computer Science</MenuItem>
                    <MenuItem value={'Mathematics'}>Mathematics</MenuItem>
                </Select>
            </FormControl>
        </Box>
    )
}

export default Department