class LinkedList {
  constructor() {
    this.head;
    this.tail;
  }
  append(value) {
    //add a new node containing value to the end of the list
    let newNode = new Node(value);
    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    } else {
      let node = this.head;
      while (node) {
        if (!node.next) {
          node.next = this.tail;
          this.tail.pre = node;
          return;
        }
        node = node.next;
      }
    }
  }
  prepend(value) {
    //add a new node containing value to the start of the list
    let newNode = new Node(value);
    this.head.pre = newNode;
    let node = this.head;
    this.head = newNode;
    this.head.next = node;
  }
  size() {
    //returns total number of size
    let c = 0;
    let node = this.head;
    while (node) {
      c++;
      node;
      node = node.next;
    }
    return c;
  }
  at(index) {
    //return the node at the given list
    if (index < 0) return;
    let i = 0;
    let node = this.head;
    while (node) {
      if (i == index) return node.value;
      node = node.next;
      i++;
    }
  }
  pop() {
    //remove the last element from the list
    let node = this.tail.pre;
    node.next = null;
  }
  contains(value) {
    //return true if value in the list
    let node = this.head;
    while (node) {
      if (node.value === value) return true;
      node = node.next;
    }
    return false;
  }
  find(value) {
    //returns index of the value, null if not found
    let node = this.head;
    for (let i = 0; node; i++) {
      if (node.value === value) return i;
      node = node.next;
    }
    return null;
  }
  toString() {
    //return string form of list
    // ie: (value) -> (value) -> null
    let str = "";
    let node = this.head;
    while (node) {
      str += `${node.value} -> `;
      node = node.next;
    }
    str += "null";
    return str;
  }
  insertAt(value, index) {
    //inserts node of given value at the provided index
    if (index < 0) return;
    let node = this.head;
    let newNode = new Node(value);
    for (let i = 0; node; i++) {
      if (i == index) {
        newNode.next = node;
        newNode.pre = node.pre;
        node.pre.next = newNode;
        node.pre = newNode;
      }
      node = node.next;
    }
  }
  removeAt(index) {
    //remove the node at given index
    if (index < 0) return;
    let node = this.head;
    for (let i = 0; node; i++) {
      if (i == index) {
        node.pre.next = node.next;
        node.next.pre = node.pre;
      }
      node = node.next;
    }
  }
}

class Node {
  constructor(value) {
    this.value = value;
    this.next = null;
    this.pre = null;
  }
}

//test cases
const list = new LinkedList();
list.append(3);
list.append(8);
list.append(4);
list.prepend("000");
list.append(98);
list.append(6);
list.pop();
list.insertAt(69, 4);
list.removeAt(1);

//test cases
console.log(list.toString());
console.log("size", list.size());
let i = 3;
console.log("at index " + i + " -> ", list.at(i));
let v = 98;
console.log("is contain " + v + "? ", list.contains(v));
console.log("is contain " + (v + 1) + "? ", list.contains(v + 1));
let f = 8;
console.log("index of " + f + " -> ", list.find(f));
console.log("index of " + (f - 1) + " -> ", list.find(f - 1));
