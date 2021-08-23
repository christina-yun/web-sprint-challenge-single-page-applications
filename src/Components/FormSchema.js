import * as yup from 'yup';

const FormSchema = yup.object().shape({
    name: yup
        .string()
        .trim()
        .required('Name is required')
        .min(2, 'name must be at least 2 characters'),
    size: yup
        .string()
        .required('Size is required'),
    pepperoni: yup.boolean(),
    olives: yup.boolean(),
    ricotta: yup.boolean(),
    jalapenos: yup.boolean(),
    special: yup.string()
})

export default FormSchema;