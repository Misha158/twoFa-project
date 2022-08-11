class HashTable {
  constructor() {
    this.table = new Array(127);
    this.size = 0;
  }

  _hash(key) {
    let hash = 0;

    for (let i = 0; i < key.length; i++) {
      hash += key.charCodeAt(i);
    }

    return hash % this.table.length;
  }

  set(key, value) {
    const idx = this._hash(key);
    this.table[idx] = [key, value];
    this.size++;
  }

  get(key) {
    const idx = this._hash(key);
    return this.table[idx];
  }

  remove(key) {
    const index = this._hash(key);

    if (this.table[index] && this.table[index].length) {
      this.table[index] = undefined;
      this.size--;
      return true;
    } else {
      return false;
    }
  }
}

/*const Dictionary = new HashTable();
const Dictionary2 = new HashTable();

Dictionary.set("misha", "tf2");
Dictionary.set("stas", "dota2");

Dictionary2.set("cat", "koshkin");

// console.log(Dictionary._hash("aa"));
console.log(Dictionary.get("misha"));
console.log(Dictionary2.get("cat"));*/

const Dictionary3 = new HashTable();

Dictionary3.set("Spain", "1");
Dictionary3.set("ǻ", "2");

console.log(Dictionary3.get("Spain"));

// TODO How to Handle Index Collision
// https://www.freecodecamp.org/news/javascript-hash-table-associative-array-hashing-in-js/
