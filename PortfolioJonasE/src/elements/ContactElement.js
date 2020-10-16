import styled from "styled-components"

export const ContactWrapper = styled.section`

    display: grid;
    place-items: center;
    padding: 5rem 0;
    background: var(--clr-grey-10);
    min-height: calc(100vh - 5rem - 9rem);
`

export const ContactForm = styled.article`
    background: var(--clr-white);
    border-radius: var(--radius);
    text-align: center;
    box-shadow: var(--light-shadow);
    transition: var(--transition);
    width: 90vw;
    max-width: 35rem;

    &:hover{
        box-shadow: var(--dark-shadow);
    }
    h3{
        padding-top: 1.25rem;
    color: var(--clr-grey-5);
    }

    .form-group {
    padding: 1rem 1.5rem;
}

    .form-control {
    display: block;
    width: 100%;
    padding: 0.75rem 1rem;
    border: none;
    margin-bottom: 1.25rem;
    background: var(--clr-grey-10);
    border-radius: var(--radius);
    text-transform: uppercase;
    letter-spacing: var(--spacing);
}

.form-control::placeholder {
    font-family: var(--ff-primary);
    color: var(--clr-grey-1);
    text-transform: uppercase;
    letter-spacing: var(--spacing);
}

.submit-btn {
    display: block;
    width: 100%;
    padding: 1rem;
    border-bottom-left-radius: var(--radius);
    border-bottom-right-radius: var(--radius);
    border-top-right-radius: 0;
    border-top-left-radius: 0;
}
`

// return (
//     <Layout>
//       <section className="contact-page">
//         <article className="contact-form">
//           <h3>Kontakta mig</h3>
//           <form action="https://formspree.io/f/mdopewvq" method="POST">
//             <div className="form-group">
//               <input type="text" placeholder="namn" name="name" className="form-control" />
//               <input type="email" placeholder="email" name="email" className="form-control" />
//               <textarea name="message" rows="5" placeholder="meddelande" className="form-control">

//               </textarea>
//             </div>
//             <button type="submit" className="btn submit-btn">Skicka</button>
//           </form>
//         </article>
//       </section>
//     </Layout>
//   )