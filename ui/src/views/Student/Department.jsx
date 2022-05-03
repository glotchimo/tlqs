import React, { useEffect } from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';


function Department({ studentData, setStudentData }) {

    const [department, setDepartment] = React.useState('');

    const handleChange = (event) => {
        setDepartment(event.target.value);
        setStudentData(studentData => ({ ...studentData, departmentSelection: event.target.value }));
    };

    return (
        <Box sx={{ width: '100%' }}>
            <FormControl sx={{ width: '80%' }}>
                <InputLabel id="department-select-label">Department</InputLabel>
                <Select
                    sx={{ textAlign: 'left' }}
                    labelId="department-select-label"
                    id="department-select"
                    value={department}
                    label="Department"
                    onChange={handleChange}
                >
                    <MenuItem value={'Computer Science'}>Computer Science</MenuItem>
                    <MenuItem value={'Mathematics'}>Mathematics</MenuItem>
                </Select>
            </FormControl>
        </Box >
    )
}

export default Department