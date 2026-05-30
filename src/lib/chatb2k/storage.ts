const KEY = "chatb2k_state";

export const saveState = (data: any) => {
  localStorage.setItem(KEY, JSON.stringify(data));
};

export const loadState = () => {
  const raw = localStorage.getItem(KEY);
  return raw ? JSON.parse(raw) : {};
};

export const clear
