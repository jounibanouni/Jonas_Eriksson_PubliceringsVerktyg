import styled from "styled-components"

// ----------NavWrapper ---------------------
export const NavbarWrapper = styled.nav`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 5rem;
  display: flex;
  align-items: center;
  z-index: 200;
  background: var(--clr-white);

  @media screen and (min-width: 992px) {
    background: #FAEBD7;
  }
`

// ----------NavCenter ---------------------
export const NavbarCenter = styled.div`
  width: 90vw;
  max-width: 1170px;
  margin: 0 auto;

  @media screen and (min-width: 768px) {
    display: grid;
    grid-template-columns: auto 1fr;
    align-items: center;
  }

  .nav-links {
    display: none;

    @media screen and (min-width: 768px) {

        display: flex;
        justify-content: flex-end;
        
      
      li {
        margin-right: 2rem;
      }
      a {
        text-transform: capitalize;
        color: var(--clr-grey-1);
        font-weight: bold;
        letter-spacing: var(--spacing);
        transition: var(--transition);
        padding: 0.5rem 0;
      }
      a:hover {
        color: var(--clr-primary-5);
        box-shadow: 0px 2px var(--clr-primary-5);
      }
    }
  }
`

// ----------NavHeader ---------------------
export const NavHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  img {
    margin-bottom: 0.375rem;
  }
`

export const NavButton = styled.button`
    font-size: 2rem;
    background: transparent;
    border-color: transparent;
    color: var(--clr-primary-5);
    cursor: pointer;
    transition: var(--transition);

  &:hover {
    color: var(--clr-primary-2);
  }

  @media screen and (min-width: 768px) {

      display: none;

  }
`
