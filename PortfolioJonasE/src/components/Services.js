import React from "react"
import Title from "./Title"
import services from "../constants/services"
import {ServicesWrapper} from "../elements/ServicesElement"

const Services = () => {
  return (
    <ServicesWrapper className="section bg-grey">
      <Title title="Tjänster"/>
      <div className="section-center services-center">
        {services.map((service)=>{
        const{id, icon, title, text} = service
          return <article key={id} className="service">
            {icon}
            <h4>{title}</h4>
            <div className="underline"></div>
            <p>{text}</p>
          </article>
        })}
      </div>
    </ServicesWrapper>
  )
}

export default Services


/* <section className="section bg-grey">
<Title title="services"/>
<div className="section-center services-center">
  {services.map((service)=>{
  const{id, icon, title, text} = service
    return <article key={id} className="service">
      {icon}
      <h4>{title}</h4>
      <div className="underline"></div>
      <p>{text}</p>
    </article>
  })}
</div>
</section> */