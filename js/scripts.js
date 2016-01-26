function Ticket(movieTitle, timeOfDay, age, movieStatus) {
  this.movieTitle = movieTitle;
  this.timeOfDay = timeOfDay;
  this.age = age;
  this.movieStatus = movieStatus;
}

Ticket.prototype.ageDiscount = function() {
  if (this.age === "Child") {
    return -2;
  } else if (this.age === "Senior") {
    return -3;
  } else {
    return 0;
  }
}

Ticket.prototype.timeDiscount = function() {
  if (this.timeOfDay === "Morning") {
    return -1;
  } else if (this.timeOfDay === "Evening") {
    return +1;
  } else {
    return 0;
  }
}

// Ticket.prototype.getPrice() = function() {
//   return 10 + Ticket.ageDiscount() + Ticket.timeDiscount() + Ticket.statusDiscount();
// }
