import React from "react"
import Title from "./Title"
import { FaAngleDoubleRight } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { Link } from "gatsby"
import {CenterJobWrapper, BtnContainer, JobArticleWrapper} from "../elements/JobsElement"

const query = graphql`
  {
    allStrapiJobs(sort: { fields: strapiId, order: DESC }) {
      nodes {
        strapiId
        company
        date
        position
        desc {
          id
          name
        }
      }
    }
  }
`

const Jobs = () => {
  const data = useStaticQuery(query)
  const {
    allStrapiJobs: { nodes: jobs },
  } = data
  const [value, setValue] = React.useState(0)
  const { company, position, date, desc } = jobs[value]

  return (
    <section className="section jobs">
      <Title title="Arbetslivserfarenhet" />
      <CenterJobWrapper>
        <BtnContainer>
          {jobs.map((job, index) => {
            return (
              <button
                key={job.strapiId}
                onClick={()=> setValue(index)}
                className={`job-btn ${index === value && "active-btn"}`}
              >
                {job.company}
              </button>
            )
          })}
        </BtnContainer>
        <JobArticleWrapper>
          <h3>{position}</h3>
          <h4>{company}</h4>
          <p className="job-date">{date}</p>
          {
            desc.map((item)=>{
              return <div key={item.id} className="job-desc">
                <FaAngleDoubleRight className="job-icon"></FaAngleDoubleRight>
                <p>{item.name}</p>
              </div>
            })
          }
        </JobArticleWrapper>
        </CenterJobWrapper>
      <Link to="/about" className="btn center-btn">Om mig</Link>
    </section>
  )
}

export default Jobs
