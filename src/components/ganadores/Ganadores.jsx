import Lista from '../lista/Lista';
import ListaHeader from '../lista/ListaHeader';

const Ganadores = () => {

  return (
    <>
        <div className="Ganadores-container">
            <ListaHeader
              titulo={'Ganadores'}
              btnUno={'Sortear'}
              btnDos={'Eliminar'}
            />
            <Lista/>
        </div>  
    </>
  );
};

export default Ganadores;
