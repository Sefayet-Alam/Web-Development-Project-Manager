import React, { useEffect, useState } from 'react';
import { Box, Button, Typography } from '@mui/material';
import AxiosInstance from './Axios';
import { useNavigate, useParams } from 'react-router-dom';
import Navbar from './NavBar';
import './delete.css'; // Import the CSS file for styling

const Delete = () => {
  const MyParam = useParams();
  const myId = MyParam.id;
  const [myData, setMyData] = useState();
  const [loading, setLoading] = useState(true);

  const GetData = () => {
    AxiosInstance.get(`Project/${myId}`).then((res) => {
      setMyData(res.data);
      setLoading(false);
    });
  };

  useEffect(() => {
    GetData();
  }, []);

  const navigate = useNavigate();

  const submission = () => {
    AxiosInstance.delete(`Project/${myId}/`).then(() => {
      navigate(`/home`);
    });
  };

  return (
    <Navbar drawerWidth={220} content={
      <div className="container">
        {loading ? (
          <p>Loading data...</p>
        ) : (
          <div>
            <Box className="header-box">
              <Typography variant="h2" sx={{ color: '#fff' }}>
                Delete Project: {myData.name} of student: {myData.student_name}
              </Typography>
            </Box>

            <Box className="content-box">
              <Typography className="confirmation-message">
                Are you sure you want to delete the project: {myData.name}?
              </Typography>
              <Box sx={{ width: '100%' }}>
                <Button variant="outlined" color="error" onClick={submission} className="delete-button">
                  Delete
                </Button>
              </Box>
            </Box>
          </div>
        )}
      </div>
    }/>
  );
};

export default Delete;
