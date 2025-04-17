import axios from 'axios';

const testBackendConnection = async () => {
  try {
    // Intentar una petición simple al backend
    const response = await axios.get('https://favoritosmarket-api.onrender.com/');
    console.log('Conexión exitosa al backend:', response.data);
    return true;
  } catch (error) {
    console.error('Error conectando al backend:', error);
    return false;
  }
};

export default testBackendConnection;
