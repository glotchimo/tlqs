import React from 'react'
import Box from '@mui/material/Box';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';

function DepartmentChoice({ formData, setFormData }) {

    const deptChoice = (event) => {
        let check = formData.departmentInput;
        if (check !== '') {
            return check;
        }
    };

    const handleChange = (event) => {
        setFormData({ ...formData, departmentInput: event.target.value });
    };

    return (

        <div className='department-choice-container'>
            <Box m="auto" sx={{ maxWidth: '45ch' }}>
                <FormControl>
                    <FormLabel id="department-radio-buttons-group-label">Choose a department:</FormLabel>
                    <RadioGroup
                        defaultValue={deptChoice}
                        onChange={handleChange}
                        row
                        aria-labelledby="department-radio-buttons-group-label"
                        name="row-radio-buttons-group"
                    >
                        <FormControlLabel value="Computer Science" control={<Radio />} label="Computer Science" />
                        <FormControlLabel value="Mathematics" control={<Radio />} label="Mathematics" />

                    </RadioGroup>
                </FormControl>
            </Box>
        </div>

    )
}

export default DepartmentChoice