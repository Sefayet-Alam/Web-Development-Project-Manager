import { React, useEffect, useMemo, useState } from 'react'
import AxiosInstance from './Axios'
import { MaterialReactTable } from 'material-react-table';
import Dayjs from 'dayjs';
import { Box, colors, IconButton } from '@mui/material';
import { Edit as EditIcon, Delete as DeleteIcon } from '@mui/icons-material';
import { Link } from 'react-router-dom'
import './Home.css';
import Navbar from './NavBar';

const Home = () => {
  const [myData, setMyData] = useState()
  const [loading, setLoading] = useState(true)
  const GetData = () => {
    AxiosInstance.get('Project/').then((res) => {
      setMyData(res.data)
      console.log(res.data)
      setLoading(false)
    })
  }
  useEffect(() => {
    GetData();
  }, [])

  const columns = useMemo(
    () => [
      {
        accessorKey: 'student_name',
        header: 'Student Name',
        size: 150,
      },
      {
        accessorKey: 'name', //access nested data with dot notation
        header: 'Project Name',
        size: 150,
      },
      {
        accessorKey: 'student_roll',
        header: 'ID',
        size: 150,
      },
      {
        accessorKey: 'student_contact',
        header: 'Contact No',
        size: 150,
      },
      {
        accessorKey: 'status',
        header: 'Status',
        size: 150,
      },
      {
        accessorKey: 'projectmanager.name',
        header: 'Course Teacher Name',
        size: 150,
      },
      {
        accessorKey: 'projectmanager.manager_contact',
        header: 'Teacher Contact No',
        size: 150,
      },
      {
        accessorKey: 'comments', //normal accessorKey
        header: 'Comments',
        size: 200,
      },
      {
        accessorFn: (row) => Dayjs(row.start_date).format("DD-MM-YYYY"),
        header: 'Start date',
        size: 150,
      },
      {
        accessorFn: (row) => Dayjs(row.end_date).format("DD-MM-YYYY"),
        header: 'End date',
        size: 150,
      },
    ],
    [],
  );

  return (
    <div>
      <Navbar drawerWidth={220} content={
        <div>
      {loading ? <p className="loading">Loading data...</p> :
        <div className="dashboard">
          <h2>
            Dashboard
          </h2>
          <MaterialReactTable
            columns={columns}
            data={myData}
            enableRowActions
            renderRowActions={({ row }) => (
              <Box sx={{ display: 'flex', flexWrap: 'nowrap', gap: '8px' }}>
                <IconButton
                  color="secondary"
                  component={Link}
                  to={`/edit/${row.original.id}`}
                >
                  <EditIcon />
                </IconButton>
                <IconButton
                  color="error"
                  component={Link}
                  to={`/delete/${row.original.id}`}
                >
                  <DeleteIcon />
                </IconButton>
              </Box>
            )}
          />
        </div>
      }
      </div>
      }/>
    </div>
  )
}

export default Home