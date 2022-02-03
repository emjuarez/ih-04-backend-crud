// ./routes/books.js

const express			= require("express")
const router			= express.Router()

const bookController	= require("./../controllers/bookController")
//obtener libros
router.get("/", bookController.getBooks)
//crear pagina para crear libro en bd
router.get("/create", bookController.createBooks)

module.exports = router