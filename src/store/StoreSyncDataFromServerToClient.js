'use client';
import React from 'react';
import { useRef } from 'react';
import { usePost } from './post';

const StoreSyncDataFromServerToClient = ({ posts }) => {
  const initialized = useRef(false);

  if (!initialized.current) {
    usePost.setState({ data: posts });
    initialized.current = true;
  }

  return null;
};

export default StoreSyncDataFromServerToClient;
