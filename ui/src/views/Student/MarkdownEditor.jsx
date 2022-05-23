import useState from 'react';
import Box from '@mui/material/Box'
import ReactMarkdown from 'react-markdown'
import Typography from '@mui/material/Typography';
import FormControl from '@mui/material/FormControl';
import './MarkdownEditor.css'

function MarkdownEditor({ studentProblem }) {

    return (
        <FormControl fullWidth>
            <Box id='preview-container' sx={{ m: 1 }}>
                <Box id='preview-box' sx={{ m: 1, minHeight: '80vh', fontFamily: 'IBM Plex Sans', wordWrap: 'break-line', overflowWrap: 'break-line' }}>
                    <ReactMarkdown>{studentProblem}</ReactMarkdown>
                </Box>
            </Box>
        </FormControl>
    );
}

export default MarkdownEditor;