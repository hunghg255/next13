import { atom } from 'jotai';

interface IProfile {
  name: string;
}

export const atomProfile = atom<IProfile>({
  name: 'J',
});
