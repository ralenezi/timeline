import styled, { createGlobalStyle } from 'styled-components'
export const GlobalStyle = createGlobalStyle`
body {
  color: #37393A;
  /* background-color: #FFF; */
}
`
export const DataItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  padding: 20px;
`
export const DataItemPiece = styled.div`
  display: flex;
  border: 1px solid rgba(191, 191, 191, 0.91);
  border-radius: 23px;
  flex-direction: column;
  align-self: ${(props) =>
    props.index === 'even' ? 'flex-end' : 'flex-start'};
  justify-content: center;
  background-color: ${(props) =>
    props.index === 'even' ? '#FFFAFA' : '#FAFFFF'};
  width: 40%;
  padding: 20px;
  h6 {
    margin: 0;
  }
`
