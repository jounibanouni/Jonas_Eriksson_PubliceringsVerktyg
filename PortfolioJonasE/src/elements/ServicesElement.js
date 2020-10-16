import styled from "styled-components"

export const ServicesWrapper = styled.section`
.service {
    background: var(--clr-white);
    padding: 3rem 1.5rem;
    margin-bottom: 2rem;
    border-radius: var(--radius);
    text-align: center;
    -webkit-transition: var(--transition);
    transition: var(--transition);
}

.service-icon {
    font-size: 4rem;
    margin-bottom: 1.5rem;
}

.service .underline {
    width: 3rem;
    height: 0.12rem;
    -webkit-transition: var(--transition);
    transition: var(--transition);
}

.service p {
    -webkit-transition: var(--transition);
    transition: var(--transition);
}

.service:hover {
    background: var(--clr-primary-5);
    color: var(--clr-primary-9);
}

.service:hover p {
    color: var(--clr-primary-9);
}

.service:hover .underline {
    background: var(--clr-primary-9);
}

@media screen and (min-width: 676px) {
    .services-center {
        display: grid;
        grid-template-columns: 1fr 1fr;
        -webkit-column-gap: 2rem;
        -moz-column-gap: 2rem;
        column-gap: 2rem;
    }
}

@media screen and (min-width: 992px) {
    .services-center {
        grid-template-columns: 1fr 1fr 1fr;
    }
}

`



// const Services = () => {
//     return (
//       <section className="section bg-grey">
//         <Title title="services"/>
//         <div className="section-center services-center">
//           {services.map((service)=>{
//           const{id, icon, title, text} = service
//             return <article key={id} className="service">
//               {icon}
//               <h4>{title}</h4>
//               <div className="underline"></div>
//               <p>{text}</p>
//             </article>
//           })}
//         </div>
//       </section>
//     )
//   }