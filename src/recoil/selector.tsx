import { selector } from 'recoil';
import { modeState } from './atom';

export const getModeState = selector({
  key: 'getModeState',
  get: ({ get }) => {
    const mode = get(modeState);

    return mode;
  },
});
