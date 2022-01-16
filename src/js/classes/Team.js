import Person from "./Person";

export default class Team {
  constructor() {
    this.members = new Set();
  }
  add(member) {
    if (member instanceof Person && this.members.has(member) === false) {
      return this.members.add(member);
    }
    throw new Error('Unable to add')
  }
  addAll(...members) {
    members.forEach((member) => {
      return this.members.add(member)
    })
  }
  toArray() {
    return Array.from(this.members);
  }
  * [Symbol.iterator]() {
    const range = this.members;
    for (const i of range) {
      yield new Person(i);
    }
  }
}
