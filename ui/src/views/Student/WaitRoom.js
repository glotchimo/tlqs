import React from 'react'
import Box from '@mui/material/Box';
import InputLabel from '@mui/material/InputLabel';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';


function WaitRoom({ formData, setFormData }) {
    return (
        <div className='wait-room-container'>
            <Box
                component="form"
                sx={{
                    '& .MuiTextField-root': { m: 1, maxWidth: '45ch' },
                    display: 'inline-block',
                    boxShadow: 3,
                }}
                noValidate
                autoComplete="on"
            >
                <InputLabel id="wait-room-group-label">Queue Ticket</InputLabel>
                <Typography sx={{ ml: 5, mr: 5, mt: 1 }} variant="subtitle1" gutterBottom component="div">
                    Thank you for your patience, a tutor will be with you shortly.
                </Typography>
                <Table sx={{ m: 'auto', maxWidth: '100ch' }} aria-label="simple table">
                    <TableBody>
                        <TableRow sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell sx={{ fontWeight: 'bold', fontSize: '36px' }} align="center">Spot in line: {Math.floor(Math.random() * 20)}</TableCell>
                        </TableRow>
                    </TableBody>
                </Table>
            </Box>
        </div>
    )
}

export default WaitRoom