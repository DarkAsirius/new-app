import React, { useEffect } from 'react';
import './YandexMap.css'; // Подключаем ваши стили
import Contacts from '../Contacts';

const YandexMap = ({ coordinates }) => {
    useEffect(() => {
        const initMap = () => {
            if (typeof window.ymaps === 'undefined') {
                console.error('Yandex Maps API is not loaded.');
                return;
            }

            window.ymaps.ready(() => {
                const map = new window.ymaps.Map('map', {
                    center: coordinates, // Центр карты
                    zoom: 14, // Масштаб
                });

                // Создаем метку
                const placemark = new window.ymaps.Placemark(coordinates, {
                    balloonContent: 'Ваше назначение', // Текст в балуне
                });

                // Добавляем метку на карту
                map.geoObjects.add(placemark);
            });
        };

        // Загружаем API Яндекс Карт
        const script = document.createElement('script');
        script.src = `https://api-maps.yandex.ru/2.1/?apikey=1855be48-48ad-4e92-9f25-53bb9df8c9a9&lang=ru_RU`;
        script.onload = initMap; // Инициализация карты после загрузки API
        document.head.appendChild(script);

        // Очистка при размонтировании компонента
        return () => {
            const existingScript = document.head.querySelector('script[src*="api-maps.yandex.ru"]');
            if (existingScript) {
                document.head.removeChild(existingScript);
            }
        };
    }, [coordinates]);

    return (
        <div className="map-container">
            <div className="map-title-container">
                <h2 className="map-title" id="contact">Как добраться?</h2>
            </div>
            <div className="map-wrapper">
                <div id="map" className="map" />
                <Contacts/>
            </div>
        </div>
    );
};

export default YandexMap;