class Stack {
  stack = [];
  add(value) {
    this.stack.push(value);
  }

  remove() {
    this.stack = this.stack.filter(
      (item) => item !== this.stack[this.stack.length - 1]
    );
  }

  getResult() {
    return this.stack;
  }
}

const StackStructure = new Stack();

StackStructure.add("misha");
StackStructure.add("vasya");
StackStructure.remove();

console.log(StackStructure.getResult());
