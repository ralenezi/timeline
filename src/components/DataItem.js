import React from 'react'
import { DataItemWrapper, DataItemPiece } from './styled'

const DataItem = (props) => {
  return (
    <DataItemWrapper>
      <DataItemPiece key={props.key} index={props.index}>
        <h3>{props.e.title}</h3>
        <h6>{props.e.year}</h6>
        <h1>{props.e.emoji}</h1>
      </DataItemPiece>
    </DataItemWrapper>
  )
}

export default DataItem
