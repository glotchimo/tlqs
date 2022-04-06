import * as React from 'react';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import Modal from '@mui/material/Modal';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import PersonIcon from '@mui/icons-material/Person';

var stylingObject = {
    container:{
        backgroundColor: '#525E75',
        color: '#fff',
        height: '100vh',
        width: '100vw',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    },
    personIcon:{
        width: '125px',
        height: '125px',
        margin: '0 auto',
    }, 
    studentDetails:{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
    }
}

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: '#525E75',
    border: '2px solid #000',
    align:'center', 
    color: '#fff',
  boxShadow: 24,
    p: 4
}

//want to pass in the user and then print him out to the UI. 
export default function SessionGlance (prop) {
    const [open, setOpen] = React.useState(false);
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    return(
        <>
        <CssBaseline />
        <div style={stylingObject.container}>
        <Typography gutterBottom variant="h2" component="h2">{prop.name}</Typography>
        <PersonIcon style={stylingObject.personIcon}/>
        <div style={stylingObject.studentDetails}>
        <h2>Email: {prop.email}</h2>
        <h2>Description: {prop.description}</h2>
        <h2>User Role: {prop.role}</h2>
        <Button variant="contained" onClick={handleOpen} >Mark Completed</Button>
        </div>
        </div>
        <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        >
        <Box sx={style}>
        <Typography id="modal-modal-title" variant="h6" component="h2">
        Current Student: {prop.name}
          </Typography>
        <Typography id="modal-modal-description" sx={{ mt: 2 }}>
        Insert form here. 
          </Typography>
        </Box>
        </Modal>
        </>
    );
}
