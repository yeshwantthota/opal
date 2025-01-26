import React from 'react'

type Props = {
    params: {
        workspaceId: string
    }
}

const page = ({params: {workspaceId}}: Props) => {
  return (
    <div>page</div>
  )
}

export default page