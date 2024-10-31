const e="```ts\navg(values: Array<number>): number\n```\n\nCalculates the average of a given array of numerical values, excluding any null entries.\n\n## Parameters\n\n- `values`: An array of numbers for which the average is to be calculated.\n\n## Returns\n\n- The average of the non-null numbers in the provided array.\n\n## Summary\n\nThe `avg` function is designed to compute the arithmetic mean of an array of numbers, effectively summing these values and dividing by the count of non-null entries. It iterates through the array, accumulating the sum of the elements and keeping track of the number of valid (non-null) entries. The function then returns the total sum divided by the count of these entries. This function is particularly useful in scenarios where averaging a set of values is required, such as in data analysis, financial reporting, or statistical calculations, providing a straightforward way to obtain a central tendency measure of the given data set.\n\n*Note: The function is designed to exclude null values from the calculation to avoid skewing the average. As such, it only considers valid numerical inputs in its computation.*\n";export{e as default};