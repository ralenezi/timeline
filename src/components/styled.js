import styled from 'styled-components'
const DataItemWrapper = styled.div`
  display: flex;
  flex-direction: column;
  /* align-items: center;
  justify-content: center; */
  width: 50%;
  padding: 20px;
  /* margin-left: 30%;
  margin-right: 30px; */
`
const DataItemPiece = styled.div`
  display: flex;
  border: 1px solid rgba(191, 191, 191, 0.91);
  border-radius: 23px;
  flex-direction: column;
  align-self: ${(props) =>
    props.index === 'even' ? 'flex-end' : 'flex-start'};
  justify-content: center;
  background-color: ${(props) =>
    props.index === 'even' ? '#DDDDDD' : '#fffff'};
  width: 40%;
  padding: 20px;
`
export { DataItemWrapper, DataItemPiece }
