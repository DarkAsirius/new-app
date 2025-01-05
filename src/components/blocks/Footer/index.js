import React from 'react';
import { FaInstagram, FaFacebook, FaTelegram } from 'react-icons/fa'; // Импортируем иконки социальных сетей
import './Footer.css'; // Импортируем стили

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-links">
                    <h3>Контакты</h3>
                    <p>Телефон: +7 (123) 456-78-90 <br/> +7 (123) 456-78-90 </p>
                </div>
                <div className="footer-socials">
                    <h3>Социальные сети</h3>
                    <div className="social-icons">
                        <a href="https://www.instagram.com/chay_nazare?igsh=dzF2OXZrNXd5cGM2" target="_blank" rel="noopener noreferrer">
                            <FaInstagram size={30} />
                        </a>
                        <a href="https://t.me/nikollayka" target="_blank" rel="noopener noreferrer">
                            <FaTelegram size={30} />
                        </a>
                    </div>
                </div>
            </div>
            <div className="footer-bottom">
                <p>&copy; {new Date().getFullYear()} Ваш Сайт. Все права защищены.</p>
            </div>
        </footer>
    );
};

export default Footer;