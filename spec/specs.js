 describe('Ticket', function() {
   it("create a ticket with the following properties", function() {
     var newTicket = new Ticket('Superman', 'Morning', 'Adult', 'New');
     expect(newTicket.movieTitle).to.equal('Superman');
     expect(newTicket.timeOfDay).to.equal('Morning');
     expect(newTicket.age).to.equal('Adult');
     expect(newTicket.movieStatus).to.equal('New');
     expect(newTicket.price).to.equal();
   });
   it("adds the ageDiscount method to all tickets", function() {
     var testTicket = new Ticket('Superman', 'Morning', 'Child', 'New')
     expect(testTicket.ageDiscount()).to.equal(-2);
   });
   it("adds the timeDiscount method to all tickets", function() {
     var testTicket = new Ticket('Superman', 'Morning', 'Adult', 'New')
     expect(testTicket.timeDiscount()).to.equal(-1);
   });

  //  it("adds the getPrice method to all tickets", function() {
  //    var testTicket = new Ticket('Superman', 'Morning', 'Adult', 'New');
  //    expect(testTicket.getPrice()).to.equal(12);
  //  });
 });
