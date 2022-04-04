const { Router } = require('express');
const router = Router();

const { renderGuestbook, renderNewMessage, createNewMessage, renderAjaxMessage, createAjaxMessage} = require('../controllers/entries.controller')

router.get('/', renderGuestbook);

router.get('/new-message', renderNewMessage);

router.post('/new-message', createNewMessage);

router.get('/ajax-message', renderAjaxMessage); //ajax testaus

router.post('/ajax-message', createAjaxMessage); //ajax testaus

module.exports = router;