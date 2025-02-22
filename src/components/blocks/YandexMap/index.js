import React, { useEffect } from 'react';
import './YandexMap.css';
import Contacts from '../Contacts';

const YandexMap = ({ coordinates }) => {
    useEffect(() => {
        const ymaps = window.ymaps;

        if (ymaps) {
            ymaps.ready(() => {
                const map = new ymaps.Map('map', {
                    center: coordinates,
                    zoom: 14,
                });

                const placemark = new ymaps.Placemark(coordinates, {
                    balloonContent: 'Ваше назначение',
                });

                map.geoObjects.add(placemark);

                return () => {
                    map.destroy();
                };
            });
        }
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