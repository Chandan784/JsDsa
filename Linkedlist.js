//swap node pair

class Node {
  constructor(value) {
    this.data = value;
    this.next = null;
  }
}

class LL {
  constructor() {
    this.head = null;
  }

  add(value) {
    let node = new Node(value);
    node.next = this.head;
    this.head = node;
  }

  display() {
    let temp = this.head;
    while (temp) {
      console.log(temp.data + "");
      temp = temp.next;
    }
  }
  pairWiseSwap() {
    var temp = this.head;

    /* Traverse only till there are 
            atleast 2 nodes left */
    while (temp != null && temp.next != null) {
      /* Swap the data */
      var k = temp.data;
      temp.data = temp.next.data;
      temp.next.data = k;
      temp = temp.next.next;
    }
  }
}

let list = new LL();
list.add(4);
list.add(6);
list.add(8);
list.add(10);

list.display();
list.pairWiseSwap();
list.display();
