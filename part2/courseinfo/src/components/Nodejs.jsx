import React from 'react'
import NodeHeader from './NodeHeader';
import NodeContents from './NodeContents';

const Redux = ({node}) => {
  return (
    <div>
      < NodeHeader header ={node.name} />
      < NodeContents  parts={node.parts}/>
    </div>
  )
}

export default Redux
