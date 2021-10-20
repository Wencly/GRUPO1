const { Schema, model } = require("mongoose");
//MODEL
const bookSchema = new Schema({
  title: String,
  author: String,
  publication_year: String,
  imgUrl: String,
  pages: Number,
});
const Book = model.Books || model("Books", bookSchema);
module.exports = { Book };
