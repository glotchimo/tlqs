import React from 'react'
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormControl from '@mui/material/FormControl';
import FormLabel from '@mui/material/FormLabel';
import Select from '@mui/material/Select';


function ClassChoice({ formData, setFormData }) {
    const handleChange = (event) => {
        setFormData({ ...formData, classInput: event.target.value })
    };


    return (
        <div className='class-choice-container'>
            <Box m="auto" sx={{ maxWidth: '45ch' }}>
                <FormLabel id="classes-group-label">Choose a class:</FormLabel>
                <FormControl fullWidth>
                    <InputLabel id="class-simple-select-label">Classes</InputLabel>
                    <Select
                        labelId="class-simple-select-label"
                        id="class-simple-select"
                        displayEmpty
                        value={formData.classInput}
                        label="Classes"
                        onChange={handleChange}
                    >
                        <MenuItem value={'c1'}>Class 1</MenuItem>
                        <MenuItem value={'c2'}>Class 2</MenuItem>
                        <MenuItem value={'c3'}>Class 3</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </div>

    )
}

export default ClassChoice