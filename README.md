# React useEffect Incorrect Object Comparison
This repository demonstrates a common error in React's `useEffect` hook: incorrectly comparing objects for changes.  The example uses a shallow comparison (`!==`), which only checks for reference equality.  This can lead to the effect running unnecessarily or, worse, creating an infinite loop if the object changes without a new reference being created.

## Bug
The `bug.js` file contains a component that attempts to detect changes in a `props.data` object. However, the comparison used in the `useEffect` hook is flawed, resulting in missed updates or unexpected behavior. 

## Solution
The `bugSolution.js` file demonstrates the correct approach using a deep comparison library like Lodash's `isEqual` or a custom deep comparison function. This ensures the effect correctly detects changes within the object itself.
