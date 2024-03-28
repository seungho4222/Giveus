import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  width: 90%;
  margin: 20px auto;
`

export const Ul = styled.ul`
  display: flex;
  flex-direction: column;
  padding: 0 4px;
`

export const li = styled.li`
  display: flex;
  align-items: center;
  margin: 13px 0;
  padding: 2px 0;
  cursor: pointer;

  span {
    font-size: 1em;
    font-weight: 500;
  }
`

export const ImageWrap = styled.div`
  display: flex;
  justify-content: center;
  width: 20px;
  margin-right: 24px;
`
