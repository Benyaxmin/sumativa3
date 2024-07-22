import React from 'react';
import '../index.css';

function Main({nota, eliminarNota}) {
    const { title, description, important } = nota;
    console.log(nota);
    return (
        <main className='flex'>
            <div className={important ? 'nota importante' : 'nota'}>
                <div className='flex'>
                    <h2>{title}</h2>
                    <button onClick={() => eliminarNota(title)} className="btn btn-danger">X</button>
                </div>
                <p>{description}</p>
            </div>
        </main>
    )
}

export default Main;
