// construct the graph
class Graph {
  constructor(noOfVertices) {
    this.V = noOfVertices;
    this.edges = [];
    this.visited = new Array(this.V).fill(false); // keep track of visited vertices
    this.result = []; // store the result

    // initialize each cell of edges list with liist @44sec
    for (let i = 0; i < this.V; i++) {
      this.edges.push([]);
    }
  }

  // add edges into graph
  // src is vertex where edge starts, dest is vertex where edge ends
  addEdge(src, dest) {
    // dest is added as adjacent vertex to this source
    this.edges[src].push(dest);
  }

  // recursive function
  dfsTraversal(v) {
    // each time visit vertex mark it as true
    this.visited[v] = true;
    this.result.push(v);

    // this goes on until all vertices are visited
    for (let i = 0; i < this.edges[v].length; i++) {
      // fetch all vertices froom the list that is present at index 'v' in the graph
      let adj = this.edges[v][i];
      // get the adjacent vertices one by one and check if its not visited
      // if its not visited,then visit it
      if (!this.visited[adj]) {
        // call dfsTraversal recursively to visit this vertex
        this.dfsTraversal(adj);
      }
    }
  }
}

// create a graph
// has 12 vertices
var graph = new Graph(12);

// add edges to the graph
graph.addEdge(0, 1);
graph.addEdge(0, 2);
graph.addEdge(0, 4);
graph.addEdge(1, 3);
graph.addEdge(1, 9);
graph.addEdge(1, 4);
graph.addEdge(1, 6);
graph.addEdge(2, 5);
graph.addEdge(3, 6);
graph.addEdge(4, 1);
graph.addEdge(4, 7);
graph.addEdge(5, 8);
graph.addEdge(7, 10);
graph.addEdge(10, 11);

// traverse graph, pass in starting vertex
graph.dfsTraversal(0);
console.log(graph.result);

// time O(V+E)
// space O(V)
