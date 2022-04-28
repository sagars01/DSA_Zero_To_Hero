/**
 *
 * @description This is the implementation of Graph data structure.
 * @author sagars01
 *
 */

class Graph {
  constructor(n) {
    this.noOfVertices = n || 0;
    this.adjacentList = new Map(); // the main graph is stored
  }

  addVertex(value) {
    this.adjacentList.set(value, []);
    this.noOfVertices += 1;
  }

  addEdge(vertex, edge) {
    if (!this.adjacentList.has(vertex))
      return ` ${vertex} vertex doesn't exists`;

    if (!this.adjacentList.has(edge)) return ` ${edge} edge doesn't exists`;

    this.adjacentList.get(vertex).push(edge);
    this.adjacentList.get(edge).push(vertex);
  }

  printGraph() {
    const vertices = this.adjacentList.keys();

    for (let vertex of vertices) {
      const edgesOfVertex = this.adjacentList.get(vertex);
      let c = '';
      for (let edge of edgesOfVertex) {
        c += edge + ' ';
        console.log(vertex + ' -> ' + c);
      }
    }
  }
}

module.exports = Graph;
