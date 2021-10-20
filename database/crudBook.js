const express = require("express");

const { Book } = require("../models/book.schema");

// CRUD FUNCTIONS OF MONGOOSE

//FIND THAT GET ALL INFO OF A COLLECTION (BOOKS IN THIS CASE)
const getAllBooks = async () => {
  const allBooks = await Book.find();
  return allBooks;
};

//FIND ONE BOOK
const getOneBook = async (bookId) => {
  const oneBook = await Book.findById(bookId);
  return oneBook;
};

// CREATE A NEW BOOK
const saveNewBook = async (payload) => {
  const newBook = new Book(payload);
  const bookSaved = await newBook.save();
  return bookSaved;
};

//EDIT A BOOK ALREADY CREATED
const editABook = async (bookId, payload) => {
  const bookEdited = await Book.findByIdAndUpdate(bookId, payload, {
    new: true,
  });
  return bookEdited;
};

//DELETE A BOOK
const deleteABook = async (bookId) => {
  const oneBook = await Book.findByIdAndDelete(bookId);
  return oneBook;
};

module.exports = {
  getAllBooks,
  saveNewBook,
  getOneBook,
  editABook,
  deleteABook,
};
