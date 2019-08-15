import React from "react";
import { Form, Button, Input, InputNumber, Cascader } from "antd";
import makeModelConfigCascade from "./MakeModelConfig.js"

class InternalForm extends React.Component {

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
        "makeModel": fieldsValue["makeModelCascade"],
        "stk": fieldsValue["stk"],
        "vin": fieldsValue["vin"],
        "year": fieldsValue["year"],
        "part-description": fieldsValue["part-description"],
        "quantity": fieldsValue["quantity"],
        "lengthFeet": fieldsValue["lengthFeet"],
        "lengthInches": fieldsValue["lengthInches"],
        "widthFeet": fieldsValue["widthFeet"],
        "widthInches": fieldsValue["widthInches"],
        "heightFeet": fieldsValue["heightFeet"],
        "heightInches": fieldsValue["heightInches"],
      };
      console.log("Received values of form: ", values);
    });
  };

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
        <Form.Item label="Make and Model:">
          {getFieldDecorator('makeModelCascade', requiredConfig)(<Cascader options={makeModelConfigCascade} style={{width: "300px"}}/>)}
        </Form.Item>
        <Form.Item label="stk:">
          {getFieldDecorator("stk", requiredConfig)(<InputNumber min={1000} placeholder="stk #"/>)}
        </Form.Item>
        <Form.Item label="VIN">
          {getFieldDecorator("vin", requiredConfig)(<InputNumber min={1000} placeholder="vin"/>)}
        </Form.Item>
        <Form.Item label="Year:">
          {getFieldDecorator("year", requiredConfig)(<InputNumber min={1000} placeholder="year"/>)}
        </Form.Item>
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
