# The DOM

## What is the DOM

The DOM (or Document Object Model) is an object-orient representation of a web document (usually HTML). It acts as a programming interface for web documents, so that we can interact with the page and manipulate things like document structure, style, and content. This allows us to create rich and interactive user interfaces using a single web page.

The DOM for any given web page consists of a hierarchical tree of nodes. Each node is represented as a kind of Node object, depending on its type.

The DOM is not a part of JavaScript, but is instead a Web API made available by the browser. While the DOM is commonly utilized by JavaScript, it can be accessed in other ways.

## What is a Node

All objects within a web document are represented in the DOM as a node. A node acts as a single point in the hierarchical tree that makes up the DOM. Nodes are organized into various types and sub-types, using an object oriented paradigm to make all the necessary properties, methods, and events available that we need to create an interactive user experience via DOM manipulation.

## What are the different types of nodes

The two most common types of nodes are Element nodes and Text nodes. Element nodes are generally used to represent HTML tags on the original web document, although there are other element types that exists. These are divided into more specific subtypes, such as `HTMLElement`, which is further dived into specific types of HTML element nodes.

Text nodes hold the plain text content from the original web document, including so called "empty-nodes" which contain only whitespace characters. These tend to arise from things like spaces and newline characters between HTML element tags in the HTML document.

There are also other types of nodes, such as attribute nodes and comment nodes (which represent HTML comments from the original document).

## What do we mean when we say traversing the DOM

Traversing the DOM refers to moving up and down the hierarchical tree of nodes in the DOM. This is made possible by node properties that reference parent and child nodes. We can choose to traverse through nodes of all types, or we can use a different set of Element specific node properties to traverse nodes that are of an Element type. 

Parent node properties include `childNodes`, `firstChild`, and `lastChild`. Child node properties include `parentNode`, `nextSibling`, and `previousSibling`. A node can only ever have a single `parentNode`. By assigning a node to a new parent, it is removed as a child from it's previous parent.

We can use a recursive function for operations like "walking the tree", which refers to visiting each node that has a relationship (either parent or child) with a given node.

## What is a live collection

A live collection is a collection of DOM nodes that is automatically updated anytime changes are made in the DOM. For example, access the `childNodes` property of a `ul` element, and add a new `li` to the `ul` element in the DOM, the new `li` will be reflected in the collection referenced by `childNodes`.
