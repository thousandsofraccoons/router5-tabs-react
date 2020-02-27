import React, { FunctionComponent } from 'react'

type Props = {
  children: React.ReactElement
}

export const Layout: FunctionComponent<Props> = ({ children }) => {
  return <>{React.cloneElement(children, { customProp: 'Hello' })}</>
}
