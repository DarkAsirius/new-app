import React from 'react';
import './Services.css'; // Импортируем CSS файл для стилей

const servicesData = [
    {
        title: 'Чай в стакане',
        description: 'Можете заварить чай и взять его с собой',
        icon: <img src="../../../ServicesIcons/чай стакан.png"></img>
    },
    {
        title: 'Чай с собой',
        description: 'Можете взять чай на вынос и распить его дома',
        icon: <img src="../../../ServicesIcons/чайнавынос.png"></img>
    },
    {
        title: 'Пин Ча',
        description: 'Распитие чая проливами с нашей посудой',
        icon: <img src="../../../ServicesIcons/пинча.png"></img>
    },
    {
        title: 'Церемония',
        description: 'Проведение частных и выездных чайных церемоний',
        icon: <img src="../../../ServicesIcons/черемонии.png"></img>
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