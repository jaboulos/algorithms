/*
There are n cities. Some of them are connected, while some are not. If city a is connected directly with city b, and city b is connected directly with city c, then city a is connected indirectly with city c.
A province is a group of directly or indirectly connected cities and no other cities outside of the group.
You are given an n x n matrix isConnected where isConnected[i][j] = 1 if the ith city and the jth city are directly connected, and isConnected[i][j] = 0 otherwise.
Return the total number of provinces.

Example 1:
Input: isConnected = [[1,1,0],[1,1,0],[0,0,1]]
Output: 2

Example 2:
Input: isConnected = [[1,0,0],[0,1,0],[0,0,1]]
Output: 3


Constraints:
1 <= n <= 200
n == isConnected.length
n == isConnected[i].length
isConnected[i][j] is 1 or 0.
isConnected[i][i] == 1
isConnected[i][j] == isConnected[j][i]
*/

/*
 * @param {number[][]} isConnected
 * @return {number}
 */

// convert input into an adjList
// using dfs
const findCircleNum = (isConnected) => {
  // build adjList with helper function
  const adjList = buildAdjList(isConnected);
  // create visited obj
  const visited = {};
  let provinceCount = 0;

  // traverse the graph
  // NOTE: very common pattern, want to familiarize with this so it can be applied to similar problems
  for (let vertex = 0; vertex < adjList.length; vertex++) {
    // want to check if we've visited this node
    if (!visited[vertex]) {
      // if we have not visited, means we are on a province
      provinceCount++;
      dfs(vertex, adjList, visited);
    }
  }
  return provinceCount;
};

// doesnt need to return anything
// this updates this visited hash table, everytime we traverse this graph
// if it goes through entire graph, means we've hit every node and its connected
// if it doesnt means we move on to next node and we have a new province
const dfs = (node, adjList, visited) => {
  // add node to visited object
  visited[node] = true;
  // traverse through this graph from the input node
  for (let neighbor of adjList[node]) {
    // if we have not visited this neighbor
    if (!visited[neighbor]) {
      visited[neighbor] = true;
      // call dfs on neighbor
      dfs(neighbor, adjList, visited);
    }
  }
};

// tricky part, need to build adjList
// filtering out the edge that is mapped to whichever node its at...
// ex at node 0, filter out index 0 of that sub array
const buildAdjList = (edges, n = edges.length) => {
  // create an array of length n (length of isConnected), and populating it with separate arrays
  const adjList = Array.from({ length: n }, () => []);
  // iterate over edges
  for (let i = 0; i < edges.length; i++) {
    // want to get edges out of each edge
    adjList[i].push(...getEdges(i, edges[i]));
  }
  return adjList;
};

const getEdges = (idx, edge) => {
  // create return array
  const edges = [];
  // want to iterate over these edges
  for (let i = 0; i < edge.length; i++) {
    // check if i is === idx input, we want to continue/skip
    if (idx === i) continue;
    // 0s are not connections in the sub array input
    if (edge[i] === 0) continue;
    // want index of subarray
    edges.push(i);
  }
  return edges;
};
