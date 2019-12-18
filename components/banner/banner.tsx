import React, { PureComponent } from 'react'
import cx from 'classnames'
import _ from 'lodash'
import Swipe from 'react-swipe'
import { SwipeAPI, BannerProps, BannerState } from './banner.d'
import './style.scss'

export class Banner extends PureComponent<BannerProps, BannerState> {
    swipe: SwipeAPI
    constructor(props: BannerProps) {
        super(props)
        this.state = {
            activeIndex: 0,
        }
    }

    static defaultProps: BannerProps = {
        options: {
            auto: 3000,
            continuous: false,
        },
        dataList: [1, 2, 3],
    }

    render() {
        const { dataList, options } = this.props
        const swipeClasses = cx('swipe')
        // const buttonClasses = cx('swipe-buttons')
        const containerClasses = cx('swipe-container')

        /** 组合swipe config */
        const swipeOptions = {
            ...options,
            // transitionEnd,
            callback: () => {
                // this.setState({
                //     activeIndex: index,
                // })
                // _.invoke(this.props, 'transitionStart', { index })
            },
            transitionEnd: (index: number) => {
                this.setState({
                    activeIndex: index,
                })
                // _.invoke(this.props, 'transitionStart', { index })
            },
        }

        return (
            <div className={swipeClasses}>
                <Swipe
                    className={containerClasses}
                    swipeOptions={swipeOptions}
                    ref={el => (this.swipe = el)}
                    childCount={dataList.length}>
                    <div className="swipe-slide">Slide 1</div>
                    <div className="swipe-slide">Slide 2</div>
                    <div className="swipe-slide">Slide 3</div>
                </Swipe>
                <div className="swipe-pagination">
                    {dataList.map((s: number, index: number) => (
                        <span
                            key={s}
                            className={`swipe-pagination-item ${
                                this.state.activeIndex == index ? 'active' : ''
                            }`}></span>
                    ))}
                </div>
                {/* <div className={buttonClasses}>
                    <Button onClick={() => this.swipe.next()}>上一张</Button>
                    <Button onClick={() => this.swipe.prev()}>下一张</Button>
                </div> */}
            </div>
        )
    }
}
