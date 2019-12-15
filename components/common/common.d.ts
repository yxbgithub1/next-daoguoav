import React from 'react'
import { GenericProps } from '../generic'

/** Flex Component */
export interface FlexProps extends GenericProps {
    col?: string
}

/** Container Component */
export interface ContainerProps extends GenericProps {
    /** 内容宽度 */
    width?: string | number

    /** flex布局 */
    flex?: boolean

    /** 附加样式类 */
    className?: string
}

export interface LogoProps extends GenericProps {}

export interface SearchProps extends GenericProps {}
