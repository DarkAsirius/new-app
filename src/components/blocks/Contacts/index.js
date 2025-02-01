import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaInstagram, FaTelegram } from 'react-icons/fa';
import './Contacts.css'; // Импортируем стили

const Contacts = () => {
    return (
        <div className="contact-block">
            <h2 className="contact-title">Контакты</h2>
            <div className="contact-item">
                <FaMapMarkerAlt className="contact-icon ctn-1" />
                <div className="contact-info">
                    <h3>Адрес</h3>
                    <p>Большая Садовая 101, Ростов-на-Дону, Россия</p>
                </div>
            </div>
            <div className="contact-item">
                <FaPhone className="contact-icon" />
                <div className="contact-info">
                    <h3>Телефон</h3>
                    <p>+7 (989) 622-62-03</p>
                    <p>+7 (928) 779-69-71</p>
                </div>
            </div>
            <div className="contact-item">
                <FaInstagram className="contact-icon" />
                <div className="contact-info">
                    <h3>Instagram</h3>
                    <p>@chay_nazare</p>
                </div>
            </div>
            <div className="contact-item">
                <FaTelegram className="contact-icon" />
                <div className="contact-info">
                    <h3>Telegram</h3>
                    <p>@chay_nazare</p>
                </div>
            </div>
        </div>
    );
};

export default Contacts;