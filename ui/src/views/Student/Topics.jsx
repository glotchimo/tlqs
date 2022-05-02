import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import FormGroup from '@mui/material/FormGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Autocomplete from '@mui/material/Autocomplete';
import TextField from '@mui/material/TextField';
import Checkbox from '@mui/material/Checkbox';
import CircularProgress from '@mui/material/CircularProgress';

function Topics({ studentData, setStudentData }) {

    const fetchLocation = "http://localhost:8080/topics/"; //TODO: Fix when bringing over to new branch, should be /courses/

    const [allTopics, setAllTopics] = useState([]);

    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const [disableTopics, setDisableTopics] = useState(true);
    const loading = open && options.length === 0;

    // This will grab the "master" list of all topics, store it in local state.
    useEffect(() => {
        let specificDepartment = "";
        const renderClasses = () => {
            setDisableTopics(deptState => false)
            studentData.departmentSelection === 'Computer Science' ? specificDepartment = "?department=0" : specificDepartment = "?department=1";
        }
        //Enable or disable Topics dropdown based on Department selection
        studentData.departmentSelection !== '' ? renderClasses() : setDisableTopics(deptState => true);

        const fetchData = async () => {
            try {
                const response = await fetch(fetchLocation + specificDepartment);
                const json = await response.json();
                setAllTopics(json);
            } catch (error) {
                console.log("error", error);
            }
        }
        fetchData();

    }, [studentData])

    useEffect(() => {
        if (!loading) {
            return undefined;
        }
        setOptions([...allTopics]);
    }, [allTopics, loading]);

    useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    const handleChange = (event, newValue) => {
        newValue === null ? studentData.topicSelection = '' : studentData.topicSelection += newValue.code;
    };


    return (
        <Box className="Topics-class-container" sx={{ width: '100%' }}>
            <Autocomplete
                id="classes-autocomplete"
                sx={{ width: '80%', ml: '10%', mb: '10%', textAlign: "center" }}
                disabled={disableTopics}
                open={open}
                onOpen={() => {
                    setOpen(true);
                }}
                onClose={() => {
                    setOpen(false);
                }}
                isOptionEqualToValue={(option, value) => option.name === value.name}
                getOptionLabel={(option) => option.name}
                options={options}
                loading={loading}
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


export default Topics