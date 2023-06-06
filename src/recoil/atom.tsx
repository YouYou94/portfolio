import { atom } from 'recoil';

export const mode = atom<boolean>({
  key: 'mode',
  default: false,
});

export const toggle = atom<boolean>({
  key: 'toggle',
  default: false,
});
