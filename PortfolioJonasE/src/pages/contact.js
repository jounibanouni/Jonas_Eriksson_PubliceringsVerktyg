import React from "react"
import Layout from "../components/Layout"
import {ContactWrapper, ContactForm} from "../elements/ContactElement"
import SEO from "../components/SEO"

//Form which will post form to formspree
const contact = () => {
  return (
    <Layout>
      <SEO title="Kontakt" description="Kontakt" />
      <ContactWrapper>
        <ContactForm>
          <h3>Kontakta mig</h3>
          <form action="https://formspree.io/f/mdopewvq" method="POST">
            <div className="form-group">
              <input type="text" placeholder="namn" name="name" className="form-control" />
              <input type="email" placeholder="email" name="email" className="form-control" />
              <textarea name="message" rows="5" placeholder="meddelande" className="form-control">

              </textarea>
            </div>
            <button type="submit" className="btn submit-btn">Skicka</button>
          </form>
          </ContactForm>
        </ContactWrapper>
    </Layout>
  )
}

export default contact
