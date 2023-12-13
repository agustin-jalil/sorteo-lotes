import './LotesId.css';
import CompartirRedes from '../../CompartirRedes';
import Button from '../../Button';
import Atag from '../../Atag';
import LotesIdMapa from './LoteIdMapa';
import GallerySlider from './GallerySlider';


function LotesId() {
  return (
    <>
      <main>
        <div className="lotesid-div-titulo">
          <h1 className="lotesid-h1">Buenos Aires <br /> Benito Juárez - Barker (Procrear)</h1>
          <strong className="lotesid-strong">Inscripcion cerrada</strong>
          <p className="lotesid-p-alt">Compartir en redes sociales</p>
        </div>
        <CompartirRedes/>
        <div className="lotesid-info-container">
          <div className="lotesid-location">
            <h2 className="lotesid-heading">Ubicación:</h2>
            <p className="lotesid-paragraph">C. Las Tacuaritas, Las Acacias, C. Los Tucanes, Las Begonias.</p>
          </div>
          <div className="lotesid-services">
            <h2 className="lotesid-heading">Servicios Disponibles:</h2>
            <p className="lotesid-paragraph">Agua, Cloaca, Electricidad, Alumbrado, Cordón/Cuneta.</p>
          </div>
          <div className="lotesid-eligibility">
            <h2 className="lotesid-heading">¿Quiénes pueden inscribirse?</h2>
            <p className="lotesid-paragraph">Personas con código postal: 8370</p>
          </div>
        </div>

        <div className="lotesid-lote-card">
          <div className="lotesid-lote-card-container border-ganador">
              <GallerySlider />
          </div>
          <div className="lotesid-lote-card-container border-ganador">
              <LotesIdMapa />
          </div>
        </div>
        
        <div className="lotesid-Button">
          <div className="LotesId-Numero">
            <span className="LotesId-Numero-span">292 m2</span>
            <p className="LotesId-Numero-p">Superficie máxima del Lote</p>
          </div>
          <div className="LotesId-Numero">
            <span className="LotesId-Numero-span">292 m2</span>
            <p className="LotesId-Numero-p">Superficie máxima del Lote</p>
          </div>
        </div>
        <div className="lotesid-Button">
          <Atag
            boton="Aplicar"
            link="Formulario"
            className="boton-terrenos boton-default"
          />
          <Atag
            boton="Volver"
            link="/"
            className="boton-terrenos boton-default"
          />
        </div>
      </main>
    </>
  );
}


export default LotesId;
