/*
Given n nodes labeled from 0 to n - 1 and a list of undirected edges (each edge is a pair of nodes), write a function to find the number of connected components in an undirected graph.

Example 1:
Input: n = 5 and edges = [[0, 1], [1, 2], [3, 4]]

     0          3
     |          |
     1 --- 2    4

Output: 2

Example 2:
Input: n = 5 and edges = [[0, 1], [1, 2], [2, 3], [3, 4]]

     0           4
     |           |
     1 --- 2 --- 3

Output:  1

Note:
You can assume that no duplicate edges will appear in edges. Since all edges are undirected, [0, 1] is the same as [1, 0] and thus will not appear together in edges.
*/

/*
 * @param {number} n
 * @param {number[][]} edges
 * @return {number}
 */

// the idea is that this is a template that can be reused
// 1) build adjList
// 2) traverse the graph
// 3) have a main function

// can apply to different questions, ex: num of islands, num of provinces
// can be used for questions that are asking for how many regions

// want to traverse this
// first take these edges, inputs we have, and build adjList and traverse the graph
// every time we do a traversal, increment the number of regions

// first build adjList
const buildAdjList = (n, edges) => {
  const adjList = Array.from({ length: n }, () => []);
  // iterate over each of the edges and fill in adjList
  for (let edge of edges) {
    // pull out src and destination
    // pulling out each inner array
    // setting 0th index to the source and first index to dest, these are vertices
    let [src, dest] = edge;
    // map src and dest to adjList
    adjList[src].push(dest);
    // mirror this bc its an undirected graph
    // if this was a directed graph we would not mirror it, and exclude the line below
    adjList[dest].push(src);
  }
  // return adjList
  return adjList;
};

// going with bfs
// node is starting point, adjList is graph, also will take visited hash
const bfs = (node, adjList, visited) => {
  // use a queue
  const q = [node];
  // add this node to visited since its the starting node its already visited
  visited[node] = true;

  // traverse through queue
  // nothing needs to be returned, just traversing through the graph (adjList)
  // from the input node from the vertex we want to start at
  // Do we traverse the entire graph or part of it
  // when we go to the next node, how far do we traverse?
  // -> everytime we call bfs starting from a particular node we can tell if they are connected or not
  while (q.length) {
    // shift off first element in queue
    let currNode = q.shift();
    // traverse through all of its neighbors
    for (let neighbor of adjList[currNode]) {
      // check if its visited or not
      if (!visited[neighbor]) {
        // if neighbor has not been visited, mark as visited and then add to queue
        visited[neighbor] = true;
        // push neighbor into the queue
        q.push(neighbor);
      }
    }
  }
};

var countComponents = function (n, edges) {
  // build adjList
  const adjList = buildAdjList(n, edges);
  // creat visited hash
  const visited = {};
  // want the number of connected components
  let componentCount = 0;
  // traverse through adjList
  for (let vertex = 0; vertex < adjList.length; vertex++) {
    // check if we've been to this vertex before
    // check the hash
    if (!visited[vertex]) {
      // if not visited add to count
      componentCount++;
      // then traverse BFS through adjList
      bfs(vertex, adjList, visited);
    }
  }
  return componentCount;
};
