import { useState, useEffect } from 'react'
import { makeStyles } from '@mui/styles'
import axios from 'axios'
import Grid from '@mui/material/Grid'

import CustomersCard from '../../components/CustomerCard'

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },

  card: {
    margin: theme.spacing(2),
  }
}))

const List = () => {
  const classes = useStyles()
  const [customers, setCustomers] = useState([])

  useEffect(() => {
    axios.get('https://reqres.in/api/users')
      .then(response => {
        const { data } = response.data

        setCustomers(data)
      })
  }, [])
  
  const handleRemoveCustomer = ( id ) => {
    axios.delete(`https://reqres.in/api/users/${id}`)
      .then(() => {
        const newCustomerState = customers.filter(customer => customer.id !== id)

        setCustomers(newCustomerState)
      })
  }

  return (
    <Grid container>
      {
        customers.map(item => (
          <Grid item xs={12} md={4}>
            <CustomersCard
              id={item.id}
              name={item.first_name}
              lastname={item.last_name}
              email={item.email}
              avatar={item.avatar}
              className={classes.card}
              onRemoveCustomer={handleRemoveCustomer}
            />
          </Grid>
        ))
      }
    </Grid>
  )
}

export default List