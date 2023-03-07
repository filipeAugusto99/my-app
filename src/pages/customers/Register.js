import { useState } from 'react'
import { makeStyles } from '@mui/styles'
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: theme.spacing(3),
  },
}))

const Register = () => {
  const classes = useStyles()

  const [form, setForm] = useState({
    name: "",
    job: "",
  })

  const [error, setError] = useState({
    name: true,
    job: false,
  })

  const handleInputChange = (e) => {
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleRegisterButton = () => {
    if(!form.name) {

    }
  }

  return (
    <>
      <div className={classes.wrapper}>
        <TextField
          error={error.name}
          label="Digite o seu nome" 
          name="name" 
          value={form.name} 
          onChange={handleInputChange} />
      </div>
      <div className={classes.wrapper}>
        <TextField label="Digite o seu cargo" name="job" value={form.job} onChange={handleInputChange}/>
      </div>
      <div className={classes.wrapper}>
        <Button variant="contained" color="primary" onClick={handleRegisterButton}>Confirmar</Button>
      </div>
    </>
  )
}

export default Register