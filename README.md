# Data-Structures-and-Algorithms

## 1. Big O

## 2. 문제 해결 접근법

1. Understand the Problem
2. Examples
3. Break it Down
4. Solve
5. Refactor

## 3. 문제 해결 패턴

1. 빈도 수 세기

```js
const frequencyCounter = {};

arr.forEach((each) => {
  frequencyCounter[each] = (frequencyCounter[each] || 0) + 1;
});
```

2. 다중 포인터

```js
function sumZero(arr) {
  let left = 0;
  let right = arr.length - 1;

  while (left < right) {
    if (arr[left] + arr[right] > 0) right--;
    if (arr[left] + arr[right] < 0) left++;
    if (arr[left] + arr[right] === 0) return [arr[left], arr[right]];
  }

  return undefined;
}
```

3. Sliding Window

> 연속적인 자료구조에서 하위 집합을 찾는 경우

```js
function maxSubarraySum(arr, n) {
  if (arr.length < n) return null;

  const window = arr.slice(0, n);
  let max = window.reduce((a, c) => a + c, 0);
  let temp = max;

  for (let i = 0; i < arr.length - n; i++) {
    temp = temp - arr[i] + arr[n + i];
    if (max < temp) max = temp;
  }

  return max;
}
```

4. Divide and Conquer

> 큰 규모의 자료구조를 작은 조각으로 세분하여 작업

```js
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const midPoint = Math.floor((left + right) / 2);
    if (arr[midPoint] === target) return midPoint;
    if (arr[midPoint] < target) left = midPoint + 1;
    if (arr[midPoint] > target) right = midPoint - 1;
  }

  return -1;
}
```

5. Dynamic Programming

> 기억하며 풀기
> 큰 문제를 작은 문제로 쪼개서 그 답을 저장해두고 재활용

**DP의 사용 조건**

1. 겹치는 부분 문제
   DP는 기본적으로 문제를 나누고 그 문제의 결과 값을 재활용해서 전체 탑을 구한다.
   따라서 동일한 작은 문제들이 반복하여 나타나는 경우에 사용 가능하다.
2. 최적 부분 구조
   부분 문제의 최적 결과 값을 사용해 전체 문제의 최적 결과를 낼 수 있는 경우

```js
function fib(n, memo = [undefined, 1, 1]) {
  if (memo[n] !== undefined) return memo[n];

  const res = fib(n - 1, memo) + fib(n - 2, memo);
  memo[n] = res;

  return res;
}
```

---

## 4. 재귀

**재귀 구현**

1. base case
2. 입력값이 달라야 함

- helper 메서드

```js
function collectOddValues(arr) {
  let result = [];

  const helper = (helperInput) => {
    if (helperInput.length === 0) return;
    if (helperInput[0] % 2 !== 0) result.push(helperInput[0]);
    helper(helperInput.slice(1));
  };

  helper([...arr]);
  return result;
}
```

- 순수 재귀

```js
function collectOddValues(arr) {
  let newArr = [];

  if (arr.length === 0) return newArr;
  if (arr[0] % 2 !== 0) newArr.push(arr[0]);

  newArr = newArr.concat(collectOddValues(arr.slice(1)));
  return newArr;
}
```

## 5. Binary Search

```js
function binarySearch(arr, target) {
  let left = 0;
  let right = arr.length - 1;

  while (left <= right) {
    const midPoint = Math.floor((left + right) / 2);
    if (arr[midPoint] === target) return midPoint;
    if (arr[midPoint] < target) left = midPoint + 1;
    if (arr[midPoint] > target) right = midPoint - 1;
  }

  return -1;
}

console.log(binarySearch([1, 2, 3, 4, 5], 5));
```

## 6. Sort

정렬 시각화 영상: https://www.youtube.com/watch?v=kPRA0W1kECg
정렬 애니메이션: https://www.toptal.com/developers/sorting-algorithms

### 1) Bubble Sort

앞뒤 비교로 swap하고 뒤에서부터 정렬한다.

시간 복잡도: O(n^2)
Best Case: O(n)

### 2) Selection Sort

최소값을 찾은 뒤 해당 인덱스의 값과 swap

시간 복잡도: O(n^2)
Best Case: O(n^2)

### 3) Insertion Sort

한 번에 하나의 항목을 올바른 위치에 삽입해서 배열의 정렬된 부분을 점진적으로 구축

시간 복잡도: O(n^2)
Best Case: O(n)

## 4) Merge Sort

Idea: 정렬된 배열을 합치는 것은 쉽다.

```js
function mergeSort(arr) {
  if (arr.length <= 1) return arr;
  const midIdx = Math.floor(arr.length / 2);
  const left = mergeSort(arr.slice(0, midIdx));
  const right = mergeSort(arr.slice(midIdx));
  return merge(left, right);
}
```

시간 복잡도: O(nlogn)

## 5) Quick Sort

1. 리스트 안에 있는 한 요소를 선택한다. 이렇게 고른 원소를 피벗(pivot) 이라고 한다.
2. 피벗의 위치를 옮겨 왼쪽에는 작은 요소를 오른쪽에는 큰 요소가 위치하게 한다.
3. 피벗을 제외한 왼쪽 리스트와 오른쪽 리스트를 다시 정렬한다.
4. 분할이 불가능할 때까지 반복한다.

시간 복잡도: O(nlogn)

## 6) Radix Sort

버킷과 자릿수를 가지고 비교가 아닌 방식으로 정렬

시간 복잡도: O(nk)

n: 배열의 길이
k: 자릿수

---

## 7. Singly Linked List

```js
class SinglyLinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }
}
```

Insertion: O(1)
Removal: shift - O(1) / pop - O(n)
Searching: O(n)
Access: O(n)

## 8. Doubly Linked List

```js
class Node {
  constructor(val) {
    this.val = val;
    this.next = null;
    this.prev = null;
  }
}
```

Insertion: O(1)
Removal: O(1)
Searching: O(n)
Access: O(n)

## 9. Stack & Queue

## 10. Binary Search Tree

이진 트리의 종류 중 하나
왼쪽에서 오른쪽으로 오름차순으로 트리를 구성

## 11. Tree Traversal

- BFS: Queue 사용
- DFS: 재귀 사용
  - PreOrder: 방문한 순서대로
  - PostOrder: Root가 맨 마지막이도록
  - InOrder: 왼쪽에서 오른쪽으로

## 12. Binary Heaps

Heap은 트리 구조의 일종
최대 이진 힙에서는 부모가 자식보다 값이 큰 특징을 가지고 있다.

Binary Heaps => Priority Queue

## 13. Hash Tables

Idea: 인풋을 해시 함수를 통해 특정 해시 값으로 바꾸기

**충돌 처리**

1. Separate Chaining: 같은 해시 값을 가지는 인풋들을 배열로 저장
2. Linear Probing: 충돌이 발생하면 다음 빈칸을 확인

## 14. Graph

그래프를 표현하는 방법: adjacencyMatrix, adjacencyList

## 15. Dijkstra's Algorithm

최단 거리 알고리즘 / Dynamic Programming

**준비물**

- 각 Vertex 별 최단 거리
- 최단 거리에 해당하는 이전 Vertex를 저장하고 있는 Object
- 우선 순위 Queue
