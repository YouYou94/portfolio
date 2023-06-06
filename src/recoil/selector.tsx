import { selector } from 'recoil';
import { mode } from './atom';
import { toggle } from './atom';

export const getMode = selector({
  key: 'getMode',
  get: ({ get }) => {
    const modeState = get(mode);

    return modeState;
  },
});

export const getToggle = selector({
  key: 'getToggle',
  get: ({ get }) => {
    const toggleState = get(toggle);

    return toggleState;
  },
});
