## STACKS AND QUEUES

# QUEUES

Queues work in this pretty simple concept

**F - First**
**I - In**
**F - First**
**O - Out**

but from the where?
From an array.

Yes, that's it.
In JavaScript we have pretty simple method to implement a queue in an array which goes like this

```
const queue = [];

const enqueue = (element) => queue.push(element);
const dequeue = () => queue.shift();

```

This is the most simple code of a queue in JavaScript.
But there are multiple other scenarios that a queue can do.
We'll explore all of them in this module.

### CIRCULAR QUEUE

Why circular queues were made in the first place?

1. These data structures help us reuse some memory in a fixed Array space.
2. These data structures are used for reusing elements in the array.
   - Suppose you want to repeat some operation continously in cycles you should be able to do that using a queue.

## MONOTONIC STACKS

### WHAT IS IT?

Monotonic word comes from monotonous which means similar patterns or repetitious.

When a stack is repeating a similar pattern we call it a monontonic stack.

Types of Monotonic Stacks:
