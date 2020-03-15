import React from 'react'
import styled from 'styled-components'

export const Button = (props) => {
  return (
    <ButtonStyle>
      {props.children}
    </ButtonStyle>
  )
}

const ButtonStyle = styled.button`
  padding: 30px 62px;
  border: 1px solid #fff;
  background-color: rgba(255, 255, 255, 0.1);
  font-family: inherit;
  font-size: 24px;
  font-weight: bold;
  color: #fff;
  cursor: pointer;
  transition: all 0.5s;
  &:hover {
    background-color: #770302;
  }
`