/*
위상 정렬
- 모든 간선의 방향이 왼쪽에서 오른쪽
- 우선 검색과 달리 현재 정점과 인접한 모든 정점을 방문한 다음 인접리스트를 모두 확인하고 현재 정점을 스택으로 푸시
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
        var visited = [];
        for (var i = 0; i < this.vertices; i++) {
            process.stdout.write(this.vertexList[i] + " -> ");
            visited.push(this.vertexList[i]);

            for (var j = 0; j < this.vertices; j++) {
                if (this.adj[i][j] != undefined) {
                    if (visited.indexOf(this.vertexList[j]) < 0)
                        process.stdout.write(this.vertexList[j] + ' ');
                };
            };
            console.log("");
            visited.pop();
        };
    }

    this.topSort = topSort;
    this.topSortHelper = topSortHelper;

    function topSort() {
        var stack = [];
        var visited = [];
        for (var i = 0; i < this.vertices; i++) {
            visited[i] = false;
        };

        for (var i = 0; i < this.vertices; i++) {
            if(visited[i] == false)
                this.topSortHelper(i, visited, stack);
        };

        for (var i = 0; i < stack.length; i++) {
            if(stack[i] != undefined && stack[i] != false)
                console.log(this.vertexList[stack[i]]);
        };
    }

    function topSortHelper(v, visited, stack) {
        visited[v] = true;
        
        for(var w in this.adj[v]){
            if(visited[w] == false)
                this.topSortHelper(visited[w], visited, stack);
        }
        stack.push(v);
    }
}

var g = new Graph(6);
g.addEdge(1, 2);
g.addEdge(2, 5);
g.addEdge(1, 3);
g.addEdge(1, 4);
g.addEdge(0, 1);
g.vertexList = ["CS1", "CS2", "DataStructure", "AssemblyLanguage", "OperatingSystems", "Algorithms"];
g.showGraph();
console.log("");
g.topSort();
