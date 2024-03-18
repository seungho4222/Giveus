import styled from "styled-components"

const StyledSignUpContainer = styled.div`
  background-color: white;
  width: 450px;
  height: 575px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 22px;
`

const StyledSignUpH1Tag = styled.h2`
  margin: 30px auto;
  font-size: 24px;
  font-weight: 600;
`

const StyledSignUpPTag = styled.p`
  font-size: 14px;
  color: #959d81;
`

export {StyledSignUpContainer, StyledSignUpH1Tag, StyledSignUpPTag}