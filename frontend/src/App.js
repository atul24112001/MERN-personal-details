import React, { useEffect, useState } from 'react'
import PersonTable from './Components/PersonTable'
import { Container } from '@mui/material'
import Navbar from './Components/Navbar'
import Form from './Components/Form';
import { GetPerson } from './api';

function App() {
  const [open, setOpen] = React.useState(false);
  const [edit, setEdit] = useState(null);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);
  const [tableData, setTableData] = useState(null)

  const getData = async () => {
    const { data } = await GetPerson()
    setTableData(data.data);
  }

  useEffect(() => {
    getData();
  }, [])

  return (
    <Container maxWidth='100vw'>
      <Navbar />
      {tableData && <PersonTable getData={getData} data={tableData} setEdit={setEdit} handleOpen={handleOpen} />}
      <Form getData={getData} edit={edit} setEdit={setEdit} handleClose={handleClose} open={open} />
    </Container>
  )
}

export default React.memo(App);