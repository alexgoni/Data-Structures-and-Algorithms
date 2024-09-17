class Node {
  constructor(value, priority) {
    this.value = value;
    this.priority = priority;
  }
}

class PriorityQueue {
  constructor() {
    this.values = [];
  }

  enqueue(value, priority) {
    const newNode = new Node(value, priority);
    this.values.push(newNode);
    this.#bubbleUp();

    return this.values;
  }

  dequeue() {
    const extractedValue = this.values[0];
    const poppedValue = this.values.pop();

    if (this.values.length === 0) return extractedValue;

    this.values[0] = poppedValue;
    this.#sinkDown();

    return extractedValue;
  }

  #bubbleUp() {
    let currentIdx = this.values.length - 1;
    const currentElement = this.values[currentIdx];

    while (currentIdx > 0) {
      const parentIdx = Math.floor((currentIdx - 1) / 2);
      const parentElement = this.values[parentIdx];

      if (currentElement.priority >= parentElement.priority) break;

      this.values[parentIdx] = currentElement;
      this.values[currentIdx] = parentElement;

      currentIdx = parentIdx;
    }
  }

  #sinkDown() {
    let currentIdx = 0;
    const currentElement = this.values[currentIdx];
    const length = this.values.length;

    while (true) {
      let leftChildIdx = 2 * currentIdx + 1;
      let rightChildIdx = 2 * currentIdx + 2;
      let leftChildValue, rightChildValue;
      let swap = null;

      if (leftChildIdx < length) {
        leftChildValue = this.values[leftChildIdx];
        if (leftChildValue.priority < currentElement.priority)
          swap = leftChildIdx;
      }

      if (rightChildIdx < length) {
        rightChildValue = this.values[rightChildIdx];
        if (
          (swap === null &&
            rightChildValue.priority < currentElement.priority) ||
          (swap !== null && rightChildValue.priority < leftChildValue.priority)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;

      this.values[currentIdx] = this.values[swap];
      this.values[swap] = currentElement;

      currentIdx = swap;
      leftChildIdx = 2 * currentIdx + 1;
      rightChildIdx = 2 * currentIdx + 2;
    }
  }
}

module.exports = PriorityQueue;
