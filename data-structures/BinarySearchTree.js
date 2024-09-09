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

  BFS() {
    const result = [];
    const queue = [];
    let current = this.root;

    queue.push(current);

    while (queue.length !== 0) {
      current = queue.shift();
      result.push(current.value);
      if (current.left) queue.push(current.left);
      if (current.right) queue.push(current.right);
    }

    return result;
  }

  DFSPreOrder() {
    const result = [];

    const helper = (node) => {
      result.push(node.value);
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
    };

    helper(this.root);

    return result;
  }

  DFSPostOrder() {
    const result = [];

    const helper = (node) => {
      if (node.left) helper(node.left);
      if (node.right) helper(node.right);
      result.push(node.value);
    };

    helper(this.root);

    return result;
  }

  DFSInOrder() {
    const result = [];

    const helper = (node) => {
      if (node.left) helper(node.left);
      result.push(node.value);
      if (node.right) helper(node.right);
    };

    helper(this.root);

    return result;
  }
}
