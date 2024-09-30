import React from 'react';
import { images }from '../constant/const';

export default function Adobe() {
    return (
        <div className='adobeimages'>
            {images.map((image, index) => (
               <div className='adobeimg'><img className='ImgAdobe' key={index} src={image.src} alt={image.alt} /></div> 
            ))}
        </div>
    );
}
