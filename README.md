# Maze Runner

See it [live](http://www.brenhiggins.com/maze-runner/)!

## Background
Maze Runner is a visualization tool for maze generation and path solving using JavaScript and HTML5 Canvas. It provides insight into the behavior of popular maze generation and traversal algorithms, such as Depth-First Search (DFS), Breadth-First Search (BFS), Dijkstra's Algorithm and A*.

## Technologies
  * Javascript - implement algorithms
  * jQuery - DOM manipulation & event handling
  * HTML5 Canvas - draw maze, path and visualization of algorithms traversing the maze
  * CSS - styling

## Prim's Algorithm
![](assets/README-c8c8b61c.gif)

Figure 1. Visualization of Prim's Algorithm Generating Random Maze

The maze is generated using Prim's algorithm, a greedy algorithm that grows a minimum spanning tree from a starting source node until it covers the entire graph. A minimum spanning tree is a subset of all the edges in a graph that connects each of the nodes in the graph, but does not have any cycles. Each of the edges is assigned a random weight and the tree is built by selecting the cheapest edge that doesn't create a cycle. This is why Prim's is considered a greedy algorithm, as it takes the path with the least weight every time. Prim's algorithm does not, however, select the cheapest edge that will connect any pair of vertices, but rather edges that will connect to the existing tree. This is why, in Figure 1, you will not see edges being added in open space. It doesn't start with every edge in the grid in its queue, so it only can choose from edges that are connected to vertices it has visited. You will notice, however, that as the tree grows it will select edges that were added to the queue much earlier. This is evident by how edges get added to the existing tree all over the place.

Prim's algorithm requires a priority queue to keep track of the edges. The most expensive approach in terms of time complexity is to use an array that stores all of the edges and linearly searches for the cheapest one each time. This approach would run in O(E) time, where E represents the number of edges in the graph. I decided to implement a binary heap. This is implemented with a binary tree that organizes the edges in the priority queue by weight. The edge with the minimum weight is always at the root of the tree. Whenever the min edge is removed, the tree is reprioritized by placing the last edge in the tree at the root and letting it sink down. Every node in the tree, which represents one of the edges in the graph, has a maximum of 2 children. To sink down, it checks whether it is greater than either of its children, and swaps with the min. This is a log E operation, as there will be a maximum of log E levels in the tree. Whenever a new edge is added, it bubbles up. The bubble up process works similarly to the sink down process and also runs in log E time. Therefore, in the worst case scenario, Prim's algorithm with a binary heap has E log E time complexity because there are E edges in the graph and each addition or removal from the queue requires a log E reprioritization. Another way to further improve on this time complexity would be to store vertices in the heap instead of edges. The vertices could be stored by the smallest edge weight that connects them to some other vertex in the existing tree. This leads to O(E log V) runtime. A further reduction in runtime could be achieved with a Fibonacci heap.

## Breadth-First Search
![](assets/README-132ecb30.gif)

Figure 2. Visualization of BFS Traversing Maze and Constructing Path

Breadth-First Search (BFS) is an algorithm that can be used for a number of tasks, but in this case will be used to find a path between randomly-chosen start and goal nodes. BFS is implemented with a queue. It starts by visiting a node, then adding all of that node's neighbors into the queue. Each time it adds a neighbor to the queue, it adds a pointer that references the neighboring node's parent. The reason for this is that it doesn't actually construct the path during its initial traversal of the graph. It repeats the process of visiting the nodes in the order they entered the queue until the queue is empty, which means all nodes have been visited, or until the goal node is found, since I use an early exit in my implementation. Once the traversal is complete, it starts at the goal node and follows the pointers until it reaches the start node.

![](assets/README-c795f06a.gif)

Figure 3. Illustration of Order that Nodes are Visited in BFS

As evident by Figure 3, BFS considers shallower nodes in the tree before moving onto their children, which is why in Figure 2 it expands equally in all directions away from the start node. Due to the nature of the maze, it may appear as if the algorithm is favoring the right side, but it is expanding evenly in the directions that are available to it.

## Depth-First Search
![](assets/README-8b258554.gif)

Figure 4. Visualization of DFS Traversing Maze and Constructing Path

Depth-First Search (DFS) is one alternative to BFS. Instead of visiting each neighbor before considering their children, it will plunge all the way to the bottom of the tree, continually choosing the first child, before retracing its steps, visiting children on the way up. This behavior is clearly evident by Figure 5, as it always chooses to go left until their are no children left. Figure 4 illustrates this nature as their are long distinct orange paths generated rather than the broad search performed by BFS.

![](assets/README-0b83cd5b.gif)

Figure 5. Illustration of Order that Nodes are Visited in DFS

DFS is implemented with a stack, where the last node added is the first one visited. It works similarly to BFS in the fact that with each node visited, it sets a pointer that references where it came from. These "bread crumbs" can be used later to trace the path from the goal back to the source. DFS will sometimes get lucky if the goal happens to be located down one of the routes that DFS traverses first, but it can also get unlucky if the goal is located on the right side of Figure 5.

## Dijkstra's Algorithm
![](assets/README-84d68b10.gif)

Figure 6. Visualization of Dijkstra's Algorithm Traversing Maze and Constructing Path

Dijkstra's algorithm is a lot like BFS, except it incorporates a cost heuristic that tracks the cost of different moves and evaluates that before deciding which node to visit next. In order to accomplish this, it is implemented with a priority queue. Just like in my implementation of Prim's algorithm, I used a binary min heap to organize the existing edges in the queue by cost. Another difference between Dijkstra's and BFS is now that we're taking cost into account, we may end up visiting nodes multiple times. Dijkstra's keeps track of the cost from the start up to the current node, so if a node is ever encountered multiple times, it checks to see if the current cost is less than the value that node currently holds. If it is, Dijkstra's updates the cost and redirects the pointer to reference the parent in the cheaper direction. Dijkstra's algorithm is more effective in a scenario where traversing one path (like going over a mountain) would be more expensive than going around even though the path is more direct. It is not as obvious with the current maze setup that Dijkstra's is an improvement over BFS.

## A* Algorithm
![](assets/README-bbb06bc4.gif)

Figure 7. Visualization of A* Traversing Maze and Constructing Path

Unlike Dijkstra's algorithm, BFS and DFS, Astar is an informed search algorithm. In other words, the other algorithms waste time exploring directions that aren't promising because they don't have knowledge of the goal. Astar uses its awareness of the goal location to its advantage, and chooses its next neighbor to visit based on this knowledge. It is implemented almost exactly like Dijkstra's algorithm, except it also checks the approximate distance from its neighboring nodes to the goal as well as the known distance from the start to the neighbor. The cost to the start is an actual cost because it increments every time it moves to another neighbor. To determine the cost to the goal, there are a number of heuristics. Two popular options are Manhattan distance and straight-line distance. Manhattan distance is the sum of the difference in x coordinates and the difference in y coordinates. Straight-line distance is self-explanatory: the distance traveled between point a and point b in a straight line. It turns out that Manhattan distance is slightly better when using a 4 neighbor-approach, while the straight-line distance is preferred for an 8 neighbor-approach. This explains why the version of Astar that uses the Manhattan distance in Maze Runner always visits slightly fewer nodes than the straight-line distance version. However, on a grid where moving diagonally is possible, straight-line distance would outperform Manhattan distance.

## Resources
* https://bost.ocks.org/mike/algorithms/
* https://visualgo.net/en
* https://www.redblobgames.com/
* https://medium.com/basecs/tagged/algorithms
* http://www.how2examples.com/artificial-intelligence/images/Breadth-First-Search.gif
* https://upload.wikimedia.org/wikipedia/commons/7/7f/Depth-First-Search.gif
