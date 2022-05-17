import useState from 'react';
import Box from '@mui/material/Box'
import ReactMarkdown from 'react-markdown'
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import './Rte.css'

function Rte({ studentProblem, setStudentProblem }) {

    const handleChange = (event) => {
        setStudentProblem(event.target.value);
    };

    return (
        <FormControl fullWidth>
            <TextField multiline sx={{ m: 1 }}
                label="Problem"
                placeholder="Where do I begin..."
                rows={14}
                maxRows={14}
                onChange={handleChange}
            />

            <Box id='preview-container' sx={{ m: 1, border: '1px solid', borderRadius: '4px 4px' }}>
                <Box id='preview-box' sx={{ minHeight: '20vh', m: 1, fontFamily: 'IBM Plex Sans', wordWrap: 'break-line', overflowWrap: 'break-line' }}>
                    <ReactMarkdown>{studentProblem}</ReactMarkdown>
                </Box>
            </Box>
        </FormControl>
    );
}

export default Rte;