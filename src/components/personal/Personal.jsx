import Archivos from '../Archivos/Archivos';
import Lista from '../lista/Lista';
import ListaHeader from '../lista/ListaHeader';

const Personal = () => {

  return (
      <>
        <ListaHeader
          titulo={'Archivos'}
          btnUno={'Agregar'}
          btnDos={'Eliminar'}
          btnOpcional={'si'}
        />
        <Archivos
          headerUno={'Pdfs'}
          headerDos={'Nombre'}
          headerTres={''}
        />
      </>
  );
};

export default Personal;
