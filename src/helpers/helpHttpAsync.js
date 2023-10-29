// export const helpHttpAsync = () => {
//   const customFetch = async (endpoint, options) => {
//     const defaultHeader = {
//       accept: 'application/json',
//     };

//     const controller = new AbortController();

//     options.signal = controller.signal;

//     // Establece un método por defecto GET
//     options.method = options.method || 'GET';

//     options.headers = options.headers
//       ? { ...defaultHeader, ...options.headers }
//       : defaultHeader;

//     options.body = JSON.stringify(options.body) || false;

//     if (!options.body) delete options.body;
//     // console.log(options);
//     setTimeout(() => controller.abort(), 5000);

//     try {
//       const res = await fetch(endpoint, options);
//       if (res.ok) {
//         return await res.json();
//       } else {
//         return {
//           err: true,
//           status: res.status || '00',
//           statusText: res.statusText || 'Ocurrió un error',
//         };
//       }
//     } catch (error) {
//       return {
//         err: true,
//         status: '00',
//         statusText: 'Ocurrió un error',
//       };
//     }
//   };

//   const get = async (url, options = {}) => customFetch(url, options);

//   const post = async (url, options = {}) => {
//     options.method = 'POST';
//     return customFetch(url, options);
//   };

//   const put = async (url, options = {}) => {
//     options.method = 'PUT';
//     return customFetch(url, options);
//   };

//   const del = async (url, options = {}) => {
//     options.method = 'DELETE';
//     return customFetch(url, options);
//   };

//   return {
//     get,
//     post,
//     put,
//     del,
//   };
// };

export const helpHttpAsync = () => {
  const customFetch = async (endpoint, options) => {
    const defaultHeader = {
      accept: 'application/json',
    };

    const controller = new AbortController();

    options.signal = controller.signal;

    // Establece un método por defecto GET
    options.method = options.method || 'GET';

    options.headers = options.headers
      ? { ...defaultHeader, ...options.headers }
      : defaultHeader;

    options.body = JSON.stringify(options.body) || false;

    if (!options.body) delete options.body;
    // console.log(options);
    setTimeout(() => controller.abort(), 5000);

    try {
      const res = await fetch(endpoint, options);
      if (res.ok) {
        return await res.json();
      } else {
        throw new Error(
          `Error en la solicitud: ${res.status} - ${res.statusText}`
        );
      }
    } catch (error) {
      throw new Error(`Error en la solicitud: ${error.message}`);
    }
  };

  const get = async (url, options = {}) => customFetch(url, options);

  const post = async (url, options = {}) => {
    options.method = 'POST';
    return customFetch(url, options);
  };

  const put = async (url, options = {}) => {
    options.method = 'PUT';
    return customFetch(url, options);
  };

  const del = async (url, options = {}) => {
    options.method = 'DELETE';
    return customFetch(url, options);
  };

  return {
    get,
    post,
    put,
    del,
  };
};
