import { React, useState, useEffect } from 'react'
import { Box, Button, Typography } from '@mui/material'
import MyDatePickerField from './forms/MyDatePickerField'
import MyTextField from './forms/MyTextField'
import MyMultilineField from './forms/MyMultilineField'
import { useForm } from 'react-hook-form'
import MySelectField from './forms/MySelectField'
import AxiosInstance from './Axios'
import Dayjs from 'dayjs'
import { useNavigate } from 'react-router-dom'
import { yupResolver } from '@hookform/resolvers/yup';
import * as yup from "yup";
import dayjs from 'dayjs'



const Create = () => {

  const [projectmanager, setProjectmanager] = useState()
  const [loading, setLoading] = useState(true)


  const hardcoded_options = [
    {id:'', name:'None'}, 
    {id:'Open', name:'Open'}, 
    {id:'In progress', name:'In progress'}, 
    {id:'Completed', name:'Completed'}, 
  ]
  
  const GetData = () => {
    AxiosInstance.get('ProjectManager').then((res) => {
      setProjectmanager(res.data)
      console.log(res.data)
      setLoading(false)
    })
  }
  useEffect(() => {
    GetData();
  }, [])

  const navigate = useNavigate()
  const defaultValues = {
    name: '',
    comments: '',
    status: '',
    start_date: dayjs(),
    end_date: dayjs()
  }

  const schema = yup.object({
    name: yup.string().required('Name is a required field'),
    projectmanager: yup.string().required('Project Manager is a required field'),
    status: yup.string().required('status is a required field'),
    comments: yup.string(),
    start_date: yup.date().required('Start_date is a required fiedl'),
    end_date: yup.date().required('End_date is a required fiedl').min(yup.ref('start_date'), 'The end date can not be before start date')
  })

  const { handleSubmit, control } = useForm({ defaultValues: defaultValues, resolver: yupResolver(schema) })

  const submission = (data) => {
    console.log(typeof data.start_date);
    const StartDate = Dayjs(data.start_date["$d"]).format("YYYY-MM-DD");
    const EndDate = Dayjs(data.end_date["$d"]).format("YYYY-MM-DD");
    AxiosInstance.post(
      `Project/`, {
      name: data.name,
      projectmanager: data.projectmanager,
      status: data.status,
      comments: data.comments,
      start_date: StartDate,
      end_date: EndDate
    }
    )
      .then((res) => {
        navigate(`/`)
      })
  }
  return (
    <div>
      {loading ? <p>Loading data</p> :
        <form onSubmit={handleSubmit(submission)}>

          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', backgroundColor: '#00003f', marginBottom: '10px' }}>
            <Typography sx={{ marginLeft: '20px', color: '#fff' }}>
              Create records
            </Typography>
          </Box>

          <Box sx={{ display: 'flex', width: '100%', boxShadow: 3, padding: 4, flexDirection: 'column' }}>
            <Box sx={{ display: 'flex', justifyContent: 'space-around', marginBottom: '40px' }}>
              <MyTextField
                label="Name"
                name={"name"}
                control={control}
                placeholder="Provide a project name"
                width={'30%'}
              />
              <MyDatePickerField
                label="Start date"
                name="start_date"
                control={control}
                width={'30%'}
              />
              <MyDatePickerField
                label="End date"
                name="end_date"
                control={control}
                width={'30%'}

              />

            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-around' }}>
              <MyMultilineField
                label="Comments"
                name="comments"
                control={control}
                placeholder="Provide project comments"
                width={'30%'}
              />

              <MySelectField
                label="Status"
                name="status"
                control={control}
                width={'30%'}
                options={hardcoded_options}
              />
              <MySelectField
                label="Project manager"
                name="projectmanager"
                control={control}
                width={'30%'}
                options={projectmanager}
              />
            </Box>

            <Box sx={{ display: 'flex', justifyContent: 'space-around', marginTop: '40px' }}>
              <Button variant="contained" type="submit" sx={{ width: '30%' }}>
                Submit
              </Button>
            </Box>
          </Box>

        </form>
      }
    </div>

  )
}

export default Create
