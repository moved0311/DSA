const find = (subset, i) => {
  if (subset[i] === -1) {
    return i;
  }
  return find(subset, subset[i]);
};
const union = (subset, x, y) => {
  let xset = find(subset, x);
  let yset = find(subset, y);
  subset[xset] = yset;
};

/**
 * @param {number[][]} points
 * @return {number}
 */
var kruskal = function (points) {
  if (points.length <= 1) return 0;

  let edges = []; //  [{weight: 1, src: 0, dist: 1}, ....]
  points.map((point1, src) => {
    points.map((point2, dist) => {
      let manhattan =
        Math.abs(point1[0] - point2[0]) + Math.abs(point1[1] - point2[1]);
      if (src !== dist) edges.push({ weight: manhattan, src: src, dist: dist });
    });
  });
  edges.sort((e1, e2) => e1.weight - e2.weight); //sorted edges.
  console.log(edges);

  let subset = Array(points.length).fill(-1);
  let cost = 0;

  for (let i = 0, numOfEdge = 0; ; i++) {
    const { weight, src, dist } = edges[i];

    let x = find(subset, src);
    let y = find(subset, dist);

    if (x === y) {
      console.log("Add Edge:", src, " --> ", dist, "(has cycle)");
    }

    if (x !== y) {
      console.log("Add Edge:", src, " --> ", dist);
      union(subset, x, y);
      cost += weight;
      numOfEdge += 1;
      console.log("subset:", subset);
    }
    if (numOfEdge >= points.length - 1) break; // if there are v -1 edges ---> fininsh.
  }
  return cost;
};
module.exports = kruskal;
