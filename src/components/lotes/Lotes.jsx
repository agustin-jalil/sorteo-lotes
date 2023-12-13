import './Lotes.css';
import { Link } from 'react-router-dom';

function Lotes() {
  return (
    <>
        <main className='lote-main'>
            <div className="lote-outer-div">
                <h1 className="lote-main-heading"> Caracteristicas de Lotes</h1>
                <div className="lote-inner-div">
                    <label className="lote-form-label">Filtrar por Barrio</label>
                    <select className="lote-form-control">
                        <option className="lote-option-item">Valle Chico</option>
                        <option className="lote-option-item">Sumalao</option>
                        <option className="lote-option-item">Valle Chico</option>
                        <option className="lote-option-item">Sumalao</option>
                        <option className="lote-option-item">Valle Chico</option>
                        <option className="lote-option-item">Sumalao</option>
                        <option className="lote-option-item">Valle Chico</option>
                        <option className="lote-option-item">Sumalao</option>
                    </select>
                </div>
                <div className="lote-inner-div">
                    <label className="lote-form-label">Filtrar por Barrio</label>
                    <select className="lote-form-control">
                        <option className="lote-option-item">Valle Chico</option>
                        <option className="lote-option-item">Sumalao</option>
                        <option className="lote-option-item">Valle Chico</option>
                        <option className="lote-option-item">Sumalao</option>
                        <option className="lote-option-item">Valle Chico</option>
                        <option className="lote-option-item">Sumalao</option>
                        <option className="lote-option-item">Valle Chico</option>
                        <option className="lote-option-item">Sumalao</option>
                    </select>
                </div>
                <div className="lote-inner-div">
                    <label className="lote-form-label">Filtrar por Barrio</label>
                    <select className="lote-form-control">
                        <option className="lote-option-item">Valle Chico</option>
                        <option className="lote-option-item">Sumalao</option>
                        <option className="lote-option-item">Valle Chico</option>
                        <option className="lote-option-item">Sumalao</option>
                        <option className="lote-option-item">Valle Chico</option>
                        <option className="lote-option-item">Sumalao</option>
                        <option className="lote-option-item">Valle Chico</option>
                        <option className="lote-option-item">Sumalao</option>
                    </select>
                </div>
            </div>
            <div className="lote-card-container">
                <div className="lote-card">
                    <img className="lote-card-img" src="https://www.argentina.gob.ar/sites/default/files/adolfoalsinacarhue_web.jpg" alt="" />
                    <Link to="/LotesId" className="lote-card-link">

                        <h3 className="lote-card-h3">Buenos Aires - Benito Juárez - Barker (Procrear)</h3>
                        <strong className="lote-card-strong">Inscripcion cerrada</strong>
                    </Link>
                </div>
                <div className="lote-card">
                    <img className="lote-card-img" src="https://www.argentina.gob.ar/sites/default/files/bahiablancaweb.jpg" alt="" />
                    <Link to="/LotesId" className="lote-card-link">
                        <h3 className="lote-card-h3">Misiones - Posadas (Procrear)</h3>
                        <strong className="lote-card-strong">Inscripcion abierta</strong>
                    </Link>
                </div>
                <div className="lote-card">
                    <img className="lote-card-img" src="https://www.argentina.gob.ar/sites/default/files/berazateguiweb.jpg" alt="" />
                    <Link to="/LotesId" className="lote-card-link">

                        <h3 className="lote-card-h3">Catamarca - San Fernando del Valle (Procrear)</h3>
                        <strong className="lote-card-strong">Inscripcion cerrada</strong>
                    </Link>
                </div>
                <div className="lote-card">
                    <img className="lote-card-img" src="https://www.argentina.gob.ar/sites/default/files/adolfoalsinacarhue_web.jpg" alt="" />
                    <Link to="/LotesId" className="lote-card-link">

                        <h3 className="lote-card-h3">Buenos Aires - Benito Juárez - Barker (Procrear)</h3>
                        <strong className="lote-card-strong">Inscripcion cerrada</strong>
                    </Link>
                </div>
                <div className="lote-card">
                    <img className="lote-card-img" src="https://www.argentina.gob.ar/sites/default/files/bahiablancaweb.jpg" alt="" />
                    <Link to="/LotesId" className="lote-card-link">
                        <h3 className="lote-card-h3">Misiones - Posadas (Procrear)</h3>
                        <strong className="lote-card-strong">Inscripcion abierta</strong>
                    </Link>
                </div>
                <div className="lote-card">
                    <img className="lote-card-img" src="https://www.argentina.gob.ar/sites/default/files/berazateguiweb.jpg" alt="" />
                    <Link to="/LotesId" className="lote-card-link">

                        <h3 className="lote-card-h3">Catamarca - San Fernando del Valle (Procrear)</h3>
                        <strong className="lote-card-strong">Inscripcion cerrada</strong>
                    </Link>
                </div>
                <div className="lote-card">
                    <img className="lote-card-img" src="https://www.argentina.gob.ar/sites/default/files/adolfoalsinacarhue_web.jpg" alt="" />
                    <Link to="/LotesId" className="lote-card-link">

                        <h3 className="lote-card-h3">Buenos Aires - Benito Juárez - Barker (Procrear)</h3>
                        <strong className="lote-card-strong">Inscripcion cerrada</strong>
                    </Link>
                </div>
                <div className="lote-card">
                    <img className="lote-card-img" src="https://www.argentina.gob.ar/sites/default/files/bahiablancaweb.jpg" alt="" />
                    <Link to="/LotesId" className="lote-card-link">
                        <h3 className="lote-card-h3">Misiones - Posadas (Procrear)</h3>
                        <strong className="lote-card-strong">Inscripcion abierta</strong>
                    </Link>
                </div>
                <div className="lote-card">
                    <img className="lote-card-img" src="https://www.argentina.gob.ar/sites/default/files/berazateguiweb.jpg" alt="" />
                    <Link to="/LotesId" className="lote-card-link">

                        <h3 className="lote-card-h3">Catamarca - San Fernando del Valle (Procrear)</h3>
                        <strong className="lote-card-strong">Inscripcion cerrada</strong>
                    </Link>
                </div>
            </div>
        </main>
    </>

  );
}

export default Lotes;
