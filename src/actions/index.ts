export const PING = 'PING';

export const testAction = (pl: any) => {
  return {
    type: 'TEST',
    payload: {pl},
  };
};

export const ping = () => {
  return {
    type: PING,
  };
};
