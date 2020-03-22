import React from 'react'
import styled from 'styled-components'

export const Showcase = () => {
  return (
    <ShowcaseStyle>
      <div className="container">
        <iframe width="100%" height="400" src="https://www.youtube.com/embed/tw4jkyfY4HE" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>
      </div>
    </ShowcaseStyle>
  )
}

const ShowcaseStyle = styled.section`
  margin-top: 100px;
`;