import express, { Request, Response } from "express";
const Translator = require('../controllers/TranslatorContoller')
const router = express.Router();

router.post('/translator', Translator.send )
module.exports = router;