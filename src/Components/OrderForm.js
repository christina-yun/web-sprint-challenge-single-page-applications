import React from 'react';
import styled from 'styled-components';

function OrderForm(props){
    const { values, errors, disabled, change, submit } = props;

    const onSubmit = event => {
        event.preventDefault();
        //invoke what happens at submittal
        submit(change);
    }

    const onChange = event => {
        const { type, name, value, checked } = event.target;
        const valueToUse = type === 'checkbox' ? checked : value;
        change(name, valueToUse);
    }
    
    return (
        <div className='form-container'>
            <div className='errors'>
                <div>{errors.name}</div>
                <div>{errors.size}</div>
            </div>
            {/* <styledOrderForm> */}
                <form id='pizza-form' onSubmit={onSubmit}>
                    <label>Name
                    <input
                        id='name-input'
                        type='text'
                        name='name'
                        value={values.name}
                        onChange={onChange}
                        />
                    </label>

                    <label> Choice of size
                        <select
                        id='size-dropdown'
                        name='size'
                        value={values.size}
                        onChange={onChange}
                        >
                            <option value=''>-- Select your size --</option>
                            <option value='small'>Small</option>
                            <option value='medium'>Medium</option>
                            <option value='large'>Large</option>
                        </select>
                    </label>

                    <h3>Toppings</h3>
                    <label>Pepperoni
                    <input
                        id='pepperoni'
                        type='checkbox'
                        name='pepperoni'
                        checked={values.pepperoni}
                        onChange={onChange}
                        />
                    </label>

                    <label>Olives
                    <input
                        id='olives'
                        type='checkbox'
                        name='olives'
                        checked={values.olives}
                        onChange={onChange}
                        />
                    </label>

                    <label>Ricotta
                    <input
                        id='ricotta'
                        type='checkbox'
                        name='ricotta'
                        checked={values.ricotta}
                        onChange={onChange}
                        />
                    </label>
                    <label>Jalapenos
                    <input
                        id='jalapenos'
                        type='checkbox'
                        name='jalapenos'
                        checked={values.jalapenos}
                        onChange={onChange}
                        />
                    </label> 

                    <label>Special Instructions
                    <input
                        id='special-text'
                        type='text'
                        name='special'
                        checked={values.special}
                        onChange={onChange}
                        />
                    </label> 
                    <button id='order-button' disabled={disabled}>Add to Order</button>             
                </form> 
            {/* </styledOrderForm> */}
        </div>
        
    )
}
export default OrderForm;