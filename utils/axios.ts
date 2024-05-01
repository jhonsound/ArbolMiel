// utils/axios.js
import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: "https://05prg5rd-3001.use.devtunnels.ms/",// process.env.NEXT_PUBLIC_API,  Cambia esto por tu base URL
  headers: {
    'Content-Type': 'application/json',
    // Otros encabezados personalizados que necesites
  },
});

// Opcional: Configurar interceptores para manejar errores o agregar tokens de autenticación
// axiosInstance.interceptors.request.use(
//   (config) => {
//     // Ejemplo: Agregar un token de autenticación desde el almacenamiento local
//     const token = localStorage.getItem('access_token');
//     if (token) {
//       config.headers['Authorization'] = `Bearer ${token}`;
//     }
//     return config;
//   },
//   (error) => {
//     return Promise.reject(error);
//   }
// );

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    // Manejo de errores
    if (error.response?.status === 401) {
      // Ejemplo: Redirigir a la página de inicio de sesión si hay un error 401
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;