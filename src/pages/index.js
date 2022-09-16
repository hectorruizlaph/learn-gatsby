import React from "react"

import Layout from "./components/Layout"

import * as styles from "../styles/home.module.css"
import { graphql, Link } from "gatsby"
import Img from "gatsby-image"

export default function Home({ data }) {
  console.log(data)
  return (
    <Layout>
      <section className={styles.header}>
        <div>
          <h2>This is my Gatsby Site</h2>
          <h3>I learned everythiong regarding Gatsby with this page.</h3>
          <p>
            Gatsy creates Server Side Rendering at build time making it a very
            fast experience for users
          </p>
          <Link className={styles.btn} to="/projects">
            My Portfolio Projects
          </Link>
        </div>
          <Img fluid={data.file.childImageSharp.fluid} className={styles.image} />
      </section>
    </Layout>
  )
}

export const query = graphql`
  query Banner {
    file(relativePath: { eq: "working.png" }) {
      childImageSharp {
        fluid {
          ...GatsbyImageSharpFluid
        }
      }
    }
  }
`
