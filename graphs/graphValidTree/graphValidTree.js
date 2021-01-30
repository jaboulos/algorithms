/*
Given n nodes labeled from 0 to n-1 and a list of undirected edges (each edge is a pair of nodes), write a function to check whether these edges make up a valid tree.

Example 1:
Input: n = 5, and edges = [[0,1], [0,2], [0,3], [1,4]]
Output: true

Example 2:
Input: n = 5, and edges = [[0,1], [1,2], [2,3], [1,3], [1,4]]
Output: false

Note: you can assume that no duplicate edges will appear in edges. Since all edges are undirected, [0,1] is the same as [1,0] and thus will not appear together in edges.
*/
/*
 * @param {number} n
 * @param {number[][]} edges
 * @return {boolean}
 */
////////////////////////////////////////////////////////////////////////
// note: what is the difference between a tree and a graph?
// a tree is a graph without any cycles

// things to check for
// 1) convert these inputs into a graph
// traverse graph and detect cycles -> if cycles not a valid tree

// 2) cannot have more than 1 region in a tree -> if more than 1 region not a valid tree

// steps
// 1) convert input into adjList

const buildAdjList = (n, edges) => {
  const adjList = Array.from({ length: n }, () => []);
  // iterate over edges
  for (let edge of edges) {
    // pull out src and dest of edge
    let [src, dest] = edge;
    // map to adjList
    adjList[src].push(dest);
    // bc this is undirected, need to mirror
    adjList[dest].push(src);
  }
  return adjList;
};

// follows a basic graph traversal template
const validTree = (n, edges) => {
  // build adjList
  const adjList = buildAdjList(n, edges);
  // keep track of vertices visited
  const visited = {};
  // track parents to determine if theres a cross edge (cycle)
  const parent = {};
  // track if theres disconnected components
  let regions = 0;

  for (let vertex = 0; vertex < adjList.length; vertex++) {
    if (!visited[vertex]) {
      // if not visited increase region count
      regions++;
      // this also means that this is not a valid tree
      if (regions > 1) return false;
      // if theres a cycle fromt his vertex node, also means not a valid tree
      // parent input helps us determine if we have a crossedge or not
      if (isBfsCycle(vertex, adjList, visited, parent)) return false;
    }
  }
  // if make it through entire loop and theres 1 region, it is a valid tree
  return true;
};

const isBfsCycle = (node, adjList, visited, parent) => {
  const q = [node];
  while (q.length) {
    let currNode = q.shift();
    // update visited that way we dont repeat nodes we've already visited
    visited[currNode] = true;

    // iterate all the neighbors from this currNode
    for (let neighbor of adjList[currNode]) {
      // have we been to this neighbor before
      if (!visited[neighbor]) {
        visited[neighbor] = true;
        // update parent
        parent[neighbor] = currNode;
        // add neighbor to queue
        q.push(neighbor);
      } else {
        // check if there is a crossedge
        // if neighbor and parent of currNode do not equal each other, we can assume there is a crossedge
        if (neighbor !== parent[currNode]) return true; // this is the important line here, lets us know if there is a crossedge (cycle)
      }
    }
  }
  return false;
};
