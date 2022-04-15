import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';


function QueueSubmission({ formData, setFormData }) {

    return (
        <div className='queue-submission-container'>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, maxWidth: '70ch' },
                    display: 'inline-block',
                    boxShadow: 3,
                }}
                noValidate
                autoComplete="on"
            >
                <InputLabel id="queue-submission-group-label">Submission Results</InputLabel>
                <Table sx={{ m: 'auto', maxWidth: '70ch' }} aria-label="simple table">
                    {/* <TableHead>
                        <TableRow>
                            <TableCell sx={{ fontWeight: 'bold' }} align="center">Required Fields</TableCell>
                            <TableCell sx={{ fontWeight: 'bold' }} align="center">User Input</TableCell>
                        </TableRow>
                    </TableHead> */}
                    <TableBody>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell sx={{ fontWeight: 'bold' }} align="right">Department:</TableCell>
                            <TableCell align="left">{formData.departmentInput}</TableCell>
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell sx={{ fontWeight: 'bold' }} align="right">Class:</TableCell>
                            <TableCell align="left">{formData.classInput}</TableCell>
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell sx={{ fontWeight: 'bold' }} align="right">Topic:</TableCell>
                            <TableCell align="left">{formData.topicInput}</TableCell>
                        </TableRow>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell sx={{ fontWeight: 'bold' }} align="right">Student Input:</TableCell>
                            <TableCell align="left">
                                <TextField
                                    sx={{ width: '70ch' }}
                                    disabled='true'
                                    defaultValue={formData.studentInput}
                                    multiline
                                    rows="10"
                                >
                                </TextField></TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Box>


        </div>
    )
}

export default QueueSubmission