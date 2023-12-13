import CompartirRedes from '../../CompartirRedes';
import './Home.css';
import HomeIconLink from './HomeIconLink';
import { HomeInfo, HomeInfoCorto } from './HomeInfo';

function Home() {
  return (
    <main>
        <div className='home-foto-container'>
            <h1 className='home-h1'>Sorteo de Lotes</h1>
            <p className='home-p'>Aplica para tener tu propio lote</p>
        </div>
        <CompartirRedes/>
        <div className='HomeCards-container'>
            <HomeIconLink
              logo='habitat-casa-propia.svg'
              titulo='Coeficiente'
              parrafo='Casa Propia'
              boton='Inscribite'
              link='Lotes'
            />
            <HomeIconLink
              logo='marcador-ubicacion.svg'
              titulo='Localización'
              parrafo='Se otorgarán en todo el país'
              boton='Ver'
              link='/Localizacion'
            />
            <HomeIconLink
              logo='llave.svg'
              titulo='$3 Millones'
              parrafo='Para que la gente pueda saber los proximos pagos y si gano o adjudico aparrte del mail'
              boton='Pagos'
              link='Lotes'
            />
            <HomeIconLink
              logo='calendario.svg'
              titulo='Plazo'
              parrafo='Calendario para proximos sorteos y cosas'
              boton='Chequear'
              link='/Admin'
            />
        </div>
        <div className="HomeCards-container">
          <HomeInfoCorto
            titulo="Línea Asociaciones Sindicales, Mutuales y Cooperativas"
            parrafo="Para la generación de suelo urbano y viviendas en terrenos de asociaciones."
            link="https://example.com/corto"
          />
          <HomeInfoCorto
            titulo="Línea Asociaciones Sindicales, Mutuales y Cooperativas"
            parrafo="Para la generación de suelo urbano y viviendas en terrenos de asociaciones."
            link="https://example.com/corto"
          />
        </div>
        <div className="HomeCards-container">
          <HomeInfo
            titulo="Campaña evitá estafas"
            parrafo="Los únicos formularios para inscribirte a las líneas Procrear están disponibles en nuestro sitio web. Solo se habilitan cuando hay inscripciones abiertas."
            logo="calendario.svg"
            link="https://firstexample.com"
          />
          <HomeInfo
            titulo="Video instructivo inscripciones"
            parrafo="Desde nuestro Ministerio realizamos una serie de videos para orientar al ciudadano en los procesos de inscripciones."
            logo="calendario.svg"
            link="https://secondexample.com"
          />

          <HomeInfo
            titulo="Inscripción paso a paso "
            parrafo="Video orientativo para completar el formulario de inscripción (el formulario real puede tener algunas variaciones)."
            logo="calendario.svg"
            link="https://thirdexample.com"
          />

        </div>
    </main>
  // mejor forma de generar una fuente responsive para todas las pantallas de todos los modelos de computadoras en css
  );
}

export default Home;
