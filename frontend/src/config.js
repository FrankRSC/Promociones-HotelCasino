const dev = {
    apiGatewayUrl: 'https://promocioneshc-backend.herokuapp.com',
};
  
  const prod = {
    apiGatewayUrl: '',
  };
  
  let configuracion = dev;
  
  configuracion = process.env.REACT_APP_ENV === 'prod' ? prod : configuracion;
  
  const config = {
    ...configuracion,
  };

  export default config;