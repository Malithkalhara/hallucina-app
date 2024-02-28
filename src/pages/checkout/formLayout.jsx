import React, { useState } from 'react';
import { Form, Input, Select, Row, Col } from 'antd';
import { counties } from '../../utils/SelectOptions';

const CheckOutLayer = () => {
  const [componentSize, setComponentSize] = useState('default');

  const onFormLayoutChange = ({ size }) => {
    setComponentSize(size);
  };

  return (
    <Form
      labelCol={{ span: 12}}
      wrapperCol={{ span: 20 }}
      layout="horizontal"
      initialValues={{ size: componentSize }}
      onValuesChange={onFormLayoutChange}
      size={componentSize}
      style={{ maxWidth: 675 }}
    >
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item label="First Name">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Last Name">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item label="Email">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="Phone Number">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item label="Appartment, Suite etc.">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
          <Form.Item label="City / Town">
            <Input />
          </Form.Item>
        </Col>
      </Row>
      <Row gutter={24}>
        <Col span={12}>
          <Form.Item label="District">
            <Input />
          </Form.Item>
        </Col>
        <Col span={12}>
        <Form.Item label="Country">
            <Select>
              {counties.map((county, index) => (
                <Select.Option key={index} value={county.value}>
                  {county.label}
                </Select.Option>
              ))}
            </Select>
          </Form.Item>
        </Col>
      </Row>
      <Col gutter = {24}>
      <Form.Item  label="Note">
        <Input.TextArea />
      </Form.Item>
      </Col>
      
    </Form>
  );
};

export default CheckOutLayer;
