import React from 'react';
import { FaPhone, FaMapMarkerAlt, FaInstagram, FaTelegram } from 'react-icons/fa';
import './Contacts.css';

const Contacts = () => {
    return (
        <div className="contact-block" name="Contacts">
            <h2 className="contact-title" name="Contacts-title">Контакты</h2>
            <div className="contact-item" name="Contacts-item">
                <FaMapMarkerAlt className="contact-icon ctn-1" name="Contacts-icon" />
                <div className="contact-info" name="Contacts-info">
                    <h3>Адрес</h3>
                    <p>Большая Садовая 101, Ростов-на-Дону, Россия</p>
                </div>
            </div>
            <div className="contact-item" name="Contacts-item">
                <FaPhone className="contact-icon" name="Contacts-icon"/>
                <div className="contact-info" name="Contacts-info">
                    <h3>Телефон</h3>
                    <p>+7 (989) 622-62-03</p>
                    <p>+7 (928) 779-69-71</p>
                </div>
            </div>
            <div className="contact-item" name="Contacts-item">
                <FaInstagram className="contact-icon" name="Contacts-icon"/>
                <div className="contact-info" name="Contacts-info">
                    <h3>Instagram</h3>
                    <p>@chay_nazare</p>
                </div>
            </div>
            <div className="contact-item" name="Contacts-item">
                <FaTelegram className="contact-icon" name="Contacts-icon"/>
                <div className="contact-info" name="Contacts-info">
                    <h3>Telegram</h3>
                    <p>@chay_nazare</p>
                </div>
            </div>
        </div>
    );
};

export default Contacts;