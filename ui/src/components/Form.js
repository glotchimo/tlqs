import React, { useState } from 'react'
import './Form.css';
import Button from '@mui/material/Button';
import DepartmentChoice from './DepartmentChoice'
import ClassChoice from './ClassChoice'
import TopicChoice from './TopicChoice'
import StudentInput from './StudentInput';
import QueueSubmission from './QueueSubmission'


function Form() {

    const [page, setPage] = useState(0);
    const FormTitles = ["Department", "Classes", "Topics", "Student Input", "Queue Submission"];
    const [formData, setFormData] = useState({
        departmentInput: '',
        classInput: '',
        topicInput: '',
        studentInput: '',
    });

    const PageDisplay = () => {
        switch (page) {
            case 0:
                return <DepartmentChoice formData={formData} setFormData={setFormData} />;
            case 1:
                return <ClassChoice formData={formData} setFormData={setFormData} />;
            case 2:
                return <TopicChoice formData={formData} setFormData={setFormData} />;
            case 3:
                return <StudentInput formData={formData} setFormData={setFormData} />;
            case 4:
                return <QueueSubmission formData={formData} setFormData={setFormData} />;
            default:
                return <DepartmentChoice formData={formData} setFormData={setFormData} />;
        }
    }

    return (
        <div className="form">
            <div className='form-container'>
                <div className='header'>
                    <h1>{FormTitles[page]}</h1>
                </div>
                <div className='body'>
                    {PageDisplay()}
                </div>
                <div className='footer'>
                    <Button
                        disabled={page === 0}
                        onClick={() => { setPage((curpage) => curpage - 1); }}
                        variant="contained"
                        size="large">Back</Button>
                    <Button
                        disabled={page === FormTitles.length - 1}
                        onClick={() => { setPage((curpage) => curpage + 1); }}
                        variant="contained"
                        size="large">Next
                    </Button>
                </div>
            </div>
        </div>
    )
}

export default Form