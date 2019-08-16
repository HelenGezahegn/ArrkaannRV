import React from "react";
import { Form, Input, InputNumber } from "antd";

class TechForm extends React.Component {
  render() {
    const { getFieldDecorator, requiredConfig } = this.props;
    return (
      <div>
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
        <Form.Item label="Quantity:">
          {getFieldDecorator("quantity", requiredConfig)(<InputNumber min={1} placeholder="quantity"/>)}
        </Form.Item>
        <Form.Item label="Length:" style={{ marginBottom: 0 }}>
          {getFieldDecorator("lengthFake", requiredConfig)(<div />)}
          <Form.Item
            style={{ display: 'inline-block'}}
          >
            {getFieldDecorator("lengthFeet", requiredConfig)(<InputNumber min={0} placeholder="feet"/>)}
            <span className="ant-form-text"> ft</span>
          </Form.Item>
          <Form.Item
            style={{ display: 'inline-block' }}>
            {getFieldDecorator("lengthInches", requiredConfig)(<InputNumber min={0} max={12} placeholder="inches"/>)}
            <span className="ant-form-text" style={{ position: "absolute", top: "-10px", left: "90px" }}> in</span>
          </Form.Item>
        </Form.Item>
        <Form.Item label="Width:" style={{ marginBottom: 0 }}>
          {getFieldDecorator("widthFake", requiredConfig)(<div />)}
          <Form.Item
            style={{ display: 'inline-block'}}>
            {getFieldDecorator("widthFeet", requiredConfig)(<InputNumber min={0} placeholder="feet"/>)}
            <span className="ant-form-text"> ft</span>
          </Form.Item>
          <Form.Item
            style={{ display: 'inline-block' }}>
            {getFieldDecorator("widthInches", requiredConfig)(<InputNumber min={0} max={12} placeholder="inches"/>)}
            <span className="ant-form-text" style={{ position: "absolute", top: "-10px", left: "90px" }}> in</span>
          </Form.Item>
        </Form.Item>
        <Form.Item label="Height:" style={{ marginBottom: 0 }}>
          {getFieldDecorator("heightFake", requiredConfig)(<div />)}
          <Form.Item
            style={{ display: 'inline-block'}}>
            {getFieldDecorator("heightFeet", requiredConfig)(<InputNumber min={0} placeholder="feet"/>)}
            <span className="ant-form-text"> ft</span>
          </Form.Item>
          <Form.Item
            style={{ display: 'inline-block' }}>
            {getFieldDecorator("heightInches", requiredConfig)(<InputNumber min={0} max={12} placeholder="inches"/>)}
            <span className="ant-form-text" style={{ position: "absolute", top: "-10px", left: "90px" }}> in</span>
          </Form.Item>
        </Form.Item>
      </div>
    )
  }
}

export default TechForm;
