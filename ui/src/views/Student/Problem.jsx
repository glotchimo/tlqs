import React from 'react'
import Box from '@mui/material/Box'
import Rte from './Rte'
function Problem({ studentProblem, setStudentProblem }) {

    const styles = theme => ({

    });

    return (
        <Box
            id='problem-container'
            sx={{
                width: '90%', height: '85vh', mt: '5vh', backgroundColor: 'white', overflow: 'auto'
            }}>
            <Rte studentProblem={studentProblem} setStudentProblem={setStudentProblem} />
        </Box>
    );
}

export default Problem