const express = require('express');
const router = express.Router();
const chatController = require('../controllers/chatController');

router.post('/', chatController.addMessage); // Add a message (new or existing conversation)
router.get('/:userId', chatController.getUserConversations); // Get all user conversations
router.get('/:userId/:conversationId', chatController.getConversation); // Get specific conversation
router.delete('/:userId/:conversationId', chatController.deleteConversation); // Delete specific conversation

module.exports = router;