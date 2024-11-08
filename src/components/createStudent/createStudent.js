import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import Button from '@material-ui/core/Button';
import axios from 'axios' ;

const useStyles = makeStyles((theme) => ({
  root: {
    '& > *': {
      margin: theme.spacing(1),
      width: '25ch',
    },
  },
}));

export default function Create() {
  const classes = useStyles();
  const [student, setStudent] = useState({
      regNo: '',
      studentName:'',
      grade : '',
      section:''
  });

  const createStudent = () => {
    window.location.reload(true) ;
    axios.post('http://localhost:5000/students', student).then(() => {
        
        })
  }

  return (
      <>
      <h2> Create Student </h2>
    <form className={classes.root} noValidate autoComplete="off">
      <TextField id="outlined-basic" label="Registeration No." variant="outlined" value={student.regNo} onChange={(event) =>{
          setStudent({ ...student, regNo:event.target.value})
      }}/>
      <TextField id="outlined-basic" label="Student Name" variant="outlined"value={student.studentName} onChange={(event) =>{
          setStudent({ ...student, studentName:event.target.value})
      }}/>
      <TextField id="outlined-basic" label="Class & Section" variant="outlined" value={student.grade} onChange={(event) =>{
          setStudent({ ...student, grade:event.target.value})
      }}/>
      <TextField id="outlined-basic" label="Status" variant="outlined" value={student.section} onChange={(event) =>{
          setStudent({ ...student, section:event.target.value})
      }}/>
      <Button variant="contained" color="primary" onClick={createStudent}>
        Create
      </Button>
    </form>
    </>
  );
}
