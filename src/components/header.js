import { useRef, useState } from "react";

function Header() {
  const titleRef = useRef();
  const descriptionRef = useRef();
  const importantRef = useRef();

  const [mensaje, setMensaje] = useState('');
  const [notas, setNotas] = useState([]);


  const submit = (e) => {
    console.log('Boton Submit')
    e.preventDefault();

    const title = titleRef.current.value.trim();
    const description = descriptionRef.current.value.trim();
    const important = importantRef.current.checked;

    if (!title || !description) {
      setMensaje('Campos Vacios');
      setTimeout(
        () => setMensaje(''), 2000);
      return;
    }

    const nuevaNota = {title, description, important};
    setNotas((prevNotas) => [...prevNotas, nuevaNota]);
    alert('Post it guardado');

    titleRef.current.value = '';
    description.current.value= '';
    important.current.checked = false; 
    };

    const eliminarNota = (title) => {
      setNotas((prevNotas) => prevNotas.filter(nota => nota.title !== title));
      alert('Nota eliminada correctamente');
    };
    
  return (
    <div>
      <h1>Post It Simulator!</h1>
      <form onSubmit={submit}>
        <input type="text" placeholder="Titulo" className="form-text" ref={titleRef}/>
        <input type="text" placeholder="Descripcion" className="form-text" ref={descriptionRef}/>
        <input type="checkbox" className="form-check-input" ref={importantRef}/>
        <label className="form-check-label">Important</label>
        <button type="submit" className="btn btn-success">Agregar</button>
      </form>
      {mensaje && <div role="alert">{mensaje}</div>}
    </div>
  );
};

export default Header;
