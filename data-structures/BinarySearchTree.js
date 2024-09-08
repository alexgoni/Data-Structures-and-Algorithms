class Node {
  constructor(value) {
    this.value = value;
    this.left = null;
    this.right = null;
  }
}

class BinarySearchTree {
  constructor() {
    this.root = null;
  }

  insert(value) {
    const newNode = new Node(value);

    if (!this.root) {
      this.root = newNode;
      return this;
    }

    let current = this.root;

    while (true) {
      if (current.value === value) return undefined;

      if (current.value > value) {
        if (!!current.left) current = current.left;
        else {
          current.left = newNode;
          return this;
        }
      }

      if (current.value < value) {
        if (!!current.right) current = current.right;
        else {
          current.right = newNode;
          return this;
        }
      }
    }
  }

  find(value) {
    if (!this.root) return false;

    let current = this.root;

    while (true) {
      if (current.value === value) return current;

      if (current.value > value) {
        if (!!current.left) current = current.left;
        else return false;
      }

      if (current.value < value) {
        if (!!current.right) current = current.right;
        else return false;
      }
    }
  }
}
