class HashTable {
  constructor(size = 53) {
    this.keyMap = new Array(size);
  }

  set(key, value) {
    if (this.get(key) !== undefined) {
      throw new Error("key는 중복될 수 없습니다.");
    }

    const idx = this.#hash(key);
    if (!this.keyMap[idx]) this.keyMap[idx] = [];
    this.keyMap[idx].push([key, value]);
  }

  get(key) {
    const idx = this.#hash(key);

    if (!this.keyMap[idx]) return undefined;

    for (const each of this.keyMap[idx]) {
      if (each[0] === key) return each[1];
    }

    return undefined;
  }

  keys() {
    const result = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      const each = this.keyMap[i];
      if (!each) continue;

      for (let j = 0; j < each.length; j++) {
        result.push(each[j][0]);
      }
    }

    return result;
  }

  values() {
    const result = [];

    for (let i = 0; i < this.keyMap.length; i++) {
      const each = this.keyMap[i];
      if (!each) continue;

      for (let j = 0; j < each.length; j++) {
        if (!result.includes(each[j][1])) result.push(each[j][1]);
      }
    }

    return result;
  }

  #hash(key) {
    let total = 0;
    let PRIME = 31;

    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let value = char.charCodeAt(0);
      total = (total * PRIME + value) % this.keyMap.length;
    }

    return total;
  }
}
