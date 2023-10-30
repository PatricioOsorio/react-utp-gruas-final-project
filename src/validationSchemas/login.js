import * as yup from 'yup';

export const loginValidationSchema = yup.object().shape({
  email: yup
    .string()
    .email('Ingrese un correo electrónico válido')
    .required('El correo electrónico es obligatorio'),
  password: yup
    .string()
    .min(8, 'La contraseña debe tener al menos 8 caracteres')
    .max(40, '¡Demasiado largo!')
    .matches(/[A-Z]/, 'Debe contener al menos una letra mayúscula')
    .matches(/[!@#$%^&*(),.?":{}|<>]/, 'Debe contener al menos un carácter especial')
    .required('La contraseña es obligatoria'),
});