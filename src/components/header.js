import React, { useState, useCallback } from 'react';
import Main from './main';
import '../index.css'; // Ajusta la ruta según la ubicación del archivo CSS

function Header() {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [important, setImportant] = useState(false);
  const [mensaje, setMensaje] = useState('');
  const [notas, setNotas] = useState([]);

  const handleSubmit = useCallback((e) => {
    e.preventDefault();

    if (title.trim() === '' || description.trim() === '') {
      setMensaje('Campos vacíos');

      setTimeout(() => {
        setMensaje('');
      }, 3000);
      return;
    }

    const nuevaNota = { title, description, important };

    setNotas((prevNotas) => [...prevNotas, nuevaNota]);
    setTitle('');
    setDescription('');
    setImportant(false);
  }, [title, description, important]);

  const handleEliminarNota = useCallback((title) => {
    setNotas((prevNotas) => prevNotas.filter((nota) => nota.title !== title));
  }, []);

  return (
    <div>
      <h1>Post It Simulator!</h1>
      <form onSubmit={handleSubmit} className='header'>
        <input type="text" placeholder="Título" className="form-text" value={title} onChange={(e) => setTitle(e.target.value)}/>
        <input type="text" placeholder="Descripción" className="form-text" value={description} onChange={(e) => setDescription(e.target.value)}/>
        <input type="checkbox" className="form-check-input" checked={important} onChange={(e) => setImportant(e.target.checked)}/>
        <label className="form-check-label">Important</label>
        <button type="submit" className="btn btn-success">Agregar</button>
      </form>
      <div role="alert" hidden={!mensaje}>
        {mensaje}
      </div>
      <div>
        {notas.map((nota, indice) => (
          <Main nota={nota} key={indice} EliminarNota={handleEliminarNota} />
        ))}
      </div>
    </div>
  );
}

export default Header;

