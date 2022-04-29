import { React, useState, useEffect } from 'react'
import Box from '@mui/material/Box';
import Department from './Department';
import Class from './Class';
import Topics from './Topics';
import Submit from './Submit';
import StudentInput from './StudentInput';
import WaitRoom from './WaitRoom'
import FormLabel from '@mui/material/FormLabel';


function Student() {

    const [studentData, setStudentData] = useState({
        departmentSelection: '',
        classSelection: '',
        multiTopicSelection: [],
        studentDescription: '',
        submitted: false
    });

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
                                height: '20vh', m: 1, bgcolor: 'white', display: 'flex', justify: "center", outline: 'solid', outlineColor: 'lightgrey', outlineWidth: '1px'
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
                            <StudentInput studentData={studentData} setStudentData={setStudentData} />
                        </Box>
                    </Box>
                </Box>

                <Box sx={{ bgcolor: '#e8e8e8', }}>
                    <Submit studentData={studentData} setStudentData={setStudentData} />
                </Box>
            </div >

        )
    }


}

export default Student