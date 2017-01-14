class TreeNode {  
	constructor(value) {
		this.val = value;
		this.left = null;
		this.right = null;
	}
}

var node1 = new TreeNode(1);
node1.left = new TreeNode(2);
node1.right = new TreeNode(3);
node1.right.left = new TreeNode(4);
node1.right.right = new TreeNode(5);
node1.right.right.right = new TreeNode(6);
node1.right.right.left = new TreeNode(7);
node1.left.left = new TreeNode(8);
node1.left.left.left = new TreeNode(9);



// console.log(node1);

var serialize = tree => {
	if (tree === null || tree === undefined) return '[]';
	var result = [tree];
	for (var i = 0; i < result.length; i++) {
		if (result[i] !== null) {
			result.push(result[i].left);
			result.push(result[i].right);
		}
	}
	result = result.map(node => node ? node.val : null);
	while (result[result.length - 1] === null) { result.pop() };
	return JSON.stringify(result);
}

var serial = serialize(node1);
// console.log(serial);

var deserialize = string => {
	var array = JSON.parse(string);
	if (array.length === 0) return null;
	var track = 1;
	var rootNode = new TreeNode(array[0])
	var currentRow = [rootNode];
	while (track < array.length) {
		var newRow = [];
		currentRow.forEach(node => {
			var rowValues = array.slice(track, track + 2);
			var left = rowValues[0] === null || rowValues[0] === undefined ? null : new TreeNode(rowValues[0]);
			var right = rowValues[1] === null || rowValues[1] === undefined ? null : new TreeNode(rowValues[1]);
			track += 2;
			node.left = left;
			node.right = right;
			if (left) newRow.push(left);
			if (right) newRow.push(right);
		})
		currentRow = newRow;
	}
	return rootNode;
}

var newTree = deserialize(serial);
// console.log(newTree);

// console.log(serialize(newTree));

var test = '[1, 2]';
console.log(serialize(deserialize(test)));


