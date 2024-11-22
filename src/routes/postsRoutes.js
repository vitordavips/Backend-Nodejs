import express from "express";
import { listarPosts, postarNovoPost, uploadImagem } from "../controllers/postsControler.js";
import multer from "multer";

const storage = multer.diskStorage({
    destination: function(req, res, file, cb){
        cb(null, 'uploads/');
    },
    filename: function(req, file, cb){
        cb(mull, file.originalname);
    }
});

const upload = multer({dest:"./uploads", storage});

const routes = (app) => {
    app.use(express.json());
    
    app.get("/posts", listarPosts);
    app.post("/posts", postarNovoPost);
    app.post("/upload", upload.single("imagem"), uploadImagem);
};

export default routes;