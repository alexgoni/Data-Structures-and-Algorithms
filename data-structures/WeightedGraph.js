const PriorityQueue = require("./PriorityQueue");

class WeightedGraph {
  constructor() {
    this.adjacencyList = {};
  }

  addVertex(vertex) {
    if (!this.adjacencyList[vertex]) this.adjacencyList[vertex] = [];
  }

  addEdge(vertex1, vertex2, weight) {
    this.adjacencyList[vertex1].push({ node: vertex2, weight });
    this.adjacencyList[vertex2].push({ node: vertex1, weight });
  }

  Dijkstra(start, finish) {
    const distances = {};
    const previous = {};
    const queue = new PriorityQueue();
    const path = [];

    for (let vertex in this.adjacencyList) {
      if (vertex === start) {
        distances[vertex] = 0;
        queue.enqueue(vertex, 0);
      } else {
        distances[vertex] = Number.POSITIVE_INFINITY;
        queue.enqueue(vertex, Number.POSITIVE_INFINITY);
      }

      previous[vertex] = null;
    }

    while (queue.values.length > 0) {
      const current = queue.dequeue().value;

      if (current === finish) {
        let temp = current;

        while (previous[temp]) {
          path.push(temp);
          temp = previous[temp];
        }

        break;
      }

      this.adjacencyList[current].forEach((neighbor) => {
        const newDistance = distances[current] + neighbor.weight;

        if (newDistance < distances[neighbor.node]) {
          distances[neighbor.node] = newDistance;
          previous[neighbor.node] = current;
          queue.enqueue(neighbor.node, newDistance);
        }
      });
    }

    return { path: path.concat(start).reverse(), distance: distances[finish] };
  }
}

const g = new WeightedGraph();

g.addVertex("A");
g.addVertex("B");
g.addVertex("C");
g.addVertex("D");
g.addVertex("E");
g.addVertex("F");

g.addEdge("A", "B", 4);
g.addEdge("A", "C", 2);
g.addEdge("B", "E", 3);
g.addEdge("C", "D", 2);
g.addEdge("C", "F", 4);
g.addEdge("D", "E", 3);
g.addEdge("D", "F", 1);
g.addEdge("E", "F", 1);

console.log(g.Dijkstra("D", "A"));
