'use strict';

console.log('CAMPUS IT SUPPORT REQUEST MANAGER');

// ================================================================
// PART A: STACK
// ================================================================

// The array is used only as internal storage.
class Stack {
  // Create the internal storage. The end of the array is the top of the stack.
  constructor() {
    this.items = [];
  }

  // Add an element to the top of the stack.
  push(element) {
    this.items.push(element);
  }

  // Remove and return the top element (undefined if the stack is empty).
  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.pop();
  }

  // Return the top element without removing it (undefined if empty).
  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[this.items.length - 1];
  }

  // Return true when the stack has no elements.
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the number of elements in the stack.
  size() {
    return this.items.length;
  }

  // Return all elements as text, from the bottom of the stack to the top.
  toString() {
    return this.items.join(', ');
  }
}

console.log('\nPART A: UNDO HISTORY');

const actionHistory = new Stack();

// Push the three required actions in the given order.
actionHistory.push('Opened Ticket #101');
actionHistory.push('Assigned Ticket #101');
actionHistory.push('Closed Ticket #101');

// Show the top action, undo it, then show what remains and the size.
console.log('Top Action: ' + actionHistory.peek());
console.log('Undo Action: ' + actionHistory.pop());
console.log('Remaining Actions: ' + actionHistory.toString());
console.log('Stack Size: ' + actionHistory.size());

// ================================================================
// PART B: QUEUE
// ================================================================

// The array is used only as internal storage.
class Queue {
  // Create the internal storage. Index 0 is the front of the queue.
  constructor() {
    this.items = [];
  }

  // Add an element at the back of the queue.
  enqueue(element) {
    this.items.push(element);
  }

  // Remove and return the front element (undefined if the queue is empty).
  dequeue() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items.shift();
  }

  // Return the front element without removing it (undefined if empty).
  front() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.items[0];
  }

  // Return true when the queue has no elements.
  isEmpty() {
    return this.items.length === 0;
  }

  // Return the number of elements in the queue.
  size() {
    return this.items.length;
  }

  // Return all elements as text, from the front to the back.
  toString() {
    return this.items.join(', ');
  }
}

console.log('\nPART B: WAITING REQUESTS');

const waitingRequests = new Queue();

// Enqueue the four requests in arrival order.
waitingRequests.enqueue('Ticket #201 - Password Reset');
waitingRequests.enqueue('Ticket #202 - No Internet');
waitingRequests.enqueue('Ticket #203 - Printer Problem');
waitingRequests.enqueue('Ticket #204 - Software Installation');

// Show the front request, process two requests, then show what remains.
console.log('Next Request: ' + waitingRequests.front());
console.log('Processed: ' + waitingRequests.dequeue());
console.log('Processed: ' + waitingRequests.dequeue());
console.log('Remaining Requests: ' + waitingRequests.toString());
console.log('Queue Size: ' + waitingRequests.size());

// ================================================================
// PART C: PRIORITY QUEUE
// ================================================================

  /*  PriorityQueue: the smallest priority number is served first (1 = Critical,
   2 = High, 3 = Normal) */
class PriorityQueue {
  // Create the internal storage: an empty chain and a counter.
  constructor() {
    this.first = null;
    this.count = 0;
  }
  // Insert a request at the correct position based on its priority.
  enqueue(request, priority) {
    // Create the item containing the request and its priority.
    const item = { request: request, priority: priority };
    const entry = { item: item, next: null };

    // Case 1: the queue is empty, or the new item outranks the first item.
    if (this.first === null || priority < this.first.item.priority) {
      entry.next = this.first;
      this.first = entry;
    } else {
      // Case 2: walk forward while the next item has the same or a higher
      let current = this.first;
      while (current.next !== null && current.next.item.priority <= priority) {
        current = current.next;
      }
      entry.next = current.next;
      current.next = entry;
    }
    this.count++;
  }

  // Remove and return the first item (undefined if the queue is empty).
  dequeue() {
    if (this.first === null) {
      return undefined;
    }
    const removed = this.first;
    this.first = removed.next;
    this.count--;
    return removed.item;
  }

  // Return the number of items in the queue.
  size() {
    return this.count;
  }

  // Display every request together with its priority.
  print() {
    let current = this.first;
    while (current !== null) {
      console.log(current.item.request + ', Priority ' + current.item.priority);
      current = current.next;
    }
  }
}

console.log('\nPART C: URGENT REQUESTS');

const urgentRequests = new PriorityQueue();

// Enqueue the four requests in arrival order.
urgentRequests.enqueue('Ticket #301 - Install Browser', 3);
urgentRequests.enqueue('Ticket #302 - Server Offline', 1);
urgentRequests.enqueue('Ticket #303 - Faculty PC Failure', 2);
urgentRequests.enqueue('Ticket #304 - Internet Laboratory Down', 1);

// Show the initial order, process the first request, then show what remains.
console.log('Initial Priority Order:');
urgentRequests.print();

const processed = urgentRequests.dequeue();
console.log('Processed Priority Request: ' + processed.request + ', Priority ' + processed.priority);

console.log('Remaining Priority Requests:');
urgentRequests.print();

// ================================================================
// PART D: LINKED LIST
// ================================================================

// Node: one link in the chain, holding an element and a reference to the next node.
class Node {
  // Store the element and start with no next node.
  constructor(element) {
    this.element = element;
    this.next = null;
  }
}

// LinkedList: a chain of connected nodes (no array is used).
class LinkedList {
  // Start with an empty list.
  constructor() {
    this.length = 0;
    this.head = null;
  }

  // Add a node at the end of the list.
  append(element) {
    const newNode = new Node(element);

    if (this.head === null) {
      // Empty list: the new node becomes the head.
      this.head = newNode;
    } else {
      // Otherwise walk to the last node and link the new node after it.
      let current = this.head;
      while (current.next !== null) {
        current = current.next;
      }
      current.next = newNode;
    }
    this.length++;
  }

  // Insert an element at a position (0 up to size). Returns false if invalid.
  insert(position, element) {
    // Reject invalid positions.
    if (!Number.isInteger(position) || position < 0 || position > this.length) {
      return false;
    }

    const newNode = new Node(element);

    if (position === 0) {
      // Beginning: the new node points to the old head and becomes the head.
      newNode.next = this.head;
      this.head = newNode;
    } else {
      // Middle or end: stop at the node just before the target position.
      let previous = this.head;
      for (let i = 0; i < position - 1; i++) {
        previous = previous.next;
      }
      newNode.next = previous.next;
      previous.next = newNode;
    }
    this.length++;
    return true;
  }

  // Remove and return the element at a position. Returns null if invalid.
  removeAt(position) {
    // Reject invalid positions.
    if (!Number.isInteger(position) || position < 0 || position >= this.length) {
      return null;
    }

    let removed;

    if (position === 0) {
      // Removing the head: move the head to the next node.
      removed = this.head;
      this.head = removed.next;
    } else {
      // Otherwise stop at the node before the target and skip over the target.
      let previous = this.head;
      for (let i = 0; i < position - 1; i++) {
        previous = previous.next;
      }
      removed = previous.next;
      previous.next = removed.next;
    }
    this.length--;
    return removed.element;
  }

  // Return the position of an element, or -1 when it is absent.
  indexOf(element) {
    let current = this.head;
    let index = 0;

    while (current !== null) {
      if (current.element === element) {
        return index;
      }
      current = current.next;
      index++;
    }
    return -1;
  }

  // Remove an element by value (reuses indexOf and removeAt). Returns it, or null.
  remove(element) {
    const index = this.indexOf(element);
    if (index === -1) {
      return null;
    }
    return this.removeAt(index);
  }

  // Return true when the list has no nodes.
  isEmpty() {
    return this.length === 0;
  }

  // Return the number of nodes in the list.
  size() {
    return this.length;
  }

  // Traverse the list and return all elements as text.
  toString() {
    let result = '';
    let current = this.head;

    while (current !== null) {
      result += current.element;
      if (current.next !== null) {
        result += ' -> ';
      }
      current = current.next;
    }
    return result;
  }
}

console.log('\nPART D: COMPLETED REQUESTS');

const completedRequests = new LinkedList();

// Append the three required requests.
completedRequests.append('Ticket #401 - Account Activated');
completedRequests.append('Ticket #402 - Printer Connected');
completedRequests.append('Ticket #403 - Antivirus Updated');

// Insert Ticket #400 at the beginning and Ticket #405 at the end.
completedRequests.insert(0, 'Ticket #400 - Computer Diagnosed');
completedRequests.insert(completedRequests.size(), 'Ticket #405 - Browser Updated');

// Display the complete list, then search for Ticket #402.
console.log('Complete List: ' + completedRequests.toString());
console.log('Index of Ticket #402: ' + completedRequests.indexOf('Ticket #402 - Printer Connected'));

// Remove by position, then by value.
console.log('Removed at Position 1: ' + completedRequests.removeAt(1));
console.log('Removed by Value: ' + completedRequests.remove('Ticket #403 - Antivirus Updated'));

// Display the final list and its size.
console.log('Final List: ' + completedRequests.toString());
console.log('Final Size: ' + completedRequests.size());