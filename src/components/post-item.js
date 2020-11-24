import React from "react"
import { Link } from "gatsby"
import Img from "gatsby-image"

export const PostItem = ({image, title, link}) => (

  <Link to={link}>
    <Img fluid={image}/>
    <h3>{title}</h3>
  </Link>

)
