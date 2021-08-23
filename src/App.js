import React, { useState, useEffect} from "react";
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import * as yup from 'yup';

import OrderLink from "./Components/OrderLink";
import OrderForm from './Components/OrderForm';
import Success from './Components/Success';
import FormSchema from './Components/FormSchema';

//All initial values
const initialFormValues = {
  name:'', 
  size:'',
  pepperoni: false,
  olives: false,
  ricotta: false,
  jalapenos: false,
  special:''
};
const initialFormErrors = {
  name:'', 
  size:''
};
const initialOrderList = [];
const initialDisabled = true;

const App = () => {
  //States for everything
  const [formValues, setFormValues] = useState(initialFormValues);
  const [formErrors, setFormErrors] = useState(initialFormErrors);
  const [order, setOrder] = useState(initialOrderList);
  const [disabled, setDisabled] = useState(initialDisabled);

  //grabbing orders from the API
  // const getOrders = () => {
  //   axios.get('https://reqres.in/api/orders')
  //   .then(res => {
  //     console.log(res.data)
  //     setOrder(res.data)
      
  //   })
  //   .catch(err => {
  //     console.error(err);
  //   })
  // }

  //posting order information
  const postNewOrder = newOrder =>{
    axios.post('https://reqres.in/api/orders', newOrder)
    .then(response => {
      setOrder(response.data, ...order)
    })
    setFormValues(initialFormValues);
  }
  
  //validation
  const validated = (name, value) => {
    yup.reach(FormSchema, name).validate(value)
        .then(() => setFormErrors({ ...formErrors, [name]:'' }))
        .catch( err => setFormErrors({ ...formErrors, [name]: err.errors[0] }))
    }

  const inputChange = (name, value) => {
    validated(name, value);
    setFormValues({ ...formValues, [name]: value 
    })
    }

  useEffect(() => {
    FormSchema.isValid(formValues).then( valid => setDisabled(!valid))
  }, [formValues])

  //everything that happens at submit
  function formSubmit(){
    const newOrder = {
      name:formValues.name.trim(), 
      size:formValues.size,
      pepperoni: formValues.pepperoni,
      olives: formValues.olives,
      ricotta: formValues.ricotta,
      jalapenos: formValues.jalapenos,
      special:formValues.special
    }
    //invoke the function that sends newOrder to the server
    postNewOrder(newOrder);
  } 

  return (
    <div className='web-container'>
          <h1>Lambda Eats</h1>
          <Switch>
            <Route exact path='/'>
              <OrderLink />
            </Route>

            <Route path='/pizza'>
              <OrderForm 
              values={formValues} 
              errors={formErrors} 
              disabled={disabled} 
              change={inputChange}
              submit={formSubmit} />
            </Route>
          

          <Success />
          </Switch>
          
    </div>
  );
};
export default App;
