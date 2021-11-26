import express from "express";
const Translator = require('../controllers/TranslatortToCompileContoller')
const router = express.Router();

router.post('/translator', Translator.send )
module.exports = router;