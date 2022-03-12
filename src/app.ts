import express from 'express';
import morgan from 'morgan';
import * as path from 'path';
import cookieParser from 'cookie-parser';
import createError from 'http-errors';
import expressLayouts from 'express-ejs-layouts';
import dotenv from 'dotenv';

dotenv.config();

import indexRouter from './routes/main';
import apiRouter from './routes/api';

const app = express();

app.set('views', path.join(__dirname, '..', 'views'));
app.set('view engine', 'ejs');
app.use(expressLayouts);


app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, '..', 'public')));

app.use('/', indexRouter);
app.use('/api', apiRouter);

app.use((req, res, next) => {
    next(createError(404));
});

// @ts-ignore
app.use((err, req, res, next) => {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    res.render('error', { title: `${res.statusCode} Error`, page: 'error'});
});

const port = process.env.PORT || 3216;

app.listen(port, () => {
    console.log(`Listening at http://localhost:${port}`);
});
