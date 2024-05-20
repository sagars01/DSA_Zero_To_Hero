# Sorting Algorithms 

Here you will find all the sorting algorithms that you would need to know to 
become a better software engineer and clear interviews.

All the algorithms are implemented in Go

### Basic Sorting Algorithms

1. **Bubble Sort**
   - **Description:** Repeatedly steps through the list, compares adjacent elements and swaps them if they are in the wrong order.
   - **Time Complexity:** O(n²)
   Bubble Sort repeatedly steps through the list, compares adjacent elements, and swaps them if they are in the wrong order. This process repeats until the list is sorted.- 
   
   - Algorithm Steps:

	   1.	Start from the first element.
      2.	Compare the current element with the next element.
      3.	If the current element is greater than the next element, swap them.
      4.	Move to the next element and repeat the process until the end of the list.
      5.	Repeat the entire process for the remaining elements until the list is sorted.


2. **Selection Sort**
   - **Description:** Divides the input list into two parts: a sorted and an unsorted sublist. Repeatedly selects the smallest element from the unsorted sublist and moves it to the end of the sorted sublist.
   - **Time Complexity:** O(n²)

3. **Insertion Sort**
   - **Description:** Builds the final sorted array one item at a time, with each item being inserted into its correct position.
   - **Time Complexity:** O(n²)

### Efficient Sorting Algorithms

4. **Merge Sort**
   - **Description:** A divide-and-conquer algorithm that splits the list into halves, recursively sorts each half, and then merges the sorted halves.
   - **Time Complexity:** O(n log n)

5. **Quick Sort**
   - **Description:** Also a divide-and-conquer algorithm that selects a pivot element, partitions the array around the pivot, and recursively sorts the partitions.
   - **Time Complexity:** O(n log n) on average, O(n²) in the worst case

6. **Heap Sort**
   - **Description:** Converts the list into a heap data structure and repeatedly extracts the maximum element from the heap and places it into the sorted list.
   - **Time Complexity:** O(n log n)

### Specialized Sorting Algorithms

7. **Counting Sort**
   - **Description:** A non-comparison-based algorithm that counts the occurrences of each unique element and uses this information to place the elements in sorted order.
   - **Time Complexity:** O(n + k), where k is the range of the input

8. **Radix Sort**
   - **Description:** Sorts numbers by processing individual digits, starting from the least significant digit to the most significant digit.
   - **Time Complexity:** O(d*(n + k)), where d is the number of digits

9. **Bucket Sort**
   - **Description:** Divides the input into several buckets, sorts each bucket individually, and then concatenates the sorted buckets.
   - **Time Complexity:** O(n + k)

### Advanced and Hybrid Sorting Algorithms

10. **Tim Sort**
    - **Description:** A hybrid sorting algorithm derived from merge sort and insertion sort, designed to perform well on many kinds of real-world data.
    - **Time Complexity:** O(n log n)

11. **Shell Sort**
    - **Description:** An extension of insertion sort that allows the exchange of items that are far apart. The array is first divided into subarrays which are then sorted using insertion sort.
    - **Time Complexity:** Varies, best case is O(n log n), worst case is O(n²)


### Plan for Learning

1. **Understand the Concepts:** Start by understanding the theory behind each algorithm.
2. **Implement in Go:** Write your own implementation in Go for each algorithm.
3. **Analyze Performance:** Study and understand the time and space complexity of each algorithm.
4. **Practice Problems:** Solve problems on platforms like LeetCode, focusing on sorting-related questions.
5. **Optimize and Compare:** Learn to optimize sorting for different types of data and compare performance.
