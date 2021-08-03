const express = require("express")
const app = express()
// creates books, manga, users routers
const bookRouter = require("./books/books-router")
// const mangaRouter = require("./manga/manga-router")
// const userRouter = require("./users/users-router")
// need .json() to use req.body
app.use(express.json())
// tells server to use routers
app.use("/api/books",bookRouter)
// app.use("/api/manga",mangaRouter)
// app.use("/api/user",userRouter)
app.get("/",(req, res) => {
    res.json({message:"server up and running"})
})

module.exports = app;
