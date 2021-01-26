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

  // iterative
  dfsIterative(s) {
    this.visited.fill(false);
    this.result = [];
    // make stack to perform traversal iteratively
    let stack = [s];

    // run while loop until no items in stack
    while (stack.length != 0) {
      // pop item or vertex off the stack
      s = stack.pop();
      // visit vertex if it hasnt already been visited
      if (!this.visited[s]) {
        this.result.push(s);
        this.visited[s] = true;
      }
      // take out all adjacent vertices from the list we have at index s in this edges list
      // run loop that goes to the length of the list at index s
      for (let i = 0; i < this.edges[s].length; i++) {
        // take out vertices one by one
        let adj = this.edges[s][i];
        // checks whether vertex is already visited or not
        if (!this.visited[adj]) {
          // if not visited, add vertex into the stack
          // so that it gets popped in the next iteration of this while loop
          // so that it gets visited
          stack.push(adj);
        }
      }
    }
    // console.log(this.result);
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
graph.dfsIterative(0);
console.log(graph.result);

// time O(V+E)
// space O(V)
