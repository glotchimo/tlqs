import React from 'react'
import Box from '@mui/material/Box';
import './WaitRoom.css'
import Button from '@mui/material/Button';

function WaitRoom() {
    return (
        <Box className='WaitRoom-Container' sx={{ width: 'auto' }}>
            <Box className='Info-Box' boxShadow={3} sx={{ width: '40%', m: 2, bgcolor: 'lightgrey', ml: '30%', mt: '35vh', display: 'flex', flexWrap: "wrap", alignItems: "center", justify: "center", }}>
                <Box className='confirm-msg' sx={{ width: '70%' }}>
                    <h2 className='queue-confirm-title'>You have successfully entered the queue.</h2>
                </Box>
                <Box className='dequeue-btn' sx={{ width: '30%' }}>
                    <Button className='queue-leave-btn' variant="contained" sx={{ color: 'white', m: 2 }}>Leave Queue</Button>
                </Box>

            </Box>

        </Box >
    )
}

export default WaitRoom