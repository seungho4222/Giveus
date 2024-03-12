import styled from "styled-components"

const StyledHeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 940px;
  height: 32px;
`

const StyledHeaderLeft = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;
  font-weight: 700;
  font-size: 14px;
`

const StyledHeaderMiddle = styled.div`
  display: flex;
  gap: 20px;
`

export {StyledHeaderContainer, StyledHeaderLeft, StyledHeaderMiddle}