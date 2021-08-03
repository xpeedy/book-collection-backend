// const { json } = require("express")
const express = require("express")
const router = express.Router()
const Books = require("./books-model")

router.get("/", (req, res) => {
    Books.get().then(books => {
        !books ?
        res.status(404).json({ message:"books not found" }) :
        res.status(200).json(books)
    })
})

router.get("/:id", (req, res) => {
    const {id} = req.params
    if(id) {
        Books.getBy(id)
        .then(book => {
            res.status(200).json(book)
        })
        .catch(error => {
            res.status(500).json(error.message)
        })
    }else {
        res.status(404).json({message:"book not found"})
    }
})

module.exports = router;