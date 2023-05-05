'use client';

import { Button, Form } from 'antd';
import React from 'react';
import { setCookie } from '../../src/utils/cookies';
import { useRouter } from 'next/navigation';

const Login = () => {
  const router = useRouter();
  console.log(router);
  const onLogin = () => {
    setCookie('token', 'abcxyz');

    router.push('/');
  };

  return (
    <>
      <Button onClick={onLogin}>Login</Button>
    </>
  );
};

export default Login;
