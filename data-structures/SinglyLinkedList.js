class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
  }
}

class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }

  pop() {
    if (!this.tail) return undefined;

    let current = this.head;
    let newTail = current;

    while (current.next) {
      newTail = current;
      current = current.next;
    }
    this.tail = newTail;
    this.tail.next = null;
    this.length--;

    if (this.length === 0) {
      this.head = null;
      this.tail = null;
    }

    return current;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;

    return this;
  }

  shift() {
    if (!this.head) return undefined;

    const oldHead = this.head;

    this.head = oldHead.next;
    this.length--;

    if (this.length === 0) this.tail = null;

    return oldHead;
  }

  get(idx) {
    if (idx === undefined || idx < 0 || idx >= this.length) return null;

    let currentIdx = 0;
    let currentNode = this.head;

    while (currentIdx < idx) {
      currentIdx++;
      currentNode = currentNode.next;
    }

    return currentNode;
  }

  set(idx, val) {
    const originalNode = this.get(idx);
    if (!originalNode) return false;

    originalNode.val = val;
    return true;
  }

  insert(idx, val) {
    if (idx < 0 || idx > this.length) return false;
    if (idx === this.length) return !!this.push(val);
    if (idx === 0) return !!this.unshift(val);

    const preNode = this.get(idx - 1);
    const oldNode = preNode.next;
    const newNode = new Node(val);

    preNode.next = newNode;
    newNode.next = oldNode;
    this.length++;

    return true;
  }

  remove(idx) {
    if (idx < 0 || idx > this.length) return undefined;
    if (idx === this.length) return this.pop();
    if (idx === 0) return this.shift();

    const preNode = this.get(idx - 1);
    const removedNode = preNode.next;
    const nextNode = removedNode.next;

    preNode.next = nextNode;
    this.length--;

    return removedNode;
  }

  reverse() {
    let current = this.head;
    let prev = null;
    let next;
    [this.head, this.tail] = [this.tail, this.head];

    for (let i = 0; i < this.length; i++) {
      next = current.next;
      current.next = prev;

      prev = current;
      current = next;
    }

    return this;
  }

  print() {
    const arr = [];
    let current = this.head;

    while (current) {
      arr.push(current.val);
      current = current.next;
    }

    console.log(arr);
  }
}
