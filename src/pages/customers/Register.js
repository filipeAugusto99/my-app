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

  return (
    <>
      <div className={classes.wrapper}>
        <TextField label="Digite o seu nome" />
      </div>
      <div className={classes.wrapper}>
        <TextField label="Digite o seu cargo" />
      </div>
      <div className={classes.wrapper}>
        <Button variant="contained">Confirmar</Button>
      </div>
    </>
  )
}

export default Register