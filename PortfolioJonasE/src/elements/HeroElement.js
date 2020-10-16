import styled from "styled-components"

export const HeaderHero = styled.header`
    margin-top: -5rem;
    padding-top: 5rem;
    height: 100vh;
    background: var(--clr-primary-10);
    position: relative;


@media screen and (min-width: 992px) {
    ::before {
        content: "";
        position: absolute;
        top: 0;
        left: 65%;
        right: 0;
        bottom: 0;
        background: var(--clr-white);
    }

    h4 {
        font-size: 0.85rem;
    }
}

@media screen and (min-width: 1170px) {
    h4 {
        font-size: 1rem;
    }
    h4 {
        line-height: 1;
    }
}
`


export const CenterHero = styled.div`
    height: 100%;
    display: grid;
    align-items: center;

    .underline {
    margin-bottom: 0.5rem;
    margin-left: 0;
    }

    .btn {
    margin-top: 1.25rem;
}
.hero-img {
    display: none;
}

@media screen and (min-width: 992px) {

    grid-template-columns: repeat(12, 1fr);
    border-left: 5px solid black;
    padding: 2rem;

    .hero-img {
        display: block;
        grid-row: 1/1;
        grid-column: 8/-1;
        border-radius: 50%;
    }
}
`

export const InfoHero = styled.article`
    background: var(--clr-primary-10);

    h4 {
    color: var(--clr-grey-5);

    .btn {
    margin-top: 1.25rem;
}
}

@media screen and (min-width: 992px) {
    grid-row: 1/1;
        grid-column: 1 / span 8;
}

@media screen and (min-width: 1170px) {
    grid-column: 1 / span 8;
}
`

