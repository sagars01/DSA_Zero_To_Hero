const Graph = require('../../src/Graph/Graph');

describe('Graph: Graph Class Implementation', () => {
  test('should implement graph', () => {
    const graph = new Graph();
    const vertices = ['A', 'B', 'C', 'D', 'E'];

    for (let i = 0; i < vertices.length; i++) {
      graph.addVertex(vertices[i]);
    }

    graph.addEdge('A', 'B');
    graph.addEdge('B', 'C');
    graph.addEdge('C', 'D');
    graph.addEdge('D', 'E');

    graph.printGraph();
  });
});
