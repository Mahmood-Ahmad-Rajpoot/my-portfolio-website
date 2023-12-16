import React from 'react'

interface ChildProps {
    some: string;
}

const Child: React.FC<ChildProps> = ({ some}) => {
  return (
    <div>Child</div>
  )
}

export default Child