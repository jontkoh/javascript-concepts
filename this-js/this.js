const arrowFunction = {
  firstName: "Jon",
  lastName: "Koh",
  fullName: () => {
    console.log(this);
    return arrowFunction.firstName + " " + arrowFunction.lastName;
    // return this.firstName + " " + this.lastName;
  }
}

console.log(arrowFunction.fullName());

const anonFunction = {
  firstName: "Jon",
  lastName: "Koh",
  fullName: function() {
    console.log(this);
    return this.firstName + " " + this.lastName;
  }
}
console.log(anonFunction.fullName());