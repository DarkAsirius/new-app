import React, { useEffect } from 'react';
import './YandexMap.css'; // Импортируем стили
import Contacts from '../Contacts'; // Импортируем блок контактов

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

                // Очистка карты при размонтировании компонента
                return () => {
                    map.destroy(); // Убедитесь, что карта уничтожается
                };
            });
        }
    }, [coordinates]);

    return (
        <div className="map-container">
            <div className="map-title-container">
                <h2 className="map-title" id="map1">Как добраться?</h2>
            </div>
            <div className="map-wrapper">
                <div id="map" className="map" /> {/* Убедитесь, что ID совпадает */}
                <div className="contacts">
                    <Contacts /> {/* Блок контактов справа от карты */}
                </div>
            </div>
        </div>
    );
};

export default YandexMap;