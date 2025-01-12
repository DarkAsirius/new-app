import React from 'react';
import './Gallery.css'; // Импортируем CSS файл для стилей

const images = [
    '../../../1_hor.jpg', '../../../2_hor.jpg', '../../../3_hor.jpg', '../../../4_hor.jpg', '../../../5_hor.jpg',
    '../../../6_hor.jpg', '../../../7_hor.jpg', '../../../8_hor.jpg', '../../../9_hor.jpg', '../../../10_hor.jpg',
    '../../../11_hor.jpg', '../../../12_hor.jpg', '../../../13_hor.jpg', '../../../14_hor.jpg', '../../../15_hor.jpg'
];

const Gallery = () => {
    return (
        <div className="gallery-container" id="gallery">
            <div className="gallery-row row-1">
                <div className="gallery-item item-1"><img src={images[0]} alt="gal 1" /></div>
                <div className="gallery-item item-2"><img src={images[1]} alt="gal 2" /></div>
            </div>
            <div className="gallery-row row-2">
                <div className="gallery-item item-3"><img src={images[2]} alt="gal 3" /></div>
                <div className="gallery-item item-4"><img src={images[3]} alt="gal 4" /></div>
            </div>
            <div className="gallery-row row-3">
                <div className="gallery-item item-5"><img src={images[4]} alt="gal 5" /></div>
                <div className="gallery-item item-6"><img src={images[5]} alt="gal 6" /></div>
            </div>
            <div className="gallery-row row-4">
                <div className="gallery-item item-8"><img src={images[7]} alt="gal 7" /></div>
                <div className="gallery-item item-9"><img src={images[6]} alt="gal 8" /></div>
            </div>
        </div>
    );
};

export default Gallery;