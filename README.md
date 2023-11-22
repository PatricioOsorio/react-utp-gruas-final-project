# Gruas de Puebla (Front-end)

## Tecnologias ocupadas

| Tecnología/Librería      | Versión  | Descripción                                                                               |
| ------------------------ | -------- | ----------------------------------------------------------------------------------------- |
| React                    | ^18.2.0  | Biblioteca principal para la construcción de interfaces de usuario.                       |
| React-DOM                | ^18.2.0  | Librería de enlace para React y el DOM.                                                   |
| React Router DOM         | ^6.17.0  | Librería para el enrutamiento dentro de aplicaciones React.                               |
| AOS                      | ^2.3.1   | Librería para animaciones al hacer scroll.                                                |
| Datatables.net-plugins   | ^1.13.6  | Plugins adicionales para la manipulación de tablas en Datatables.                         |
| Formik                   | ^2.4.5   | Librería para gestionar formularios en React.                                             |
| jQuery                   | ^3.7.1   | Biblioteca para simplificar la manipulación del DOM y realizar peticiones AJAX.           |
| Leaflet                  | ^1.9.4   | Librería para mapas interactivos.                                                         |
| Leaflet-routing-machine  | ^3.2.12  | Extensión de Leaflet para enrutamiento de mapas.                                          |
| SweetAlert2              | ^11.7.32 | Librería para crear ventanas modales personalizadas.                                      |
| Yup                      | ^1.3.2   | Librería para validación de esquemas.                                                     |
| ESLint                   | ^8.45.0  | Herramienta para el análisis estático del código para identificar patrones problemáticos. |
| eslint-plugin-react      | ^7.32.2  | Plugin de ESLint para reglas específicas de React.                                        |
| @types/react             | ^18.2.15 | Definiciones de tipos TypeScript para React.                                              |
| @types/react-dom         | ^18.2.7  | Definiciones de tipos TypeScript para ReactDOM.                                           |
| vite                     | ^4.4.5   | Herramienta de construcción rápida y ligera para aplicaciones web modernas.               |
| @vitejs/plugin-react-swc | ^3.3.2   | Plugin para Vite que proporciona soporte para React con SWC (Compilador de JavaScript).   |
| prop-types               | ^15.8.1  | Librería para validar las propiedades de los componentes React.                           |

---

## `src/components/main.jsx`

- Este archivo es el punto de entrada principal de la aplicación React. Se encarga de renderizar el componente principal App en el elemento con ID root del documento HTML.

### Importaciones

- `React`: Importa la biblioteca principal de React para trabajar con componentes.
- `ReactDOM`: Importa el módulo de ReactDOM para renderizar componentes en el DOM.
- `App`: Importa el componente principal de la aplicación desde el archivo `App.jsx`.
- `bootstrap.min.personalized.css`: Importa el archivo CSS personalizado para estilos específicos.
- `bootstrap.bundle.min.js`: Importa el archivo JavaScript de Bootstrap para funcionalidades específicas.

---

## `src/components/App.jsx`

Este archivo representa el componente principal de la aplicación React. Define las rutas de la aplicación utilizando React Router, importa páginas y componentes necesarios, y utiliza `BrowserRouter` para la navegación.

### Importaciones

### Función `App()`

```javascript
function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000, // Duración de la animación en milisegundos
      easing: 'ease-in-out', // Tipo de easing para la animación
    });
  }, []);

  return (
    <BrowserRouter>
      <Routes>{/* Definición de rutas */}</Routes>
    </BrowserRouter>
  );
}

export default App;
```

### Descripción

- `App()`: Función principal que representa el componente principal de la aplicación.
- `useEffect()`: Utilizado para inicializar AOS, una biblioteca para animaciones al cargar la página.
- `BrowserRouter`: Componente de React Router que provee la navegación a través de la aplicación.
- `Routes`: Componente que define las diferentes rutas y sus correspondientes componentes a ser renderizados.

### Renderizado de Rutas

El componente `Routes` contiene una serie de `Route` que definen las diferentes páginas de la aplicación y sus respectivas rutas:

- Páginas Públicas:

  - `HomePagePublic`
  - `LoginPage`
  - `RegisterPage`
  - `ContactoPagePublic`
  - `AcercaPagePublic`
  - `FaqPagePublic`
  - `ConsultaMatriculaPagePublic`

- Páginas Privadas:

  - `HomePagePrivate`
  - `FormularioPagePrivate`
  - `DashboardPagePrivate`

- Página 404 (`Page404`): Ruta para mostrar una página de error cuando ninguna otra ruta coincide.

### Uso de React Router

El uso de `Route` dentro de `BrowserRouter` establece las rutas y sus componentes correspondientes para renderizar en función de la URL actual del navegador.

Este archivo `App.jsx` actúa como el componente principal que controla la navegación y renderización de componentes basados en las URL accedidas en la aplicación React.

---

## `src/components/endpoints.js`

Este archivo contiene la definición de diferentes endpoints (URLs) utilizados para realizar peticiones a una API en el contexto de la aplicación.

### Descripción

- `BASE_URL`: Variable que almacena la URL base de la API, probablemente obtenida de variables de entorno o configuraciones de Vite.

- `URL_LOGIN`: Endpoint para realizar la autenticación de usuarios.
- `URL_REGISTER`: Endpoint para registrar nuevos usuarios.
- `URL_CORRALONES_LISTA`: Endpoint para obtener una lista de corralones activos.
- `URL_SINIESTROS_REGISTRAR`: Endpoint para registrar siniestros.
- `URL_GRUASCORRALON_ID`: Endpoint para obtener información sobre grúas de un corralón específico.
- `URL_VEHICULOSTRANSPORTADOS_UBICAR`: Endpoint para ubicar vehículos transportados.
- `URL_REGISTRO_SINIESTRO_COMPLETO`: Endpoint para registrar un siniestro completo.

Estos endpoints representan diferentes operaciones que la aplicación puede realizar hacia la API, como autenticación, registro, consultas y operaciones relacionadas con siniestros, grúas, corralones y vehículos transportados.

---

## `src/helpers/helpHttpAsync.js`

Este archivo contiene una función (`helpHttpAsync`) que proporciona métodos para realizar peticiones HTTP asincrónicas utilizando `fetch` en aplicaciones JavaScript/React.

### Descripción

El archivo `helpHttpAsync.js` proporciona una función `helpHttpAsync` que actúa como un cliente HTTP asíncrono. Esta función ofrece métodos para realizar peticiones HTTP como GET, POST, PUT y DELETE utilizando `fetch`.

- `customFetch`: Función interna para realizar la petición HTTP usando `fetch`. Maneja las opciones de la solicitud, como el método, las cabeceras y el cuerpo (si corresponde), y devuelve los datos en formato JSON o lanza un error si la solicitud no es exitosa.

- `get`, `post`, `put`, `del`: Métodos expuestos para realizar peticiones HTTP con los métodos GET, POST, PUT y DELETE, respectivamente. Cada método toma una URL y opciones adicionales para la solicitud y utiliza la función `customFetch` internamente para ejecutar la petición correspondiente.

---

## `src/validationSchemas/login.js`

Este archivo proporciona un esquema de validación utilizando la librería Yup para validar los campos de un formulario de inicio de sesión.

### Descripción

El objeto `loginValidationSchema` define un esquema de validación utilizando Yup que especifica las reglas de validación para dos campos:

- **`email`**: Se espera que sea una cadena de texto que represente un correo electrónico válido. El método `email()` de Yup valida si el valor ingresado es un correo electrónico válido, y el método `required()` asegura que este campo no esté vacío, mostrando el mensaje de error 'El correo electrónico es obligatorio' en caso de que esté vacío.
- **`password`**: Se espera que sea una cadena de texto. El método `required()` de Yup asegura que este campo no esté vacío, mostrando el mensaje de error 'La contraseña es obligatoria' en caso de que esté vacío.

---

## `src/validationSchemas/register.js`

Este archivo proporciona un esquema de validación utilizando la librería Yup para validar los campos de un formulario de registro de usuario.

### Descripción

El objeto `registerValidationSchema` define un esquema de validación utilizando Yup que especifica las reglas de validación para varios campos:

- **`email`**: Se espera que sea una cadena de texto que represente un correo electrónico válido. El método `email()` de Yup valida si el valor ingresado es un correo electrónico válido, y el método `required()` asegura que este campo no esté vacío, mostrando el mensaje de error 'El correo electrónico es obligatorio' en caso de que esté vacío.

- **`password`**: Se espera que sea una cadena de texto que cumpla con varias reglas:
  - `min(8)`: La contraseña debe tener al menos 8 caracteres.
  - `max(40)`: La contraseña no debe exceder los 40 caracteres.
  - `matches(/[A-Z]/)`: Debe contener al menos una letra mayúscula.
  - `matches(/[!@#$%^&*(),.?":{}|<>]/)`: Debe contener al menos un carácter especial.
  - `required()`: El campo de contraseña es obligatorio.

- **`confirmPassword`**: Se espera que sea una cadena de texto que coincida con el campo de contraseña (`password`). El método `oneOf([yup.ref('password'), null])` verifica si coincide con el campo de contraseña y `required()` asegura que este campo no esté vacío, mostrando el mensaje de error 'Es obligatorio confirmar la contraseña' en caso de que esté vacío o no coincida con la contraseña.

---

## `src/components/Distances.jsx`

Este archivo exporta una función llamada `calcularDistancia`, la cual utiliza la librería Leaflet y Leaflet Routing Machine para calcular la distancia y el tiempo estimado entre dos coordenadas geográficas.

### Descripción

La función `calcularDistancia` toma dos coordenadas geográficas (`coordenadaInicio` y `coordenadaFin`) y utiliza Leaflet y Leaflet Routing Machine para calcular la distancia y el tiempo estimado entre estas dos ubicaciones.

- Utiliza la librería Leaflet para crear puntos de inicio y fin (`start` y `end`) a partir de las coordenadas proporcionadas.
- Crea un control de enrutamiento (`control`) utilizando Leaflet Routing Machine, configurando waypoints para representar el inicio y el fin del trayecto.
- Al recibir las rutas encontradas (`routesfound`), calcula la distancia en kilómetros y el tiempo estimado en minutos entre las ubicaciones.
- Retorna una promesa que se resuelve con un objeto que contiene la distancia en kilómetros, el tiempo estimado en minutos y las coordenadas del destino.


---
