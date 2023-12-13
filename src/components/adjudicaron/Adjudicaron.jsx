import Archivos from '../Archivos/Archivos';
import ListaHeader from '../lista/ListaHeader';
import './Adjudicaron.css';

const Adjudicaron = () => {

  return (
    <div className="Adjudicaron-container">
        <ListaHeader
          titulo={'Adjudicaron'}
          btnUno={'Exportar'}
        />
        <Archivos
          headerDos='Nombre'
          headerTres='Exportar'
        />
        
    </div>  
  );
};

export default Adjudicaron;
