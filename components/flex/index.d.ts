import React from 'react'

export interface FlexProps extends StrictFlexProps {
    [key: string]: any
}

export interface StrictFlexProps {
    col?: string
}

declare class Flex extends React.Component<FlexProps, {}> {}

export default Flex
