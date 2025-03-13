import React from 'react';
import { graphql, useStaticQuery } from 'gatsby';
import Img from 'gatsby-image';
import styled from "styled-components"

const ImageWrapperPadded = styled.div`
        margin: 3rem 0;
        padding : 0 5rem;
        position: relative;
        @media (max-width:768px) {
          margin: 1.5rem 0;
          padding : 0 1rem;
        }
      `
const ImageWrapperFull = styled.div`
        margin: 3rem 0;
        padding : 0;
        position: relative;
        @media (max-width:768px) {
          margin: 1.5rem 0;
          padding : 0;
        }
      `

// Note: You can change "images" to whatever you'd like.
const Image = ({ filename, alt, type = 'full' }) => {
  const data = useStaticQuery(
    graphql`
      query allTheImagesQuery{
        allImageSharp {
          edges {
            node {
              fluid(maxWidth:1000) {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }`,
  );



  const ReturnedImage = data.allImageSharp.edges
    .filter(edge => edge.node.fluid.originalName === filename)
    .map((myImage, key) => <Img alt={alt} fluid={myImage.node.fluid} key={key} />);

  return type !== "full" ? <ImageWrapperPadded>{ReturnedImage}</ImageWrapperPadded> : <ImageWrapperFull>{ReturnedImage}</ImageWrapperFull>
};

export default Image;



