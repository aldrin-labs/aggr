const e="```ts\nhighest(value: number, length: number): number\n```\n\nFinds the highest value within a specified number of recent bars.\n\n## Parameters\n\n- `value`: The current value to be compared.\n- `length`: The number of bars to include in the set for comparison.\n\n## Returns\n\n- The highest value found within the specified number of bars.\n\n## Summary\n\nThe `highest` function is designed to track the highest value within a set of recent bars, up to the specified `length`. This function is particularly useful in technical analysis for identifying extreme values or peaks in a data series over a given period. It compares the current value with the values from the preceding bars and returns the highest value found. This kind of analysis is essential for understanding market dynamics, such as identifying resistance levels or assessing the strength of a market move.\n\n*Note: The accuracy of the `highest` function's output depends on the completeness and reliability of the data for the specified number of bars. Incomplete data may affect the identification of the true highest value.*\n";export{e as default};