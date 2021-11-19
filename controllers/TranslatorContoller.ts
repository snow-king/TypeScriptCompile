import { InputCode } from "../models/InputCode"
import express, { Request, Response } from "express";
import {Translator,Languages} from "../models/Translator";

exports.send = async (req: express.Request, res: express.Response) =>{
    try {
        let code = new InputCode(req)
        let trans = new Translator(code, Languages.JS)
        console.log( trans.getResult())
        res.status(201).json( trans.getResult())
    } catch (e) {
        // @ts-ignore
        res.status(500).send(e.message);
    }
}