import React from 'react'

function Course({ course }) {
    const { id, title, description, price, link, image } = course;
    return (
        <div className="course">
            <h4 className='course-title'>{title}</h4>
            <img src={image} width={450} height={250} />
            <p className='course-desc'>{description}</p>
            <h3 className='course-price'>{price} ₺</h3>
            <a className='course-link' href={link}>Projeyi Görmek İçin Tıkla</a>
        </div>
    )
}

export default Course