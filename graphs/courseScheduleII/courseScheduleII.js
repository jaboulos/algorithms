/*
There are a total of n courses you have to take labelled from 0 to n - 1.
Some courses may have prerequisites, for example, if prerequisites[i] = [ai, bi] this means you must take the course bi before the course ai.
Given the total number of courses numCourses and a list of the prerequisite pairs, return the ordering of courses you should take to finish all courses.
If there are many valid answers, return any of them. If it is impossible to finish all courses, return an empty array.

Example 1:
Input: numCourses = 2, prerequisites = [[1,0]]
Output: [0,1]
Explanation: There are a total of 2 courses to take. To take course 1 you should have finished course 0. So the correct course order is [0,1].

Example 2:
Input: numCourses = 4, prerequisites = [[1,0],[2,0],[3,1],[3,2]]
Output: [0,2,1,3]
Explanation: There are a total of 4 courses to take. To take course 3 you should have finished both courses 1 and 2. Both courses 1 and 2 should be taken after you finished course 0.
So one correct course order is [0,1,2,3]. Another correct ordering is [0,2,1,3].

Example 3:
Input: numCourses = 1, prerequisites = []
Output: [0]


Constraints:
1 <= numCourses <= 2000
0 <= prerequisites.length <= numCourses * (numCourses - 1)
prerequisites[i].length == 2
0 <= ai, bi < numCourses
ai != bi
All the pairs [ai, bi] are distinct.
*/

/*
 * @param {number} numCourses
 * @param {number[][]} prerequisites
 * @return {number[]}
 */

//build adjList
// n is equiv to numCourses, edges is equiv to prerequisites
const buildAdjList = (n, edges) => {
  // create adjacency list (graph)
  const adjList = Array({ length: n }, () => []);
  for (let edge of edges) {
    let [src, dest] = edge;
    adjList[src].push(dest);
  }
  return adjList;
};

// dfs to check if there are backedges (cycles) in this graph
// if there is a cycle return []
// if there is not a cycle as we go through traversal, want to push in each elem as we depart it and it will give us the order in topological sort

// topSort === result
const dfs = (node, adjList, visited, arrive, depart, topSort);

const findOrder = (numCourses, prerequisites) => {};
