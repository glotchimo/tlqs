import React, { useEffect, useState } from 'react'
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';
import CircularProgress from '@mui/material/CircularProgress';

function Class({ studentData, setStudentData }) {

    const fetchLocation = "http://localhost:8080/courses/"; //TODO: Fix when bringing over to new branch, should be /courses/
    const [allDeptClasses, setAllDeptClasses] = useState([]);
    const [disableClasses, setDisableClasses] = useState(true);

    const [open, setOpen] = useState(false);
    const [options, setOptions] = useState([]);
    const loading = open && options.length === 0;

    // This will grab the "master" list of all classes, store it in local state.
    useEffect(() => {
        let specificDepartment = "";
        const renderClasses = () => {
            setDisableClasses(deptState => false)
            studentData.departmentSelection === 'Computer Science' ? specificDepartment = "?department=0" : specificDepartment = "?department=1";
        }
        //Enable or disable classes dropdown based on Department selection
        studentData.departmentSelection !== '' ? renderClasses() : setDisableClasses(deptState => true);

        const fetchData = async () => {
            try {
                const response = await fetch(fetchLocation + specificDepartment);
                const json = await response.json();
                setAllDeptClasses(json);
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
        setOptions([...allDeptClasses]);
    }, [allDeptClasses, loading]);

    useEffect(() => {
        if (!open) {
            setOptions([]);
        }
    }, [open]);

    const handleChange = (event, newValue) => {
        newValue === null ? studentData.classSelection = '' : studentData.classSelection = newValue.code;
    };

    return (
        <Box sx={{ width: '100%', }}>
            <Autocomplete
                id="classes-autocomplete"
                sx={{ width: '80%', ml: '10%', mb: '10%', textAlign: "center" }}
                disabled={disableClasses}
                open={open}
                onOpen={() => {
                    setOpen(true);
                }}
                onClose={() => {
                    setOpen(false);
                }}
                isOptionEqualToValue={(option, value) => option.title === value.title}
                getOptionLabel={(option) => option.code + " - " + option.title}
                options={options}
                loading={loading}
                onChange={handleChange}
                renderInput={(params) => (
                    <TextField
                        {...params}
                        label="Classes"
                        InputProps={{
                            ...params.InputProps,
                            endAdornment: (
                                <React.Fragment>
                                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                                    {params.InputProps.endAdornment}
                                </React.Fragment>
                            ),
                        }}
                    />
                )}
            />
        </Box>
    )
}



export default Class



