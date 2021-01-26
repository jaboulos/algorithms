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

  // s is vertex to start traversal
  bfsTraversal(s) {
    // add first node to queue
    let queue = [s];
    // when its added to queue, mark it as true in visited array
    this.visited[s] = true;

    // traverse all vertices present in graph
    while (queue.length != 0) {
      // find current vertex from shifting from queue
      let curr = queue.shift();

      // after getting current vertex, find its adjacent vertices
      // iterate over the list of adjacent vertices at the index for this current vertex
      for (let i = 0; i < this.edges[curr].length; i++) {
        // take vertices one by one from this list inside for loop
        let next = this.edges[curr][i];
        // if this vertex is not visited
        if (!this.visited[next]) {
          // add to queue and mark it as visited
          queue.push(next);
          this.visited[next] = true;
        }
      }
      // add current vertex to result list
      this.result.push(curr);
    }
    console.log(this.result);
  }
}

var graph = new Graph(11);

graph.addEdge(0, 1);
graph.addEdge(1, 4);
graph.addEdge(0, 2);
graph.addEdge(0, 3);
graph.addEdge(1, 5);
graph.addEdge(5, 7);
graph.addEdge(7, 9);
graph.addEdge(2, 6);
graph.addEdge(5, 8);
graph.addEdge(2, 5);
graph.addEdge(7, 10);
graph.addEdge(4, 7);
graph.addEdge(6, 8);

graph.bfsTraversal(0);

// Time: O(V+E)
// Space: O(V)
