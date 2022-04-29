import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import CircularProgress from '@mui/material/CircularProgress';

function Topics({ studentData, setStudentData }) {

    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const loading = open && options.length === 0;

    const handleChange = (event, newValue) => {
        newValue === null ? studentData.classSelection = '' : studentData.classSelection += newValue.code;
    };


    return (
        <Box className="Topics-class-container" sx={{ width: '100%' }}>
            {/* <FormGroup sx={{ display: 'flex', mt: 1, flexDirection: 'row', color: 'black', alignContent: 'start' }}>
                {topicsByDepartment.map(selectedTopic => {
                    return (
                        <FormControlLabel key={selectedTopic.Name} control={<Checkbox />} label={selectedTopic.Name} />
                    );
                })}
                Testing
            </FormGroup> */}
            <Autocomplete
                multiple
                id="classes-autocomplete"
                sx={{ width: 'calc(100% - 20px)', pl: '10px', pt: '10px', textAlign: "center" }}
                open={open}
                onOpen={() => {
                    setOpen(true);
                }}
                onClose={() => {
                    setOpen(false);
                }}
                isOptionEqualToValue={(option, value) => option.title === value.title}
                getOptionLabel={(option) => option.title}
                options={top100Films}
                onChange={handleChange}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Choose some related topics"
                    />
                )}
            />
        </Box>
    )
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
    { title: 'The Shawshank Redemption', year: 1994 },
    { title: 'The Godfather', year: 1972 },
    { title: 'The Godfather: Part II', year: 1974 },
    { title: 'The Dark Knight', year: 2008 },
    { title: '12 Angry Men', year: 1957 },
    { title: "Schindler's List", year: 1993 },
    { title: 'Pulp Fiction', year: 1994 },
];

export default Topics