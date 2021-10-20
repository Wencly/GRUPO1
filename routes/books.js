const express = require("express");
const { isValidObjectId } = require("mongoose");
const router = express.Router();

// creating a new document
const {
  getAllBooks,
  getOneBook,
  saveNewBook,
  editABook,
  deleteABook,
} = require("../database/crudBook");

//handling the methods requested ==> CALL THE FUNCTIONS OF MONGOOSE IN CRUDBOOKS.FILE

//Get All Books
router.get("/", async (req, res) => {
  const allBooks = await getAllBooks();
  res.send(allBooks);
});

//Get one book
router.get("/:id", async (req, res) => {
  const bookId = req.params.id;
  if (!isValidObjectId(bookId)) {
    return res.send({ message: `Not valid reference to a book - ${bookId}` });
  }
  const oneBook = await getOneBook(bookId);
  return res.send(oneBook);
});

//Create new book
router.post("/", async (req, res) => {
  const payload = req.body;
  const newBook = await saveNewBook(payload);
  res.send(newBook);
});

// Update a book
router.put("/:id", async (req, res) => {
  const bookId = req.params.id;
  const payload = req.body;
  if (!isValidObjectId(bookId)) {
    return res.send({ message: `Not valid reference to a book - ${bookId}` });
  }
  const editedBook = await editABook(bookId, payload);
  return res.send(editedBook);
});

//Delete a book
router.delete("/:id", async (req, res) => {
  const bookId = req.params.id;
  if (!isValidObjectId(bookId)) {
    return res.send({ message: `Not valid reference to a book - ${bookId}` });
  }
  const deletedBook = await deleteABook(bookId);
  res.send(deletedBook);
});

module.exports = router;
