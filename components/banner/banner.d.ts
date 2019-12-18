import { GenericProps } from '../generic'

/**
 * config 参考：https://github.com/voronianski/swipe-js-iso#config-options
 */
export interface BannerProps extends GenericProps {
    dataList?: any

    options?: {
        /** 自动切换时长-毫秒 */
        auto?: number

        /** 指定开始帧下标，默认0 */
        startSlide?: number

        /** 切换过渡效果时长，默认300毫秒 */
        speed?: number

        /** 切换至最后一帧时是否切换到第一帧，默认true */
        continuous?: boolean
    }

    /** 切换开始回调 */
    transitionStart?: (index?: number, el?: HTMLElement) => void

    /** 切换结束回调 */
    transitionEnd?: (index?: number, el?: HTMLElement) => void
}

export interface SwipeAPI {
    /** 上一帧 */
    prev?: () => void

    /** 下一帧 */
    next?: () => void

    /** 返回当前幻灯片索引 */
    getPos?: () => index

    /** 返回幻灯片总数 */
    getNumSlides?: () => slides

    /** 设置索引下标和过渡时长 */
    slide?: (index: number, duration: number) => void

    /** directly control scrolling (disableScroll: same as the config option */
    pdisableScrollingrev?: (disableScroll: any) => void
}

export interface BannerState {
    activeIndex: number
}
