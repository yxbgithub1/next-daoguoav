import React from 'react'
import './style.scss'
import cx from 'classnames'
import { FlexProps } from './common'
import { useKeyOnly, getElementType } from '../../lib'

export const Flex: React.FunctionComponent<FlexProps> = (props: FlexProps) => {
    const { col, children, ...rest } = props

    const classes = cx('flex', useKeyOnly('col', col))

    const ElementType = getElementType(Flex, props)

    return (
        <ElementType {...rest} className={classes}>
            {children}
        </ElementType>
    )
}