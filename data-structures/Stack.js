class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Stack {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }

    return ++this.size;
  }

  pop() {
    if (this.size === 0) return null;
    if (this.size === 1) this.last = null;

    const poppedNode = this.first;

    this.first = poppedNode.next;
    this.size--;

    return poppedNode.val;
  }
}
