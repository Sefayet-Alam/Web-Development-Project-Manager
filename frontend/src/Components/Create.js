import React, { useState, useEffect } from 'react';
import { Box, Button, Typography } from '@mui/material';
import MyDatePickerField from './forms/MyDatePickerField';
import MyTextField from './forms/MyTextField';
import MyMultilineField from './forms/MyMultilineField';
import { useForm } from 'react-hook-form';
import MySelectField from './forms/MySelectField';
import AxiosInstance from './Axios';
import Dayjs from 'dayjs';
import { useNavigate } from 'react-router-dom';
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import dayjs from 'dayjs';
import Navbar from './NavBar';
import './create.css';  // Import the CSS file for styling

const Create = () => {
  const [projectmanager, setProjectmanager] = useState();
  const [loading, setLoading] = useState(true);

  const hardcoded_options = [
    { id: '', name: 'Not Started' },
    { id: 'Proposal made', name: 'Proposal made' },
    { id: 'Started', name: 'Started' },
    { id: 'In progress', name: 'In progress' },
    { id: 'Completed', name: 'Completed' },
  ];

  const GetData = () => {
    AxiosInstance.get('ProjectManager').then((res) => {
      setProjectmanager(res.data);
      console.log(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    GetData();
  }, []);

  const navigate = useNavigate();
  const defaultValues = {
    name: '',
    comments: '',
    status: '',
    start_date: dayjs(),
    end_date: dayjs(),
  };

  const schema = yup.object({
    name: yup.string().required('Name is a required field'),
    projectmanager: yup.string().required('Project Manager is a required field'),
    status: yup.string().required('Status is a required field'),
    comments: yup.string(),
    start_date: yup.date().required('Start_date is a required field'),
    end_date: yup
      .date()
      .required('End_date is a required field')
      .min(yup.ref('start_date'), 'The end date cannot be before the start date'),
  });

  const { handleSubmit, control } = useForm({ defaultValues: defaultValues, resolver: yupResolver(schema) });

  const submission = (data) => {
    console.log(typeof data.start_date);
    const StartDate = Dayjs(data.start_date["$d"]).format("YYYY-MM-DD");
    const EndDate = Dayjs(data.end_date["$d"]).format("YYYY-MM-DD");
    AxiosInstance.post(`Project/`, {
      name: data.name,
      projectmanager: data.projectmanager,
      status: data.status,
      comments: data.comments,
      start_date: StartDate,
      end_date: EndDate,
      student_name: data.student_name,
      student_roll: data.student_roll,
      student_contact: data.student_contact,
    })
      .then((res) => {
        navigate(`/home`);
      });
  };

  return (
    <Navbar
      drawerWidth={220}
      content={
        <div className="container">
          {loading ? (
            <p>Loading data</p>
          ) : (
            <form onSubmit={handleSubmit(submission)}>
              <Box className="form-box">
                <Box className="form-header">
                  <Typography variant="h4">Create A new Project!</Typography>
                </Box>

                <Box className="form-section">
                  <MyTextField label="Student Name" name={"student_name"} control={control} placeholder="Student name" />
                  <MyTextField label="ID" name={"student_roll"} control={control} placeholder="Roll" />
                  <MyTextField label="Phone no" name={"student_contact"} control={control} placeholder="Phone no" />
                </Box>

                <Box className="form-section">
                  <MyTextField label="Project Name" name={"name"} control={control} placeholder="Provide a project name" />
                  <MyDatePickerField label="Start date" name="start_date" control={control} />
                  <MyDatePickerField label="End date" name="end_date" control={control} />
                </Box>

                <Box className="form-section">
                  <MyMultilineField label="Comments" name="comments" control={control} placeholder="Provide project comments" />
                  <MySelectField label="Status" name="status" control={control} options={hardcoded_options} />
                  <MySelectField label="Course Teacher Name" name="projectmanager" control={control} options={projectmanager} />
                </Box>

                <Box className="submit-btn">
                  <Button variant="contained" type="submit">
                    Submit
                  </Button>
                </Box>
              </Box>
            </form>
          )}
        </div>
      }
    />
  );
};

export default Create;
