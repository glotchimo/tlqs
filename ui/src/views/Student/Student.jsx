import { React, useEffect, useState } from 'react'
import './Student.css';
import Box from '@mui/material/Box';
import Class from './Class';
import Department from './Department';
import FormLabel from '@mui/material/FormLabel';
import Submit from './Submit';
import StudentInput from './StudentInput';
import Topics from './Topics';
import WaitRoom from './WaitRoom'


function Student({ user }) {

    const fetchLocation = "http://localhost:8080/users/";
    const [studentData, setStudentData] = useState({
        departmentSelection: '',
        classSelection: '',
        topicSelection: '',
        submitted: false
    });

    const [studentDescription, setStudentDescription] = useState('');
    const [studentID, setStudentID] = useState('');

    //console.log(user);

    useEffect(() => {

        const fetchData = async () => {

            try {
                const response = await fetch(fetchLocation + "?email=" + user.email);
                const json = await response.json();
                setStudentID(json[0].id);
            } catch (error) {
                console.log("error", error);
            }
        }

        fetchData();

    }, [studentData])


    if (studentData.submitted === true) {
        return (<WaitRoom />);
    }
    else {
        return (
            <div style={{ width: '100%', color: 'white' }}>
                <Box className='main-row'
                    sx={{
                        display: 'flex',
                        flexDirection: 'row',
                        bgcolor: 'background.paper',
                        borderRadius: 1,
                        overflow: 'hidden'
                    }}
                >
                    <Box className='left'
                        sx={{ width: '50%', height: 'auto', bgcolor: '#e8e8e8' }}>
                        <Box className='left-inner-column'
                            sx={{
                                display: 'flex',
                                flexDirection: 'column',
                            }}
                        >



                            <FormLabel sx={{ ml: '10px', mt: '4px', textAlign: 'left' }}>Department</FormLabel>
                            <Box className='dept-box' sx={{ height: '10vh', m: 1, bgcolor: 'white', display: 'flex', alignItems: "center", justify: "center", outline: 'solid', outlineColor: 'lightgrey', outlineWidth: '1px' }}>
                                <Department studentData={studentData} setStudentData={setStudentData} />
                            </Box>



                            <FormLabel sx={{ ml: '10px', textAlign: 'left' }}>Classes</FormLabel>
                            <Box className='class-box' sx={{ height: '20vh', m: 1, bgcolor: 'white', display: 'flex', alignItems: "center", justify: "center", outline: 'solid', outlineColor: 'lightgrey', outlineWidth: '1px' }}>
                                <Class studentData={studentData} setStudentData={setStudentData} />
                            </Box>



                            <FormLabel sx={{ ml: '10px', textAlign: 'left' }}>Topics</FormLabel>
                            <Box classname="topics-box" sx={{
                                height: '10vh', m: 1, bgcolor: 'white', display: 'flex', alignItems: "center", justify: "center", outline: 'solid', outlineColor: 'lightgrey', outlineWidth: '1px'
                            }}>
                                <Topics studentData={studentData} setStudentData={setStudentData} />
                            </Box>



                            <Box sx={{ color: 'black' }}>
                                <i>Little area we can use to describe how to work the app, markdown, etc.</i>
                            </Box>

                        </Box>
                    </Box>

                    <Box className='right' sx={{ width: '50%', height: '90vh', bgcolor: '#e8e8e8', textAlign: 'left', pt: '4px' }}>
                        <FormLabel sx={{ ml: '10px' }}>Describe your problem</FormLabel>
                        <Box sx={{ height: '80vh', m: 1, overflow: 'hidden', bgcolor: 'white', outline: 'solid', outlineColor: 'lightgrey', outlineWidth: '1px' }}>
                            <StudentInput studentData={studentData} setStudentData={setStudentData} studentDescription={studentDescription} setStudentDescription={setStudentDescription} />
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ bgcolor: '#e8e8e8', }}>
                    <Submit studentData={studentData} setStudentData={setStudentData} studentDescription={studentDescription} setStudentDescription={setStudentDescription} studentID={studentID} />
                </Box>
            </div >

        )
    }


}

export default Student