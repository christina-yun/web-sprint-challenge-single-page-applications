import React, { useState, useEffect} from "react";
import axios from 'axios';
import { Route, Switch } from 'react-router-dom';
import * as yup from 'yup';

import NavBar from "./Components/NavBar";
import OrderForm from './Components/OrderForm';
import Success from './Components/Success';
import FormSchema from './Components/FormSchema';


const App = () => {
  return (
    <>
      <h1>Lambda Eats</h1>
      <p>You can remove this code and create your own header</p>
    </>
  );
};
export default App;
