import React from "react";
import { Form, Input } from "antd";

class OrderClerkForm extends React.Component {
  render() {
    const { getFieldDecorator, requiredConfig } = this.props;
    return (
      <div>
        <hr />
        <h1> Order Clerk </h1>
        <Form.Item label="Part Description:">
          {getFieldDecorator("part-description", requiredConfig)(
            <Input.TextArea
              placeholder="Put a better description here"
              rows={4}
              style={{width: "400px"}} />
          )}
        </Form.Item>
      </div>
    )
  }
}

export default OrderClerkForm;
