import React from 'react';
import "./App.css";
import { Route, Routes } from 'react-router-dom';
import HomePage from './HomePage.jsx';
import AllPosts from './AllPosts/AllPosts.jsx';

// Crear un link en el componente App que lleve a una nueva ruta '/posts' 
// para la cual se mostrará un componente de React donde se haga una llamada al 
// endpoint https://jsonplaceholder.typicode.com/posts y se muestre una lista con 
// la información de cada post. Darle algún estilo CSS al componente.

// Este nuevo componente deberá hacerse pensando en su posible reutilización en caso de
// que se quisiera usar también para nuevas secciones dentro de la aplicación.

function App() {
  return (
    <div className='App'>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/posts' element={<AllPosts />} />
      </Routes>
    </div>
  );
}
export default App;

// Log to console
console.log('Hello console')
