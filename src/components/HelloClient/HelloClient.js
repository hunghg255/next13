'use client';

import { Row } from 'antd';
import React from 'react';

const HelloClient = ({ title }) => {
  return (
    <Row>
      <h1>Hello HelloClient {title}</h1>
    </Row>
  );
};

export default HelloClient;
