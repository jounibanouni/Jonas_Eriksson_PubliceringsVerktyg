import styled from "styled-components"

export const ProjectSectionWrapper = styled.section`
    padding: 5rem 0;
    background: var(--clr-grey-10);
`

export const ProjectCenterWrapper = styled.div`
    width: 90vw;
    margin: 0 auto;
    max-width: 1170px;

    @media screen and (min-width: 992px) {
        width: 95vw;
    }
`


/* <section className="section projects">
<Title title={title} />
<div className="section-center projects-center">
  {projects.map((project, index) => {
    return <Project key={project.id} index={index} {...project} />
  })}
</div>
{showLink && (
  <Link to="/projects" className="btn center-btn">
    projects
  </Link>
)}
<Link to="./Projects" />
</section>
) */