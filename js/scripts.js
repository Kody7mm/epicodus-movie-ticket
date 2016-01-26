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

Ticket.prototype.statusDiscount = function() {
  if (this.movieStatus === "Old") {
    return -3;
  } else {
    return 0;
  }
}

Ticket.prototype.getPrice = function() {
  return 10 + this.ageDiscount() + this.timeDiscount() + this.statusDiscount();
}

$(document).ready(function() {
  $('form#chooseTicket').submit(function(event) {
    event.preventDefault();

    var movieTitle = $('select#movieTitle').val();
    var timeOfDay = $('select#timeOfDay').val();
    var age = $('select#age').val();
    var newTicket = new Ticket(movieTitle, timeOfDay, age);
    var ticketPrice = newTicket.getPrice();

    $('ul#ticketInCart').append('<li>' + movieTitle + ' ' + timeOfDay + ' ' + age + ' $' + ticketPrice + '</li>');


  });
});
