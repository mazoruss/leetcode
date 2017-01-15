//Definition for a binary tree node.
function TreeNode(val) {
    this.val = val;
    this.left = this.right = null;
}

var lowestCommonAncestor = function(tree, p, q) {
	var one = [];
	var two = [];
	var findPaths = (node, path1, path2) => {
		path1.push(node.val);
	  path2.push(node.val);
		node === p ? one = path1.slice() : null;
		node === q ? two = path2.slice() : null;
		node.left ? findPaths(node.left, path1, path2) : null;
		node.right ? findPaths(node.right, path1, path2) : null;
		path1.pop();
		path2.pop();
	} 
	findPaths(tree, [], []);
	var result = 0;
	for (var i = 0; i < Math.min(one.length, two.length); i++) {
		one[i] === two[i] ? result = one[i]: i = one.length;
	}
	return result;
};


