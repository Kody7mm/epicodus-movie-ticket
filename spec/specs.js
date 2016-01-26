 describe('Ticket', function() {
   it("create a ticket with the following properties", function() {
     var newTicket = new Ticket('Superman', 'Morning', 'Adult', 'New');
     expect(newTicket.movieTitle).to.equal('Superman');
     expect(newTicket.timeOfDay).to.equal('Morning');
     expect(newTicket.age).to.equal('Adult');
     expect(newTicket.movieStatus).to.equal('New');
     expect(newTicket.price).to.equal();
   });

 });
