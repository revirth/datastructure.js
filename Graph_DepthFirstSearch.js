/*
깊이 우선 검색 - 한 정점에서 시작해 마지막 정점이 나올 때까지 모든 경로를 탐색.
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

	this.dfs = dfs;
	this.marked = [];
	for (var i = 0; i < this.vertices; i++) {
		this.marked[i] = false;
	};

	function dfs (v) {
		this.marked[v] = true;
		if(this.adj[v] != undefined)
			console.log('Visited vertex: ' + v, this.marked);

		for(var w in this.adj[v]){
			var ww = this.adj[v][w];
			if(this.marked[ww] == false)
				this.dfs(ww);
		}
	}
}

var g = new Graph(5);
g.addEdge(0, 1);
g.addEdge(0, 2);
g.addEdge(1, 3);
g.addEdge(2, 4);
g.showGraph();
g.dfs(0);
