import React from 'react'
import cx from 'classnames'
import { getElementType } from '../../lib'
import { LogoProps } from './common'
import './style.scss'

export const Logo: React.FunctionComponent<LogoProps> = (props: LogoProps) => {
    const { className, children, ...rest } = props
    const classes = cx('logo', className)
    const ElementType = getElementType(Logo, props)

    return (
        <ElementType id="logo" {...rest} className={classes}>
            {children}
        </ElementType>
    )
}
