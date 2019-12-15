import React, { PureComponent } from 'react'
import cx from 'classnames'
import _ from 'lodash'
import { useKeyOnly, getElementType } from '../../lib'
import { ContainerProps } from './common'
import './style.scss'

export class Container extends PureComponent<ContainerProps> {
    static defaultProps = {
        width: '1200',
    }

    computedWidth(width: string | number) {
        return ['%', 'px', 'em', 'vw'].some(s => _.endsWith(width.toString(), s))
            ? width
            : _.parseInt(width.toString()) + 'px'
    }

    render() {
        const { flex, width, children, className, ...rest } = this.props
        const ElementType = getElementType(Container, this.props)
        const classes = cx('container', className, useKeyOnly(flex, 'flex'))
        const styleWidth = this.computedWidth(width)
        return (
            <ElementType {...rest} style={{ width: styleWidth }} className={classes}>
                {children}
            </ElementType>
        )
    }
}
