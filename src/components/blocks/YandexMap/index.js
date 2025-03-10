import React, { useEffect, useState } from 'react';
import './YandexMap.css'; // Подключаем ваши стили
import Contacts from '../Contacts';

const YandexMap = ({ coordinates }) => {
    const [mapError, setMapError] = useState(false); // Состояние для ошибки загрузки карты
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 480); // Состояние для определения мобильного устройства

    // Функция для обновления состояния isMobile при изменении размера окна
    const updateIsMobile = () => {
        setIsMobile(window.innerWidth <= 480);
    };

    useEffect(() => {
        // Добавляем обработчик изменения размера окна
        window.addEventListener('resize', updateIsMobile);

        // Убираем обработчик при размонтировании компонента
        return () => {
            window.removeEventListener('resize', updateIsMobile);
        };
    }, []);

    useEffect(() => {
        const initMap = () => {
            if (typeof window.ymaps === 'undefined') {
                console.error('Yandex Maps API is not loaded.');
                setMapError(true); // Устанавливаем ошибку, если API не загружен
                return;
            }

            console.log('Yandex Maps API loaded successfully.');

            window.ymaps.ready(() => {
                const mapContainer = document.getElementById('map');
                if (!mapContainer) {
                    console.error('Map container not found.');
                    setMapError(true); // Устанавливаем ошибку, если контейнер карты не найден
                    return;
                }

                console.log('Map container found. Initializing map...');

                try {
                    const map = new window.ymaps.Map('map', {
                        center: coordinates,
                        zoom: 14,
                    });

                    const placemark = new window.ymaps.Placemark(coordinates, {
                        balloonContent: 'Ваше назначение',
                    });

                    map.geoObjects.add(placemark);

                    console.log('Map initialized successfully.');
                } catch (error) {
                    console.error('Error initializing map:', error);
                    setMapError(true); // Устанавливаем ошибку, если что-то пошло не так
                }
            });
        };

        const loadScript = () => {
            const script = document.createElement('script');
            script.src = `https://api-maps.yandex.ru/2.1/?apikey=1855be48-48ad-4e92-9f25-53bb9df8c9a9&lang=ru_RU`;
            script.async = true;
            script.onload = initMap;
            script.onerror = () => {
                console.error('Failed to load Yandex Maps API.');
                setMapError(true); // Устанавливаем ошибку, если скрипт не загрузился
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
                {mapError || isMobile ? ( // Если есть ошибка или это мобильное устройство
                    <div className="map-image">
                        <img src="/map1.png" alt="Карта" /> {/* Путь к изображению */}
                    </div>
                ) : (
                    <div id="map" className="map" />
                )}
                <Contacts />
            </div>
        </div>
    );
};

export default YandexMap;