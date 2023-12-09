mongoose.connect('mongodb+srv://larissa:mnbvcxz@cluster0.4n36ode.mongodb.net/?retryWrites=true&w=majority');

var personagemSchema = new mongoose.Schema({
  nome: String
}, { collection: 'personagens' }
);

module.exports = { Mongoose: mongoose, CustomerSchema: personagemSchema }