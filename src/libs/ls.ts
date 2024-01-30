export class LS {
  static get(key: string) {
    if (global?.window !== undefined) {
      return localStorage.getItem(key);
    }
  }
  static set(key: string, value: string) {
    if (global?.window !== undefined) {
      localStorage.setItem(key, value);
    }
  }

  static deleteAll() {
    if (global?.window !== undefined) {
      localStorage.clear();
    }
  }
}
