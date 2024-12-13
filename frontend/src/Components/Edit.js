import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import MyDatePickerField from './forms/MyDatePickerField';
import MyTextField from './forms/MyTextField';
import MyMultilineField from './forms/MyMultilineField';
import { useForm } from 'react-hook-form';
import MySelectField from './forms/MySelectField';
import AxiosInstance from './Axios';
import Dayjs from 'dayjs';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from './NavBar';
import './edit.css'; // Import the stylesheet

const Edit = () => {
  const MyParam = useParams();
  const myId = MyParam.id;

  const [projectmanager, setProjectmanager] = useState();
  const [loading, setLoading] = useState(true);

  const hardcoded_options = [
    { id: '', name: 'Not Started' },
    { id: 'Proposal made', name: 'Proposal made' },
    { id: 'Started', name: 'Started' },
    { id: 'In progress', name: 'In progress' },
    { id: 'Completed', name: 'Completed' },
  ];

  const navigate = useNavigate();
  const defaultValues = {
    name: '',
    comments: '',
    status: '',
  };
  const { handleSubmit, setValue, control } = useForm({ defaultValues: defaultValues });

  const GetData = () => {
    AxiosInstance.get('ProjectManager').then((res) => {
      setProjectmanager(res.data);
    });
    AxiosInstance.get(`Project/${myId}`).then((res) => {
      setValue('name', res.data.name);
      setValue('projectmanager', res.data.projectmanager.id);
      setValue('status', res.data.status);
      setValue('comments', res.data.comments);
      setValue('start_date', Dayjs(res.data.start_date));
      setValue('end_date', Dayjs(res.data.end_date));
      setValue('student_name', res.data.student_name);
      setValue('student_roll', res.data.student_roll);
      setValue('student_contact', res.data.student_contact);
      setLoading(false);
    });
  };

  useEffect(() => {
    GetData();
  }, []);

  const submission = (data) => {
    const StartDate = Dayjs(data.start_date['$d']).format('YYYY-MM-DD');
    const EndDate = Dayjs(data.end_date['$d']).format('YYYY-MM-DD');
    AxiosInstance.put(`Project/${myId}/`, {
      name: data.name,
      projectmanager: data.projectmanager,
      status: data.status,
      comments: data.comments,
      start_date: StartDate,
      end_date: EndDate,
      student_name: data.student_name,
      student_roll: data.student_roll,
      student_contact: data.student_contact,
    }).then((res) => {
      navigate(`/home`);
    });
  };

  return (
    <Navbar
      drawerWidth={220}
      content={
        <div className="container">
          {loading ? (
            <p>Loading data... </p>
          ) : (
            <form onSubmit={handleSubmit(submission)}>
              <div className="header">
                <Typography variant="h5">Edit records....</Typography>
              </div>
              <Box className="form-section">
                <div className="form-group">
                  <MyTextField
                    label="Student Name"
                    name={'student_name'}
                    control={control}
                    placeholder="Student name"
                  />
                  <MyTextField
                    label="ID"
                    name={'student_roll'}
                    control={control}
                    placeholder="Roll"
                  />
                  <MyTextField
                    label="Phone no"
                    name={'student_contact'}
                    control={control}
                    placeholder="Phone no"
                  />
                </div>
                <div className="form-group">
                  <MyTextField
                    label="Project Name"
                    name={'name'}
                    control={control}
                    placeholder="Provide a project name"
                  />
                  <MyDatePickerField
                    label="Start date"
                    name="start_date"
                    control={control}
                  />
                  <MyDatePickerField
                    label="End date"
                    name="end_date"
                    control={control}
                  />
                </div>
                <div className="form-group">
                  <MyMultilineField
                    label="Comments"
                    name="comments"
                    control={control}
                    placeholder="Provide project comments"
                  />
                  <MySelectField
                    label="Status"
                    name="status"
                    control={control}
                    options={hardcoded_options}
                  />
                  <MySelectField
                    label="Course Teacher"
                    name="projectmanager"
                    control={control}
                    options={projectmanager}
                  />
                </div>
                <Button type="submit" className="submit-button">
                  Submit
                </Button>
              </Box>
            </form>
          )}
        </div>
      }
    />
  );
};

export default Edit;
