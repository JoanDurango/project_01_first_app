import React from 'react'

const ChildComponent = ({message, onRespond }) => {

    const handleClick = () => {
        onRespond("¡Hola, respuesta del Hijo!");
    }


  return (
    <div className='child'>
        <h3>ChildComponent</h3>
       <p>Hola soy el hijo!</p>
       <p>{message}</p>
       <button onClick={handleClick}>Enviar respuesta al Padre</button>
    </div>
  )
}

export default ChildComponent
