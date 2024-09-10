// The left child is stored at 2n + 1
// The right child is at 2n + 2
// The parent is at Math.floor((n - 1) / 2)

class MaxBinaryHeap {
  constructor() {
    this.values = [];
  }

  insert(value) {
    this.values.push(value);
    this.#bubbleUp();

    return this.values;
  }

  extractMax() {
    const extractedValue = this.values[0];
    const poppedValue = this.values.pop();

    if (this.values.length === 0) return extractedValue;

    this.values[0] = poppedValue;
    this.#sinkDown();

    return extractedValue;
  }

  #bubbleUp() {
    let currentIdx = this.values.length - 1;
    const currentValue = this.values[currentIdx];

    while (currentIdx > 0) {
      const parentIdx = Math.floor((currentIdx - 1) / 2);
      const parentValue = this.values[parentIdx];

      if (parentValue >= currentValue) break;

      this.values[parentIdx] = currentValue;
      this.values[currentIdx] = parentValue;

      currentIdx = parentIdx;
    }
  }

  #sinkDown() {
    let currentIdx = 0;
    const currentValue = this.values[currentIdx];
    const length = this.values.length;

    while (true) {
      let leftChildIdx = 2 * currentIdx + 1;
      let rightChildIdx = 2 * currentIdx + 2;
      let leftChildValue, rightChildValue;
      let swap = null;

      if (leftChildIdx < length) {
        leftChildValue = this.values[leftChildIdx];
        if (leftChildValue > currentValue) swap = leftChildIdx;
      }

      if (rightChildIdx < length) {
        rightChildValue = this.values[rightChildIdx];
        if (
          (swap === null && rightChildValue > currentValue) ||
          (swap !== null && rightChildValue > leftChildValue)
        ) {
          swap = rightChildIdx;
        }
      }

      if (swap === null) break;

      this.values[currentIdx] = this.values[swap];
      this.values[swap] = currentValue;

      currentIdx = swap;
      leftChildIdx = 2 * currentIdx + 1;
      rightChildIdx = 2 * currentIdx + 2;
    }
  }
}

const heap = new MaxBinaryHeap();

heap.insert(110);
heap.insert(10);
heap.insert(12);
heap.insert(13);
heap.insert(14);
heap.insert(15);

console.log(heap.extractMax());
console.log(heap.extractMax());
