import './Footer.css';
import { FaFacebookF, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export default function Footer() {
    let year = new Date().getFullYear();
    return (
        <footer className="footer">
            <p className='copyright'>
                Copyright &copy; {year} Noor Power Service. Tous droits réservés.
            </p>
            <div className='footer-links'>
                <p className='followus'>Suivez-nous sur :</p>
                <ul className="social-links">
                    <li>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                            <FaFacebookF size={24} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                            <FaLinkedinIn size={24} />
                        </a>
                    </li>
                    <li>
                        <a href="https://www.instagram.com/noor.powerservice?utm_source=ig_web_button_share_sheet&igsh=a3NibDMycmc0dXNq" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                            <FaInstagram size={24} />
                        </a>
                    </li>
                </ul>
            </div>
        </footer>
    );
}
