function mincost(arr)
{ 
//write your code here
// return the min cost
	let heap = arr.slice().sort((a, b) => a - b);
    let totalCost = 0;

    while (heap.length > 1) {
        // Extract the two smallest ropes
        let first = heap.shift(); // The smallest rope
        let second = heap.shift(); // The second smallest rope

        // Calculate the cost to connect them
        let cost = first + second;
        totalCost += cost;

        // Insert the new rope back into the heap
        heap.push(cost);
        heap.sort((a, b) => a - b); // Re-sort the heap
    }

    return totalCost;
  
}

module.exports=mincost;
