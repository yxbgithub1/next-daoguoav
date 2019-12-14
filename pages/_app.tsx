import App from 'next/app'
import { ConfigProvider } from 'antd'
import zhCN from 'antd/lib/locale/zh_CN'

class MainApp extends App {
    render() {
        const { Component, pageProps } = this.props
        return (
            <ConfigProvider locale={zhCN}>
                <Component {...pageProps} />
            </ConfigProvider>
        )
    }
}

export default MainApp
