const session = {
  get(key: string) {
    return window.sessionStorage.getItem(JSON.parse(key));
  },
  set(key: string, value: any) {
    window.sessionStorage.setItem(key, JSON.stringify(value));
  },
};
export default session;
