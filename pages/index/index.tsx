import { Layout, Container } from '../../components'
import { Form, Carousel, InputNumber, DatePicker, Button } from 'antd'
const FormItem = Form.Item

export default () => (
    <Layout title="首页">
        <Carousel autoplay>
            <div>
                <h3>1</h3>
            </div>
            <div>
                <h3>2</h3>
            </div>
            <div>
                <h3>3</h3>
            </div>
            <div>
                <h3>4</h3>
            </div>
        </Carousel>
        <Container>
            <Form layout="horizontal">
                <FormItem label="Input Number" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
                    <InputNumber
                        size="large"
                        min={1}
                        max={10}
                        style={{ width: 100 }}
                        defaultValue={3}
                        name="inputNumber"
                    />
                    <a href="#">Link</a>
                </FormItem>

                <FormItem label="DatePicker" labelCol={{ span: 8 }} wrapperCol={{ span: 8 }}>
                    <DatePicker name="startDate" />
                </FormItem>
                <FormItem style={{ marginTop: 48 }} wrapperCol={{ span: 8, offset: 8 }}>
                    <Button size="large" type="primary" htmlType="submit">
                        OK
                    </Button>
                    <Button size="large" style={{ marginLeft: 8 }}>
                        Cancel
                    </Button>
                </FormItem>
            </Form>
        </Container>
    </Layout>
)
