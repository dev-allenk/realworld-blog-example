const session = {
  get(key: string) {
    return JSON.parse(window.sessionStorage.getItem(key)!);
  },
  set(key: string, value: any) {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  },
};
export default session;
