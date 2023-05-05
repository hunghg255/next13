import { atomProfile } from '@store/profile/profile';
import { useAtom } from 'jotai';

export const useProfileStore = () => {
  const [profile, setProfile] = useAtom(atomProfile);

  return {
    profile,
    setProfile,
  };
};
