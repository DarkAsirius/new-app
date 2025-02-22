import React from 'react';
import './Gallery.css';

const images = [
    '../../../1_hor.jpg', '../../../2_hor.jpg', '../../../3_hor.jpg', '../../../4_hor.jpg', '../../../5_hor.jpg',
    '../../../6_hor.jpg', '../../../7_hor.jpg', '../../../8_hor.jpg', '../../../9_hor.jpg', '../../../10_hor.jpg',
    '../../../11_hor.jpg', '../../../12_hor.jpg', '../../../13_hor.jpg', '../../../14_hor.jpg', '../../../15_hor.jpg'
];

const Gallery = () => {
    return (
        <div className="gallery">
            <div className="gallery-container" id="gallery">
                {images.map((image, index) => (
                    <div key={index} className="gallery-item">
                        <img src={image} alt={`gal ${index + 1}`} />
                    </div>
                ))}
            </div>
        </div>
    );
};

export default Gallery;