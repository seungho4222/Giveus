import styled from "styled-components"

const StyledLoginContainer = styled.div`
  width: 350px;
  height: 450px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 22px;
`

const StyledLoginH1Tag = styled.h1`
  font-size: 32px;
  color: #4382ff;
  font-weight: 700;
`

const StyledLoginPTag = styled.p`
  font-size: 14px;
  color: #959d81;
`

export {StyledLoginContainer, StyledLoginH1Tag, StyledLoginPTag}