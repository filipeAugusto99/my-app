
import {
  Snackbar,
} from '@mui/material/Button'

import MuiAlert from '@mui/material/Alert'

const Toasty = ({ open, onClose }) => {

  const handleClose = (event, reason) => {
    if (reason === 'clickaway') {
      return
    }

    onClose()
  }

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message="Note archived"
      action={
        <>
          <MuiAlert elevation={6} variant="filled" severity="success" />
        </>
      }
    />
  )
}

export default Toasty