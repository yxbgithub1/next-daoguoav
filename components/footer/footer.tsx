import React from 'react'
import cx from 'classnames'
import { FooterProps } from './index.d'
import { getElementType } from '../../lib'
import { Container } from '../index'
import { Row, Col } from 'antd'
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
                    <Row gutter={[16, 16]}>
                        <Col span={6}>1</Col>
                        <Col span={6}>2</Col>
                        <Col span={6}>3</Col>
                        <Col span={6}>4</Col>
                    </Row>
                    <div>版本说明</div>
                </Container>
            </ElementType>
        )
    }
}
