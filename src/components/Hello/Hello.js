'use client';

import { DatePicker } from 'antd';
import React, { useEffect } from 'react';
import dayjs from 'dayjs';

const Hello = () => {
  useEffect(() => {
    console.log('Hello');
  }, []);
  return (
    <>
      <h1>Hello Hello</h1>

      <DatePicker />

      {dayjs().format('DD MMM YYYY, HH:mm')}
    </>
  );
};

export default Hello;
