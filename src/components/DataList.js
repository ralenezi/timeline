import React from 'react'
import data from '../data'
import DataItem from './DataItem'
const DataList = () =>
  data.map((e) => (
    <DataItem
      e={e}
      key={e.id}
      index={e.id % 2 === 0 ? 'even' : 'odd'}></DataItem>
  ))

export default DataList
