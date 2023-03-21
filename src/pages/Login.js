import { useState } from 'react'
import { makeStyles } from '@mui/styles'
import { TextField, Button, Typography } from '@mui/material'

const useStyles = makeStyles((theme) => ({
  wrapper: {
    margin: theme.spacing(3),
  }
}))

const Login = () => {
  const classes = useStyles()
  
  const [form, setForm] = useState({
    email: '',
    password: '',
  })

  const handleInputChange = e => {
    const { name, value } = e.target

    setForm({
      ...form,
      [name]: value,
    })
  }

  const handleFormSubmit = () => {
    console.log(form)
  }

  return (
    <>
      <Typography variant="h3">Acesso Restrito</Typography>
      
      <div className={classes.wrapper}>
        <TextField
          onChange={handleInputChange}
          label="Digite o seu e-mail"
          name="name"
        />
      </div>
      <div className={classes.wrapper}>
        <TextField 
          onChange={handleInputChange}
          label="Digite a sua senha"
          name="password"
          type="password"
        />
      </div>
      <div className={classes.wrapper}>
        <Button variant="contained" color="primary" onClick={handleFormSubmit}>
          Entrar
        </Button>
      </div>
    </>
  )
}

export default Login