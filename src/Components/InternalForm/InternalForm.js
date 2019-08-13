import React from "react";
import { Form, Button, Input, Select, Row, Col, InputNumber } from "antd";
import makeModelConfig from "./MakeModelConfig.js"

class InternalForm extends React.Component {

  state = {
    modelOptions: null
  }

  handleSubmit = e => {
    e.preventDefault();

    this.props.form.validateFields((err, fieldsValue) => {
      if (err) {
        return;
      }

      const values = {
        ...fieldsValue,
        "first-name": fieldsValue["first-name"],
        "last-name": fieldsValue["last-name"],
        "make": fieldsValue["make"],
        "model": fieldsValue["model"],
        "stk": fieldsValue["stk"],
        "part-description": fieldsValue["part-description"]
      };
      console.log("Received values of form: ", values);
    });
  };

  handleMakeSelectChange = make => {
    var modelOptions = makeModelConfig[make].map(model => (
      <Select.Option value={model} key={model}>{model}</Select.Option>
    ))
    this.setState({modelOptions});
  }

  render() {
    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    const requiredConfig = {
      rules: [{required: true}],
    };

    return (
      <Form {...formItemLayout} onSubmit={this.handleSubmit}>
        <Form.Item label="First Name:">
          {getFieldDecorator("first-name", requiredConfig)(<Input placeholder="Jane" style={{width: "200px"}} />)}
        </Form.Item>
        <Form.Item label="Last Name:">
          {getFieldDecorator("last-name", requiredConfig)(<Input placeholder="Doe" style={{width: "200px"}} />)}
        </Form.Item>
        <Row type="flex" justify="center">
          <Col span = {6}>
            <Form.Item>
              {getFieldDecorator("make", requiredConfig)(
                <Select placeholder="Make" onChange={this.handleMakeSelectChange}>
                  {Object.keys(makeModelConfig).map(make => (
                    <Select.Option value={make} key={make}>{make}</Select.Option>
                  ))}
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col span= {6}>
            <Form.Item>
              {getFieldDecorator("model", requiredConfig)(
                <Select placeholder="Model">
                  {this.state.modelOptions}
                </Select>
              )}
            </Form.Item>
          </Col>
          <Col span = {6}>
            <Form.Item>
              {getFieldDecorator("stk", requiredConfig)(<InputNumber min={1000} placeholder="stk #"/>)}
            </Form.Item>
          </Col>
        </Row>
        <hr />
        <h1> Tech </h1>
        <Form.Item label="Part Description:">
          {getFieldDecorator("part-description", requiredConfig)(
            <Input.TextArea
              placeholder="Put a better description here"
              rows={4}
              style={{width: "400px"}} />
          )}
        </Form.Item>
        <Form.Item
          wrapperCol={{
            xs: { span: 24, offset: 0 },
            sm: { span: 16, offset: 8 },
          }}
        >
          <Button type="primary" htmlType="submit">
            Submit
          </Button>
        </Form.Item>
      </Form>
    )
  }
}

export default Form.create({ name: "internal-form" })(InternalForm);
