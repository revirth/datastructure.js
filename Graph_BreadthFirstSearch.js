/*
너비 우선 검색
- 첫번째 정점에서 시작해 가능한 한 첫번째 정점과 가까운 정점을 방문
- 배열 대신 큐를 이용해 방문한 정점을 저장
*/

function Graph (v) {
	this.vertices = v;
	this.edges = 0;
	this.adj = [];

	for (var i = 0; i < this.vertices; i++) {
		this.adj[i] = [];
		this.adj[i].push("");
	};
	this.addEdge = addEdge;
	this.showGraph = showGraph;

	function addEdge (v, w) {
		this.adj[v].push(w);
		this.adj[w].push(v);
		this.edges++;
	}

	function showGraph () {
		for (var i = 0; i < this.vertices; i++) {
			process.stdout.write(i + " -> ");
			for (var j = 0; j < this.vertices; j++) {
				if (this.adj[i][j] != undefined) {
					process.stdout.write(this.adj[i][j] + ' ');
				};
			};
			console.log("");
		};
	}

	this.marked = [];
	for (var i = 0; i < this.vertices; i++) {
		this.marked[i] = false;
	};

	this.edgeTo = [];
	this.bfs = bfs;
	function bfs(s) {
		var queue = [];
		this.marked[s] = true;
		queue.push(s);

		while(queue.length > 0) {
			var v = queue.shift();	// 큐에서 가져옴
			if(v != undefined)
				console.log("Visited vertex:", v);

			for(var w in this.adj[v]){
				var ww = this.adj[v][w];

				if(this.marked[ww] == false){
					this.edgeTo[ww] = v;
					this.marked[ww] = true;
					queue.push(ww);
				}
			}
		}
	};

	this.pathTo = pathTo;
	this.hasPathTo = hasPathTo;
	function pathTo (v) {
		var source = 0;
		if(this.hasPathTo(v) == false)
			return undefined;

		var path = [];
		for (var i = v; i != source; i = this.edgeTo[i])
			path.push(i);

		path.push(source);
		return path;
	}

	function hasPathTo (v) {
		return this.marked[v];
	}

}

var g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();
g.bfs(0);

// 최단 경로 찾기
var vertex = 4;
var paths = g.pathTo(vertex);
paths.reverse();
console.log(paths.join('-'));
