import React, { useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

function Classes({ sessionData, setSessionData }) {

    const [disableClasses, setDisableClasses] = useState(true);
    const [classes, setClasses] = useState([]);
    const [scope, setScope] = useState('');

    const getCourses = () => {
        fetch("http://localhost:8080/courses/" + scope)
            .then((response) => response.json())
            .then((json) => {
                setClasses(json);
            });
    };

    useEffect(() => {

        const loadClasses = () => {
            setDisableClasses(false);
            sessionData.department === 'Computer Science' ? setScope("?department=0") : setScope("?department=1");
        }

        sessionData.department !== '' ? loadClasses() : setDisableClasses(true);
    }, [sessionData]);

    useEffect(() => {
        getCourses();
    }, [scope])

    const handleChange = (event, newValue) => {
        newValue === null ? sessionData.classId = '' : sessionData.classId = newValue.id;
    };

    return (
        <Box sx={{ width: '90%', height: '10vh', overflow: 'hidden' }}>
            <Autocomplete
                disablePortal
                disabled={disableClasses}
                id="combo-box-demo"
                getOptionLabel={(option) => option.code + " - " + option.title}
                onChange={handleChange}
                options={classes}
                sx={{ m: 2, height: 100 }}
                renderInput={(params) => <TextField {...params} label="Class" />}
            />
        </Box>
    )
}

export default Classes