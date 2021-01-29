/*
Given an undirected graph, return true if and only if it is bipartite.
Recall that a graph is bipartite if we can split its set of nodes into two independent subsets A and B, such that every edge in the graph has one node in A and another node in B.
The graph is given in the following form: graph[i] is a list of indexes j for which the edge between nodes i and j exists.  Each node is an integer between 0 and graph.length - 1.  There are no self edges or parallel edges: graph[i] does not contain i, and it doesn't contain any element twice.

Example 1:
Input: graph = [[1,3],[0,2],[1,3],[0,2]]
Output: true
Explanation: We can divide the vertices into two groups: {0, 2} and {1, 3}.

Example 2:
Input: graph = [[1,2,3],[0,2],[0,1,3],[0,2]]
Output: false
Explanation: We cannot find a way to divide the set of nodes into two independent subsets.

Constraints:
1 <= graph.length <= 100
0 <= graph[i].length < 100
0 <= graph[i][j] <= graph.length - 1
graph[i][j] != i
All the values of graph[i] are unique.
The graph is guaranteed to be undirected.
*/

/*
 * @param {number[][]} graph
 * @return {boolean}
 */

// vertices need to go in 2 separate groups
// edges can start in one group and end in the other but cannot start and end in the same group

// hint: traverse over graph and see if there is an odd length cycle
// if odd length cycles, cannot be bipartite, if even, it is bipartite

// hint 2: Also, if it is a tree with no cycles, it is bipartite
// hint 3: If you have an edge in the same level of a tree, cannot be bipartite
const isBipartite = (graph) => {
  // input is a graph so no need to build adjList
  const visited = {};
  const distance = {};

  // basic template for traversing through a graph
  for (let vertex = 0; vertex < graph.length; vertex++) {
    // if we have not visited vertex, want to check isGraphBipartite
    if (!visited[vertex]) {
      if (!isGraphBipartite(vertex, graph, visited, distance)) return false;
    }
  }
  // if we've traversed the entire graph and cannot find an odd cycle, we can assume that the graph is bipartite
  return true;
};

// helper function to traverse every vertex and check if there is an odd cycle
const isGraphBipartite = (node, graph, visited, distance) => {
  // use bfs traversal here
  const q = [node];
  visited[node] = true;
  distance[node] = 0; // distance to source node is 0

  // bfs template type traversal
  while (q.length) {
    let currNode = q.shift();
    // add currNode to visited
    visited[currNode] = true;

    // traverse neighbors of currNode
    for (let neighbor of graph[currNode]) {
      // if we have not visited this neighbor
      // add to visited
      if (!visited[neighbor]) {
        // add to visited
        visited[neighbor] = true;
        // update distance, distance is distance from the node + 1 (source node + 1)
        distance[neighbor] = distance[currNode] + 1;
        // then push this neighbor into the q
        q.push(neighbor);
      } else {
        // if the distance from the neighbor is the same as the distance from the current node
        // means the graph is not bipartite, means there is a same level cross edge
        // check for same level cross edge
        if (distance[neighbor] === distance[currNode]) return false; // step through problem so this line makes sense, very important
      }
    }
  }
  return true;
};
