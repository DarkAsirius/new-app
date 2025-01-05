import React from 'react';
import { FaCoffee, FaLeaf} from 'react-icons/fa';
import { IconTeapot } from '@tabler/icons-react';
import TeaCeremonyMasterIcon from './TeaMaster.js';
import './Services.css'; // Импортируем CSS файл для стилей

const servicesData = [
    {
        title: 'Чай в стакане',
        description: 'Можете заварить чай и взять его с собой',
        icon: <FaCoffee size={60} />
    },
    {
        title: 'Чай с собой',
        description: 'Можете взять чай на вынос и распить его дома',
        icon: <FaLeaf size={60} color="#4CAF50" />
    },
    {
        title: 'Пин Ча',
        description: 'Распитие чая проливами с нашей посудой',
        icon: <TeaCeremonyMasterIcon />
    },
    {
        title: 'Церемония',
        description: 'Проведение частных и выездных чайных церемоний',
        icon:  <IconTeapot size={60} color="#D2691E" />
    }
];

const Services = () => {
    return (
        <div className="services-container">
            <h2 className="services-title">Наши Услуги</h2>
            <div className="services-background">
                <div className="services-grid">
                    {servicesData.map((service, index) => (
                        <div className="service-card" key={service.id} style={{ order: index }}>
                            <div className="service-icon">{service.icon}</div>
                            <h3 className="service-title">{service.title}</h3>
                            <p className="service-description">{service.description}</p>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Services;