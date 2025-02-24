import React, { useEffect } from 'react';
import './YandexMap.css';
import Contacts from '../Contacts';

const YandexMap = ({ coordinates }) => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://api-maps.yandex.ru/2.1/?apikey=1855be48-48ad-4e92-9f25-53bb9df8c9a9&lang=ru_RU';
        script.onload = () => {
            window.ymaps.ready(() => {
                const map = new window.ymaps.Map('map', {
                    center: coordinates,
                    zoom: 14,
                });
    
                const placemark = new window.ymaps.Placemark(coordinates, {
                    balloonContent: 'Ваше назначение',
                });
    
                map.geoObjects.add(placemark);
            });
        };
        document.head.appendChild(script);
    
        return () => {
            document.head.removeChild(script);
        };
    }, [coordinates]);

    return (
        <div className="map-container">
            <div className="map-title-container">
                <h2 className="map-title" id="contact">Как добраться?</h2>
            </div>
            <div className="map-wrapper">
                <div id="map" className="map" />
                <Contacts />
            </div>
        </div>
    );
};

export default YandexMap;