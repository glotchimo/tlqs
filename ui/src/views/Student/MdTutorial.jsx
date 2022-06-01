import React from 'react'
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';

function MdTutorial() {

    const style = {
        position: 'absolute',
        top: '50%',
        left: '50%',
        transform: 'translate(-50%, -50%)',
        width: 400,
        bgcolor: 'background.paper',
        border: '2px solid #000',
        boxShadow: 24,
        p: 4,
    };

    const [open, setOpen] = React.useState(false);
    const handleOpen = () => setOpen(true);
    const handleClose = () => setOpen(false);

    return (
        <div>
            <Button onClick={handleOpen}>Markdown Format Guide</Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="modal-modal-title"
                aria-describedby="modal-modal-description"
            >
                <Box sx={style}>
                    <Typography id="modal-modal-title" variant="h6" component="h2">
                        Markdown Format Guide
                    </Typography>
                    <Typography id="modal-modal-description" sx={{ mt: 2 }}>
                        Here is an external link to a great guide for Markdown style syntax: <br></br> <a href="https://about.gitlab.com/handbook/markdown-guide/">https://about.gitlab.com/handbook/markdown-guide/</a> <br></br><br></br>

                        <b>Simple Styling Commands:</b> <br></br><br></br>
                        ***Bold and Italicized text***<br></br>
                        **Bold text**<br></br>
                        *Italicized text*<br></br>
                    </Typography>
                </Box>
            </Modal>
        </div>
    );
}

export default MdTutorial