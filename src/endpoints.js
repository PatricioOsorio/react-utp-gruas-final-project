const BASE_URL = import.meta.env.VITE_API_URL;
export const URL_LOGIN = `${BASE_URL}/api/Login/Login`;
export const URL_REGISTER = `${BASE_URL}/api/Auth/RegisterUser`;
export const URL_CORRALONES_LISTA = `${BASE_URL}/api/Corralones/ListaActivos`;
export const URL_SINIESTROS_REGISTRAR = `${BASE_URL}/api/Siniestros/Registrar`;
export const URL_GRUASCORRALON_ID = `${BASE_URL}/api/Gruas/GruasCorralon`;