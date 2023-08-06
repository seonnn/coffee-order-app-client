import { DefaultValue, atom, selector } from 'recoil';

export const tokenAtom = atom({
  key: 'tokenAtom',
  default: localStorage.getItem('token'),
});

export const tokenSelector = selector<string | null>({
  key: 'tokenSelector',
  get: ({ get }) => {
    const token = get(tokenAtom);
    return token;
  },
  set: ({ set }, val: string | null | DefaultValue) => {
    if (val instanceof DefaultValue) {
      localStorage.removeItem('token');
    } else if (val) {
      localStorage.setItem('token', val);
      sessionStorage.removeItem('token');
    } else {
      localStorage.removeItem('token');
    }
    set(tokenAtom, val);
  },
});
