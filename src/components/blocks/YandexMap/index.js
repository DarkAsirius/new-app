import React, { useEffect, useState } from 'react';
import './YandexMap.css'; // Подключаем ваши стили

const YandexMap = ({ coordinates }) => {
    const [mapError, setMapError] = useState(false); // Состояние для ошибки загрузки карты

    useEffect(() => {
        const initMap = () => {
            if (typeof window.ymaps === 'undefined') {
                console.error('Yandex Maps API is not loaded.');
                setMapError(true);
                return;
            }

            console.log('Yandex Maps API loaded successfully.');

            window.ymaps.ready(() => {
                const mapContainer = document.getElementById('map');
                if (!mapContainer) {
                    console.error('Map container not found.');
                    setMapError(true);
                    return;
                }

                console.log('Map container found. Initializing map...');

                const map = new window.ymaps.Map('map', {
                    center: coordinates,
                    zoom: 14,
                });

                const placemark = new window.ymaps.Placemark(coordinates, {
                    balloonContent: 'Ваше назначение',
                });

                map.geoObjects.add(placemark);

                console.log('Map initialized successfully.');
            });
        };

        const loadScript = () => {
            const script = document.createElement('script');
            script.src = `https://api-maps.yandex.ru/2.1/?apikey=1855be48-48ad-4e92-9f25-53bb9df8c9a9&lang=ru_RU`;
            script.async = true;
            script.onload = initMap;
            script.onerror = () => {
                console.error('Failed to load Yandex Maps API.');
                setMapError(true);
            };
            document.head.appendChild(script);

            console.log('Script element created and appended.');
        };

        if ('requestIdleCallback' in window) {
            window.requestIdleCallback(loadScript);
        } else {
            loadScript();
        }

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
                {mapError ? (
                    <p className="map-error">Не удалось загрузить карту. Пожалуйста, проверьте подключение к интернету.</p>
                ) : (
                    <div id="map" className="map" />
                )}
            </div>
        </div>
    );
};

export default YandexMap;