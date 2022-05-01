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
