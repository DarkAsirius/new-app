import React, { useEffect, useState } from 'react';
import './YandexMap.css'; // Подключаем ваши стили

const YandexMap = ({ coordinates }) => {
    const [mapError, setMapError] = useState(false); // Состояние для ошибки загрузки карты

    useEffect(() => {
        const initMap = () => {
            if (typeof window.ymaps === 'undefined') {
                console.error('Yandex Maps API is not loaded.');
                setMapError(true); // Устанавливаем ошибку, если API не загрузился
                return;
            }

            window.ymaps.ready(() => {
                const mapContainer = document.getElementById('map');
                if (!mapContainer) {
                    console.error('Map container not found.');
                    setMapError(true);
                    return;
                }

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

        const loadScript = () => {
            const script = document.createElement('script');
            script.src = `https://api-maps.yandex.ru/2.1/?apikey=1855be48-48ad-4e92-9f25-53bb9df8c9a9&lang=ru_RU`;
            script.async = true; // Загружаем скрипт асинхронно
            script.onload = initMap; // Инициализация карты после загрузки API
            script.onerror = () => {
                console.error('Failed to load Yandex Maps API.');
                setMapError(true); // Устанавливаем ошибку, если API не загрузился
            };
            document.head.appendChild(script);
        };

        // Используем requestIdleCallback для отложенной загрузки
        if ('requestIdleCallback' in window) {
            window.requestIdleCallback(loadScript);
        } else {
            loadScript(); // Fallback для браузеров без поддержки requestIdleCallback
        }

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