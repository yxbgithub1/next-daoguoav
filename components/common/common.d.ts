import React from 'react'
import { GenericProps } from '../generic'

/** Flex Component */
export interface FlexProps extends GenericProps {
    col?: string
}

/** Container Component */
export interface ContainerProps extends GenericProps {
    width?: string | number
}
