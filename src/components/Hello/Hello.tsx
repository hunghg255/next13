'use client';

import { DatePicker } from 'antd';
import React, { useEffect } from 'react';
import dayjs from 'dayjs';
import { useProfileStore } from '@store/profile/useProfileStore';
import { atomProfile } from '@store/profile/profile';
import { useHydrateAtoms } from 'jotai/utils';

const Hello = () => {
  const profileSsr = {name: 'HUNG'};

  useHydrateAtoms([[atomProfile, profileSsr]]);

  const { profile, setProfile } = useProfileStore();

  useEffect(() => {
    console.log('Hello');
  }, []);
  return (
    <>
      <h1 className={'title'}>Hello Nextjs 13</h1>
   <h1>Profile: {profile.name}</h1>
      <button onClick={() => setProfile({ name: 'Peter' })}>Change Profile</button>
      <DatePicker />

      {dayjs().format('DD MMM YYYY, HH:mm')}
    </>
  );
};

export default Hello;
