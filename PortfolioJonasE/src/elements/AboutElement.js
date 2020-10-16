import styled from "styled-components"

export const WrapperAbout = styled.section`

    padding: 7rem 0;

.about-img {
    margin-bottom: 2rem;
    height: 25rem;
}

.about-text .section-title {
    margin-bottom: 2rem;
    text-align: left;
}

.about-text .underline {
    margin-left: 0;
    margin-right: 0;
}

.about-text p {
    line-height: 2;
}

.stack-container {
    width: 30rem;
    display: grid;
    grid-template-columns: 1fr 1fr 1fr;
    row-gap: 0.5rem;
}

.stack-container span {
    text-transform: uppercase;
    display: flex;
    align-items: center;
    letter-spacing: 1px;
    color: var(--clr-grey-4);
}

.stack-icon {
    color: var(--clr-primary-5);
    margin-right: 0.25rem;
    font-size: 1rem;
}

@media screen and (min-width: 992px) {
    .about-center {
        display: grid;
        grid-template-columns: repeat(12, 1fr);
        align-items: center;
        column-gap: 4rem;
    }
    .about-img {
        grid-column: 1 / span 5;
        margin-bottom: 0;
    }
    .about-text {
        grid-column: 6 / -1;
    }
}
`

// return (
//     <Layout>
//       <section className="about-page">
//         <div className="section-center about-center">
//           <Image fluid={image.childImageSharp.fluid} className="about-img" />
//           <article className="about-text">
//             <Title title={title} />
          
//           <p>{info}</p>
//           <div className="about-stack">
//             {stack.map(item => {
//               return <span key={item.id}>{item.title}</span>
//             })}
//           </div>
//           </article>
//         </div>
//       </section>
//     </Layout>
//   )
// }