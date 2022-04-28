# Graph Data Structure

## Graph - Directed

A set of connected data is called a graph. Yes, that's it.

Example: Facebook. You have profile details, dp, location, work info etc. for the Facebook database you are collection of data or a node [ You ] similarly your friends in Facebook are also nodes [ Friend A ] and [ Friend B ].

So if you and your Friend A and Friend B are connected then in the database your are represented as

`[ You ] : [ Friend A , Friend B ]`

These are nothing but addresses of nodes. This can also be represented as a JavaScript object.

```
const friendGraph = {
you : [ paul , john ],
paul : [ john , walker, you ],
john : [ you, walker ]
}

```

So, if I want to find who are your friends then I need to just query

```
const graph = friendGraph[you] // [paul , john]
```

If I want Paul and John's friends I just need to loop through the collection and use the Paul and John as key to find their connection.

That's it. This is a basic graph or a directed graph.

Now, solve some problems related to this then again comeback and gobble more theory on Undirected Graph, Weighted Graph etc.
