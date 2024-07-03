
import {React, useEffect, useState} from 'react' 
import { Box, Button, Typography } from '@mui/material'
import AxiosInstance from './Axios'
import {useNavigate, useParams} from 'react-router-dom'

const Delete = () => {
  const MyParam = useParams()
  const myId = MyParam.id
  const [myData, setMyData] = useState()
  const [loading, setLoading] = useState(true)
  const GetData = () => {
    AxiosInstance.get(`Project/${myId}`).then((res) => {
      // console.log(res.data)
      setMyData(res.data)
      // console.log(res.data)
      setLoading(false)
    })
  }
  useEffect(() => {
    // console.log(res.data)
    GetData();
  }, [])
  const navigate = useNavigate()


  const submission = (data) => {
    // console.log(data);
    AxiosInstance.delete(`Project/${myId}/`).then((res) => {
      navigate(`/`)
    })
  }
  return (
    <div>
      {loading ? <p>loading data...</p>
        :
        <div>
          <Box sx={{ display: 'flex', justifyContent: 'space-between', width: '100%', backgroundColor: '#00003f', marginBottom: '10px' }}>
            <Typography sx={{ marginLeft: '20px', color: '#fff' }}>
              Delete Project: {myData.name}
            </Typography>

          </Box>

          <Box sx={{ display: 'flex', width: '100%', boxShadow: 3, padding: 4, flexDirection: 'column' }}>

            <Box sx={{ display: 'flex', justifyContent: 'start', marginBottom: '40px' }}>
              Are you sure you want to delete the project:   {myData.name}
            </Box>
            <Box sx={{ width: '100%' }}>
              <Button variant="contained" onClick={submission} sx={{ width: '30%' }}>
                Delete
              </Button>
            </Box>

          </Box>
        </div>
      }
    </div>
  )
}

export default Delete
