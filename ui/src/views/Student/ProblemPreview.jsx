import React from 'react'
import Box from '@mui/material/Box'
import MarkdownEditor from './MarkdownEditor'
function ProblemPreview({ studentProblem, setStudentProblem }) {

    return (
        <Box
            id='problem-container'
            sx={{
                width: '90%',
                height: '85vh',
                mt: '4vh',
                backgroundColor: 'white',
                overflow: 'auto',
                backgroundColor: '#f7f7f7'
            }}>
            <MarkdownEditor studentProblem={studentProblem} />
        </Box>
    );
}

export default ProblemPreview