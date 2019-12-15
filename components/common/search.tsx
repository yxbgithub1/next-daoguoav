import React from 'react'
import cx from 'classnames'
import { getElementType } from '../../lib'
import { SearchProps } from './common'
import { Icon, Input } from 'antd'
import './style.scss'

export class Search extends React.PureComponent<SearchProps> {
    static defaultProps = {
        as: 'a',
    }

    render() {
        const { className, ...rest } = this.props
        const classes = cx('search', className)
        const ElementType = getElementType(Search, this.props)

        return (
            <ElementType {...rest} className={classes}>
                <Input
                    placeholder="Search"
                    className="search-input"
                    prefix={<Icon type="search" style={{ color: 'rgba(0,0,0,.25)' }} />}
                />
            </ElementType>
        )
    }
}
