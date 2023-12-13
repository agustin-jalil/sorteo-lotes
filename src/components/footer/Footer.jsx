import './Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faInstagram, faXTwitter } from '@fortawesome/free-brands-svg-icons';

function FooterContent() {
    return (
      <footer className="footer">
        <div className="footer-content">
          <section className="footer-section">
              <a href="https://mail.google.com/mail/?view=cm&fs=1&tf=1&to=municipalidad@gmail.com" target="_blank"className="email-link" rel="noreferrer">municipalidad@gmail.com</a>
              <a href="https://www.facebook.com/cajadecreditosfvc/" target="_blank" className="social-link" rel="noreferrer"><FontAwesomeIcon icon={faFacebookF} /></a>
              <a href="https://www.instagram.com/" target="_blank" className="social-link" rel="noreferrer"><FontAwesomeIcon icon={faInstagram} /></a>
              <a href="https://twitter.com/" target="_blank" className="social-link" rel="noreferrer"><FontAwesomeIcon icon={faXTwitter} /></a>
          </section>
        </div>
      </footer>
    );
}

export default FooterContent;
