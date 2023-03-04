import * as React from 'react'

import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
} from '@mui/material'

const ModalConfirm = ({ 
  open, 
  onClose, 
  onConfirm,
  title,
  message,
}) => {

  return (
    <>
      <div>
        <Dialog
          open={open}
          onClose={onClose}
          aria-labelledby="alert-dialog-title"
          aria-describedby="alert-dialog-description"
        >
          <DialogTitle id="alert-dialog-title">
            {title}
          </DialogTitle>
          <DialogContent>
            <DialogContentText id="alert-dialog-description">
              {message}
            </DialogContentText>
          </DialogContent>
          <DialogActions>
            <Button onClick={onClose}>Cancelar</Button>
            <Button onClick={onConfirm} autoFocus>
              Confimar
            </Button>
          </DialogActions>
        </Dialog>
      </div>
    </>
  )
}

export default ModalConfirm