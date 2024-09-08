class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class Queue {
  constructor() {
    this.first = null;
    this.last = null;
    this.size = 0;
  }

  enqueue(val) {
    const newNode = new Node(val);

    if (this.size === 0) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last.next = newNode;
      this.last = newNode;
    }

    return ++this.size;
  }

  dequeue() {
    if (this.size === 0) return null;
    if (this.size === 1) this.last = null;

    const removedNode = this.first;

    this.first = removedNode.next;
    this.size--;

    return removedNode.val;
  }
}
