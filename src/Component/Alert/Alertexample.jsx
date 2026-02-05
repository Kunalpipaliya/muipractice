import Alert from '@mui/material/Alert'
import React from 'react'
import CheckIcon from '@mui/icons-material/Check';
const Alertexample = () => {
  return (
    <div>
        <h3>Alert</h3>
        <Alert icon={<CheckIcon fontSize="inherit" />} severity='success'>
            this is success alert
        </Alert>
        <Alert icon={<CheckIcon fontSize="inherit" />} severity='info'>
            this is info alert
        </Alert>
        <Alert icon={<CheckIcon fontSize="inherit" />} severity='error'>
            this is error alert
        </Alert>
        <Alert icon={<CheckIcon fontSize="inherit" />} severity='warning'>
            this is success alert
        </Alert>
        <Alert variant='filled' icon={<CheckIcon fontSize="inherit" />} severity='success'>
            this is success alert
        </Alert>
    </div>
  )
}

export default Alertexample
