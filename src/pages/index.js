import React from "react"
import { graphql } from "gatsby"
import Layout from "../layouts"

class Index extends React.Component {

  allImg() {
    // var allImages = document.getElementsByTagName('img');
    var allImages = document.getElementsByClassName('imgFlip');

    console.log(allImages)

    for(var i = 0; i < allImages.length ; i++) {
      allImages[i].style.borderWidth = "medium";
      allImages[i].style.borderStyle = "solid";
      allImages[i].style.borderColor = "#00f";
      allImages[i].style.transform = "scaleX(-1)";

    }
  }

  render() {
    const data = this.props.data
    const images = data.allImageSharp.edges

    return (
      <Layout>
        <button onClick={() => this.allImg()}>Img</button>

        <p>
          The
          {` `}
          <code>rotate</code> option
          {` `}
          exposes Sharp
          {`'`}s{` `}
          <a href="http://sharp.pixelplumbing.com/en/stable/api-operation/#rotate">
            <code>rotate</code>
          </a>
          {` `}.
        </p>

        <h3>
          <code>
            <small>resize(width: 125, height: 125, rotate: 180)</small>
          </code>
        </h3>

        <ul style={{ ...styles.ul, ...styles.row }}>
          {images.map(image => (
            <li style={styles.column20} key={image.node.resize.src}>
              <img className='imgFlip'
                src={image.node.resize.src}
                alt={image.node.resize.originalName}
              />
            </li>
          ))}
        </ul>
        <p
          style={{
            clear: `left`,
          }}
        />
      </Layout>
    )
  }
}

const styles = {}

styles.row = {
  display: `flex`,
  flexWrap: `wrap`,
  margin: `8px -4px 1rem`,
}

styles.ul = {
  padding: `0`,
  listStyle: `none`,
}

styles.column20 = {
  flexShrink: 0,
  flexGrow: 0,
  color: `#999`,
  width: `20%`,
  padding: `0 4px`,
  margin: 0,
}

styles.img = {
  // -webkit-transform: scaleX(-1),
  transform: `scaleX(-1)`,
  // transform: `scaleY(-1)`,
}

styles.column25 = {
  flexShrink: 0,
  flexGrow: 0,
  color: `#999`,
  width: `25%`,
  padding: `0 4px`,
  margin: 0,
}

export default Index

export const pageQuery = graphql`
  query {
    allImageSharp {
      edges {
        node {
          ... on ImageSharp {
            resize(width: 125, height: 125, rotate: 270) {
              src
            }
          }
        }
      }
    }
    fluidImages: file(
      relativePath: { regex: "/fecolormatrix-kanye-west.jpg/" }
    ) {
      childImageSharp {
        fluid(
          duotone: { highlight: "#f00e2e", shadow: "#192550" }
          traceSVG: {
            color: "#f00e2e"
            turnPolicy: TURNPOLICY_MINORITY
            blackOnWhite: false
          }
          toFormat: PNG
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    fluidDuotone: file(
      relativePath: { regex: "/fecolormatrix-kanye-west.jpg/" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 120
          duotone: { highlight: "#0ec4f1", shadow: "#192550" }
          traceSVG: { color: "#1E2151" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    fluidDuotone50: file(
      relativePath: { regex: "/fecolormatrix-kanye-west.jpg/" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 120
          duotone: { highlight: "#0ec4f1", shadow: "#192550", opacity: 50 }
          traceSVG: { color: "#A7DEF6" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    fluidDuotone75: file(
      relativePath: { regex: "/fecolormatrix-kanye-west.jpg/" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 120
          duotone: { highlight: "#0ec4f1", shadow: "#192550", opacity: 75 }
          traceSVG: { color: "#0ec4f1" }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    fluidDuotone25: file(
      relativePath: { regex: "/fecolormatrix-kanye-west.jpg/" }
    ) {
      childImageSharp {
        fluid(
          maxWidth: 120
          traceSVG: { color: "#D1EFFB" }
          duotone: { highlight: "#0ec4f1", shadow: "#192550", opacity: 25 }
        ) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    fluidDuotoneOriginal: file(
      relativePath: { regex: "/fecolormatrix-kanye-west.jpg/" }
    ) {
      childImageSharp {
        fluid(maxWidth: 120, traceSVG: { color: "#e7f7fe" }, toFormat: PNG) {
          ...GatsbyImageSharpFluid_tracedSVG
        }
      }
    }
    fixedImages: file(relativePath: { regex: "/lol.jpg/" }) {
      childImageSharp {
        fixed(grayscale: true, width: 500) {
          ...GatsbyImageSharpFixed_withWebp
        }
      }
    }
    cropDefault: file(relativePath: { regex: "/f-scott.jpg/" }) {
      childImageSharp {
        resize(width: 180, height: 180) {
          src
        }
      }
    }
    cropBottomLeft: file(relativePath: { regex: "/f-scott.jpg/" }) {
      childImageSharp {
        resize(width: 180, height: 180, cropFocus: SOUTHWEST) {
          src
        }
      }
    }
    cropEntropy: file(relativePath: { regex: "/f-scott.jpg/" }) {
      childImageSharp {
        resize(width: 180, height: 180, cropFocus: ENTROPY) {
          src
        }
      }
    }
    cropCenter: file(relativePath: { regex: "/f-scott.jpg/" }) {
      childImageSharp {
        resize(width: 180, height: 180, cropFocus: CENTER) {
          src
        }
      }
    }
  }
`