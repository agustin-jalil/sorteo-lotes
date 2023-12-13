import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faLinkedin, faTelegram, faWhatsapp, faXTwitter } from '@fortawesome/free-brands-svg-icons';

function CompartirRedes() {
  return (
    <>
        <div className="CompartirRedes-div-a-links">
          <p className="CompartirRedes-p">Compartir en redes sociales</p>
          <a href="your_link_here" className="CompartirRedes-link-a">
            <FontAwesomeIcon icon={faFacebookF} />
          </a>
          <a href="your_link_here" className="CompartirRedes-link-a">
            <FontAwesomeIcon icon={faXTwitter} />
          </a>
          <a href="your_link_here" className="CompartirRedes-link-a">
            <FontAwesomeIcon icon={faLinkedin} />
          </a>
          <a href="your_link_here" className="CompartirRedes-link-a">
            <FontAwesomeIcon icon={faWhatsapp} />
          </a>
          <a href="your_link_here" className="CompartirRedes-link-a">
            <FontAwesomeIcon icon={faTelegram} />
          </a>
        </div>
    </>
  );
}

export default CompartirRedes;
