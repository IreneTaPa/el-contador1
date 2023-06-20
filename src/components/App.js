import '../styles/App.scss';
import { useState } from 'react';

function App() {
  //establecemos una constatnte llamada count y una funcion llamada setCount y le decimos que de inicio su valor es 0
  const [count, setCount] = useState(0);
  //creamos la función increase que cada vez que apretemos el botón sumará uno a la constante llamada count
  const increase = () => {
    setCount(count + 1);
  };
  const decrease = () => {
    setCount(count - 1);
  };
  const reset = () => {
    setCount(0);
  };
  //dentro del return modificamos el HTML, ponemos la variable count, se se irá modificando. Y en el botón llamamos a la función increase para que cada vez que apretamos el botón se sume un punto
  return (
    <>
      <p>
        Contador: <strong>{count}</strong>
      </p>
      <button onClick={increase}>Incrementa</button>
      <button onClick={decrease}>Reducir</button>
      <button onClick={reset}>RESET</button>
    </>
  );
}

export default App;
