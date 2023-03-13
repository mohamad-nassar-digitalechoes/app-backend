const express=require('express');
const OpenAiController = require('./controllers/OpenAIController');
const Route=express.Router();

Route.get('/models',OpenAiController.getModels);
Route.post('/completions',OpenAiController.sendMessage);

module.exports=Route;
