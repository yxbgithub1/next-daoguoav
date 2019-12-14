import React, { PureComponent } from 'react'
import cx from 'classnames'
import _ from 'lodash'
import { getElementType } from '../../lib'
import { ContainerProps } from './common'
import './style.scss'

const defaultProps = {
    width: 1200,
}
export class Container extends PureComponent<ContainerProps> {
    static defaultProps: ContainerProps = defaultProps

    computedWidth() {
        const { width } = this.props
        /** 纯数字 */
        if (typeof width !== 'string') {
            return width + 'px'
        } else {
            const resutl = ['%', 'px'].some(s => _.startsWith(width.toString(), s))
            /** %和px单做单位时 */
            if (resutl) {
                return width
            } else {
                /** 非法单位 */
                return defaultProps.width + 'px'
            }
        }
    }

    render() {
        const { children, className } = this.props
        const ElementType = getElementType(Container, this.props)
        const classes = cx('container', className)
        const styleWidth = this.computedWidth()
        return (
            <ElementType style={{ width: styleWidth }} className={classes}>
                {children}
            </ElementType>
        )
    }
}
