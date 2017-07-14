// Core modules
import express from 'express';
import bodyParser from 'body-parser';

// Custom modules
import router from './app/api/router';
import errorHandler from './app/middleware/errorHandler';
import $404Handler from './app/middleware/404Handler';

let app = express();

// Use middleware as required
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Base router
app.use('/', router);

// Catch 404 and forward to error handler
app.use($404Handler);

// Main error handler
app.use(errorHandler);

export default app;
