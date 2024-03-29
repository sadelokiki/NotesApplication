const express = require('express');
const router = express.Router();
const tagCtrl = require('./controllers/tagCtrl');
const noteCtrl = require('./controllers/noteCtrl');

module.exports = (app) => {
  router.route('/notes')
    .post(noteCtrl.createNote)
    .get(noteCtrl.getNotes)

  router.route('/search')
    .get(noteCtrl.searchNotes)  
  
  router.route('/notes/:id')
    .get(noteCtrl.findNotesByTag)
    .delete(noteCtrl.deleteNote)
    .put(noteCtrl.updateNote)

  router.route('/tags/:id')
    .delete(tagCtrl.deleteTag)
    .put(tagCtrl.updateTag)

  router.route('/tags')
    .get(tagCtrl.getTags)

  app.use('/', router);
}