import React from 'react'
import Box from '@mui/material/Box';
import MenuItem from '@mui/material/MenuItem';
import InputLabel from '@mui/material/InputLabel';
import FormLabel from '@mui/material/FormLabel';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';

function TopicChoice({ formData, setFormData }) {
    const handleChange = (event) => {
        setFormData({ ...formData, topicInput: event.target.value })
    };

    return (
        <div className='topic-choice-container'>
            <Box m="auto" sx={{ maxWidth: '45ch' }}>
                <FormLabel id="topics-group-label">Choose a topic:</FormLabel>
                <FormControl fullWidth>
                    <InputLabel id="topic-simple-select-label">Topics</InputLabel>
                    <Select
                        labelId="topic-simple-select-label"
                        id="topic-simple-select"
                        displayEmpty
                        value={formData.topicInput}
                        label="Topics"
                        onChange={handleChange}
                    >
                        <MenuItem value={'t1'}>Topic 1</MenuItem>
                        <MenuItem value={'t2'}>Topic 2</MenuItem>
                        <MenuItem value={'t3'}>Topic 3</MenuItem>
                    </Select>
                </FormControl>
            </Box>
        </div>)
}

export default TopicChoice