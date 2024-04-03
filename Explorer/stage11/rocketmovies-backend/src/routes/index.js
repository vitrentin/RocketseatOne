const { Router } = require('express');

const usersRouter = require('./users.routes');
const sessionsRouter = require('./sessions.routes');
const notesRouter = require('./notes.routes');
const tagsRouter = require('./tags.routes');

const router = Router();
router.get('/', (request, response) => response.send(`<h1>Hello World!</h1>`));
router.use('/users', usersRouter);
router.use('/sessions', sessionsRouter);
router.use('/notes', notesRouter);
router.use('/tags', tagsRouter);

module.exports = router;
