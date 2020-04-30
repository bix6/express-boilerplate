const express = require('express');
const xss = require('xss');
const path = require('path');
const FoldersService = require('./folders-service');

const foldersRouter = express.Router();
const jsonParser = express.json();

const sanitizeFolder = folder => ({
    id: folder.id,
    name: xss(folder.name)
});

foldersRouter
    .route('/')
    .get((req, res, next) => {
        FoldersService.getAllFolders(req.app.get('db'))
            .then(folders => { 
                res.json(folders.map(sanitizeFolder))
            })
            .catch(next)
    })

module.exports = foldersRouter;