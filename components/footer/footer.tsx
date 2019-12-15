import React from 'react'
import cx from 'classnames'
import { FooterProps } from './index.d'
import { getElementType } from '../../lib'
import { FootNav, Container } from '../index'
import './style.scss'

export class Footer extends React.PureComponent<FooterProps> {
    static defaultProps = {
        as: 'footer',
        role: 'contentinfo',
    }
    render() {
        const { children, ...rest } = this.props
        const footerClasses = cx('footer')
        const ElementType = getElementType(Footer, this.props)
        return (
            <ElementType {...rest} className={footerClasses}>
                <Container>
                    <FootNav />
                    <div className="ctr">版本说明</div>
                </Container>
            </ElementType>
        )
    }
}
