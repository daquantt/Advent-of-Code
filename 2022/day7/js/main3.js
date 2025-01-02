const data = [
  {
    name: "Parent",
    totalSize: 0,
    size: 10,
    children: [
      {
        name: "Child 1",
        totalSize: 0,
        size: 5,
        children: [
          {
            name: "Grandchild 1",
            totalSize: 0,
            size: 2,
            children: [],
          },
        ],
      },
      {
        name: "Child 2",
        totalSize: 0,
        size: 3,
        children: [],
      },
    ],
  },
];

function calculateTotalSize(node) {
  if (node.children.length === 0) {
    // Base case: If no children, set totalSize to the current size
    node.totalSize = node.size;
  } else {
    // Recursive case: Calculate totalSize for each child
    node.totalSize = node.size + node.children.reduce((acc, child) => acc + calculateTotalSize(child), 0);
  }
  return node.totalSize;
}

// Call the function for the root node
calculateTotalSize(data[0]);

console.log(data); // Updated data with totalSize values
