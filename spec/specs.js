 describe('Ticket', function() {
   it("create a ticket with the following properties", function() {
     var newTicket = new Ticket('Superman', 'Morning', 'Adult');
     expect(newTicket.movie).to.equal('Superman');
     expect(newTicket.timeOfDay).to.equal('Morning');
     expect(newTicket.age).to.equal('Adult');
     expect(newTicket.price).to.equal();
   });
   it("adds the getPrice method to all tickets", function() {
     var testTicket = new Ticket('Superman', 'Morning', 'Adult');
     expect(testTicket.getPrice()).to.equal(12);
   });
 });

 describe('Movie', function() {
   it("create a movie with the following properties", function() {
     var newMovie = new Movie('Superman', 'R', 'New');
     expect(newMovie.title).to.equal('Superman');
     expect(newMovie.rating).to.equal('R');
     expect(newMovie.status).to.equal('New');
   });
 });
