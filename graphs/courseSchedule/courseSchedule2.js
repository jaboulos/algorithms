/*
There are a total of numCourses courses you have to take, labeled from 0 to numCourses-1.
Some courses may have prerequisites, for example to take course 0 you have to first take course 1, which is expressed as a pair: [0,1]
Given the total number of courses and a list of prerequisite pairs, is it possible for you to finish all courses?

Example 1:
Input: numCourses = 2, prerequisites = [[1,0]]
Output: true
Explanation: There are a total of 2 courses to take.
             To take course 1 you should have finished course 0. So it is possible.

Example 2:
Input: numCourses = 2, prerequisites = [[1,0],[0,1]]
Output: false
Explanation: There are a total of 2 courses to take.
             To take course 1 you should have finished course 0, and to take course 0 you should
             also have finished course 1. So it is impossible.


Constraints:
The input prerequisites is a graph represented by a list of edges, not adjacency matrices. Read more about how a graph is represented.
You may assume that there are no duplicate edges in the input prerequisites.
1 <= numCourses <= 10^5
*/

// steps
// build adjacency list
// do dfs traversal

// looking for a cycle
// use dfs
// turn input into adjList
// n = length
const buildAdjList = (n, edges) => {
  // create array of size n and populate it with empty arrays
  const adjList = Array.from({ length: n }, () => []);
  // iterate over edges
  for (let edge of edges) {
    // pull out src and dest from edge
    let [src, dest] = edge;
    // directed graph, set src to the dest
    adjList[src].push(dest);
  }
  // converts list of edges into an adjacency list
  return adjList;
};

// want to check for a back edge, if there is a presence of a backedge, means theres a cycle
// to check for backedge need a variable that stores the arrival and departure (like a timestamp)
// every time we hit dfs function, increment arrive
const dfsHasCycle = (node, adjList, visited, arrive, depart) => {
  arrive[node]++;
  visited[node] = true;

  // implement a classic dfs
  for (let neighbor of adjList[node]) {
    if (!visited[neighbor]) {
      visited[neighbor] = true;
      // if it has a neighbor return true
      if (dfsHasCycle(neighbor, adjList, visited, arrive, depart)) return true;
    } else {
      // if we have not visited, did it depart
      // checking if there is a backedge
      if (depart[neighbor] === 0) return true;
    }
  }
  // after traversing the path from a particular noode, increment depart
  depart[node]++;
  // if we go through all of this, want to return false
  return false;
};

const canFinish = (numCourses, prerequisites) => {
  // build graph
  const adjList = buildAdjList(numCourses, prerequisites);
  // create visited object
  const visited = {};
  const arrive = Array.from({ length: numCourses }, () => 0);
  const depart = Array.from({ length: numCourses }, () => 0);

  // common dfs graph traversal
  for (let vertex = 0; vertex < adjList.length; vertex++) {
    // check if we traverse from this vertex node, if there is a cycle
    if (!visited[vertex]) {
      // if there is a cycle return false, means we cannot finish courses
      if (dfsHasCycle(vertex, adjList, visited, arrive, depart)) return false;
    }
  }
  // if there is no cycle then return true
  return true;
};
