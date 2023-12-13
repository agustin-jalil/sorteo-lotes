import PropTypes from 'prop-types';
import './Archivos.css'
import Button from '../../Button';
// Separate function to render the HomeIcon with an <a> tag
function Archivos({ headerUno, headerDos, headerTres }) {
  return (
    <div className="archivos-container">
        <table className="archivos-table-container">
            <thead className="archivos-table-head">
                <tr>
                    <th className="archivos-table-header">{headerUno}</th>
                    <th className="archivos-table-header">{headerDos}</th>
                    <th className="archivos-table-header">{headerTres}</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td className="archivos-table-data-uno">
                        <img src="pdf.svg" 
                            className="archivos-imagen"
                        />
                    </td>
                    <td className="archivos-table-data-dos">Contrato de pagodadadadsadsadsaaaasadsda</td>
                    <td className="archivos-table-data-tres">
                        <button className='table-button boton-terrenos'><img src="descarga.svg" /></button>
                    </td>
                </tr>
                <tr>
                    <td className="archivos-table-data-uno">
                        <img src="excel.svg" 
                            className="archivos-imagen"
                        />
                    </td>
                    <td className="archivos-table-data-dos">Contrato de pagodadadadsadsadsaaaasadsda</td>
                    <td className="archivos-table-data-tres">
                        <button className='table-button boton-terrenos'>Descargar</button>
                    </td>
                </tr>
            </tbody>
        </table>
    </div>
  );
}

Archivos.propTypes = {
    headerUno: PropTypes.string.isRequired,
    headerDos: PropTypes.string.isRequired,
    headerTres: PropTypes.string.isRequired,

};

export default Archivos;
