import React from "react"
import Title from "./Title"
import Blog from "./Blog"
import { Link } from "gatsby"
import {BlogSectionWrapper, BlogCenterWrapper} from "../elements/BlogElement"

export const Blogs = ({ blogs, title, showLink }) => {
  return (
    <BlogSectionWrapper>
      <Title title={title} />
      <BlogCenterWrapper className="blogs-center">
        {blogs.map((blog) => {
          return <Blog key={blog.id} {...blog} />
        })}
      </BlogCenterWrapper>
      {showLink && <Link to="/blog" className="btn center-btn">Blog</Link>}
      </BlogSectionWrapper>
  )
}
export default Blogs
