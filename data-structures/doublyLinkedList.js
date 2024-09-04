class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}

class DoublyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.tail.next = newNode;
      newNode.prev = this.tail;
      this.tail = newNode;
    }
    this.length++;

    return this;
  }

  pop() {
    if (this.length === 0) return undefined;

    const poppedNode = this.tail;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = poppedNode.prev;
      this.tail.next = null;
      poppedNode.prev = null;
    }
    this.length--;

    return poppedNode;
  }

  unshift(val) {
    const newNode = new Node(val);

    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head.prev = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length++;

    return this;
  }

  shift() {
    if (this.length === 0) return undefined;

    const shiftednode = this.head;

    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = shiftednode.next;
      this.head.prev = null;
      shiftednode.next = null;
    }
    this.length--;

    return shiftednode;
  }

  get(idx) {
    if (idx < 0 || idx >= this.length) return null;

    const midPoint = (this.length - 1) / 2;
    let current;

    if (idx <= midPoint) {
      current = this.head;
      for (let i = 0; i < idx; i++) current = current.next;
    } else {
      current = this.tail;
      for (let i = this.length - 1; i > idx; i--) current = current.prev;
    }

    return current;
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
    const nextNode = preNode.next;
    const newNode = new Node(val);

    (preNode.next = newNode), (newNode.prev = preNode);
    (newNode.next = nextNode), (nextNode.prev = newNode);
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

    (preNode.next = nextNode), (nextNode.prev = preNode);
    (removedNode.prev = null), (removedNode.next = null);
    this.length--;

    return removedNode;
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
