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

const findCircleNum = (isConnected) => {
  const adjList = buildAdjList(isConnected);
  const visited = {};
  let provinceCount = 0;

  for (let vertex = 0; vertex < adjList.length; vertex++) {
    if (!visited[vertex]) {
      provinceCount++;
      dfs(vertex, adjList, visited);
    }
  }
  return provinceCount;
};

const dfs = (node, adjList, visited) => {
  visited[node] = true;
  for (let neighbor of adjList[node]) {
    if (!visited[neighbor]) {
      visited[neighbor] = true;
      dfs(neighbor, adjList, visited);
    }
  }
};

const buildAdjList = (edges, n = edges.length) => {
  const adjList = Array.from({ length: n }, () => []);
  for (let i = 0; i < edges.length; i++) {
    adjList[i].push(...getEdges(i, edges[i]));
  }
  return adjList;
};

const getEdges = (idx, edge) => {
  const edges = [];
  for (let i = 0; i < edge.length; i++) {
    if (idx === i) continue;
    if (edge[i] === 0) continue;
    edges.push(i);
  }
  return edges;
};
