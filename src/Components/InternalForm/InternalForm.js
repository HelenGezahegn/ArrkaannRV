import React from "react";
import { Form, Button, Input, InputNumber, Cascader } from "antd";
import makeModelConfigCascade from "./MakeModelConfig.js"
import TechForm from "./TechForm.js"
import OrderClerkForm from "./OrderClerkForm.js"
import WriterForm from "./WriterForm.js"
import ReceiverForm from "./ReceiverForm.js"

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
        "makeModel": fieldsValue["makeModel"],
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
          {getFieldDecorator('makeModel', requiredConfig)(<Cascader options={makeModelConfigCascade} style={{width: "300px"}}/>)}
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
        <TechForm getFieldDecorator={getFieldDecorator} requiredConfig={requiredConfig}/>
        <OrderClerkForm getFieldDecorator={getFieldDecorator} requiredConfig={requiredConfig}/>
        <WriterForm getFieldDecorator={getFieldDecorator} requiredConfig={requiredConfig}/>
        <ReceiverForm getFieldDecorator={getFieldDecorator} requiredConfig={requiredConfig}/>
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
