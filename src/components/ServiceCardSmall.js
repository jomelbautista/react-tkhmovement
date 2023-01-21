import React from 'react'

const ServiceCardSmall = ({ service }) => {
  return (
    <article className="service small">
      <h2 className="title">{service.title}</h2>
      <small className="text-brand">{service.subtitle}</small>
      <p>{service.description_1}</p>
      <p>{service.description_2}</p>
      <a href={service.link} className="custom-link" target="_blank" rel="noopener noreferrer"> 
        Schedule<span>&rarr;</span>
      </a>
    </article>
  )
}

export default ServiceCardSmall