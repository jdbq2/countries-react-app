# **Countries React - Redux App**

[![](https://jdbq2.github.io/myportafolio/assets/countries_app.1083d03a07b80ef63f79ede052b2685a.png)](http://https://jdbq2.github.io/myportafolio/assets/countries_app.1083d03a07b80ef63f79ede052b2685a.png)

Aplicacion desarrollada con el fin de obtener informacion sobre los paises del mundo. Utilizando la REST API : https://restcountries.eu/



### Instalar

    npm run install

### Dependencias 
- Parcel
- React
- React Router
- React Redux
- Redux Thunk
- React Helmet
- Sass
- Gsap

### Carpetas

El proyecto se encuentra dentro de la carpeta ***src*** organizado de la siguiente manera:

- **actions**: Actions usados dentro de Redux.

- **assets**: carpeta donde se encuentran las imagenes usadas dentro del proyecto, especificamente las de la pantalla principal.

- **components**: componentes utilizados dentro de la aplicación. (cada componente esta acompañado de sus estilos en sass)

- **pages**: Paginas o HOC los cuales seran renderizados a lo largo de la aplicación. (cada pagina esta acompañada de sus estilos en sass)

- **public**: carpeta para contener el favicon y los logos del manifest file.

- **reducers**: Reducers usados dentro de Redux.

- **routes**:  Contiene el HOC App junto sus estilos, en este archivo se establece todo el comportamiento de rutas usando React Router.

- **styles**: estilos generales, mixins, functions y placeholder de Sass.

### Configuracion de Redux:

- **store**: creado en el archivo index.js , incluye el middleware redux thunk para funciones asincronas.

- **actions**: ubicados dentro de la carpeta actions. Redux Thunk fue configurado para hacer los llamados a la API de la siguiente manera:

```javascript
//action creado para llamado asincrono
export const fetchGlobalData = () => {
  return (dispatch) => {
    dispatch(loadingData());
    fetch("https://restcountries.eu/rest/v2/all")
      .then((data) => data.json())
      .then((response) => {
        dispatch(setData(response));
        dispatch(loadingData());
      });
  };
};
```
- **reducers**: ubicado dentro de la carpeta de reducers, configurado por medio de una funcion que incluye un switch case.

### Configuracion de React Router:

La configuracion de rutas se encuentra en el archivo App.js que se establece dentro de la carpeta routes. los cuales hace uso de la funcion HashRouter, Switch y Route.
