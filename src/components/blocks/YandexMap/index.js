import React, { useEffect, useState } from 'react';
import './YandexMap.css'; // Подключаем ваши стили
import Contacts from '../Contacts';

const YandexMap = ({ coordinates }) => {
    useEffect(() => {
        const apiKey = '1855be48-48ad-4e92-9f25-53bb9df8c9a9'; // Ваш API-ключ
        const scriptId = 'yandex-maps-script';

        // Проверяем, не загружен ли уже скрипт
        if (document.getElementById(scriptId)) {
            return;
        }

        // Создаем и добавляем скрипт для загрузки API Яндекс.Карт
        const script = document.createElement('script');
        script.id = scriptId;
        script.src = `https://api-maps.yandex.ru/2.1/?apikey=${apiKey}&lang=ru_RU`;
        script.async = true;

        // Обработчик успешной загрузки API
        script.onload = () => {
            const handleScroll = () => {
                const mapElement = document.getElementById('map');
                if (mapElement && window.scrollY + window.innerHeight > mapElement.offsetTop) {
                    // Загружаем карту
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
                        });
                    }

                    // Удаляем обработчик после загрузки карты
                    window.removeEventListener('scroll', handleScroll);
                }
            };

            // Добавляем обработчик скролла
            window.addEventListener('scroll', handleScroll);

            // Очистка при размонтировании компонента
            return () => {
                window.removeEventListener('scroll', handleScroll);
            };
        };

        // Обработчик ошибки загрузки API
        script.onerror = () => {
            console.error('Ошибка загрузки Yandex Maps API');
        };

        // Добавляем скрипт в документ
        document.head.appendChild(script);

        // Очистка при размонтировании компонента
        return () => {
            const scriptElement = document.getElementById(scriptId);
            if (scriptElement) {
                document.head.removeChild(scriptElement);
            }
        };
    }, [coordinates]);

    return (
        <div className="map-container">
            <div className="map-title-container">
                <h2 className="map-title" id="contact">Как добраться?</h2>
            </div>
            <div className="map-wrapper">
                <div id="map" className="map" /> {/* Контейнер для карты */}
                <Contacts />
            </div>
        </div>
    );
};

export default YandexMap;