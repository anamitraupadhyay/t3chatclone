const express = require('express');
const auth = require('../middleware/auth');
const chatController = require('../controllers/chatController');

const router = express.Router();

// All routes require authentication
router.post('/', auth, chatController.addMessage); // Add a message (new or existing conversation)
router.get('/conversations', auth, chatController.getUserConversations); // Get all user conversations
router.get('/conversations/:conversationId', auth, chatController.getConversation); // Get specific conversation
router.delete('/conversations/:conversationId', auth, chatController.deleteConversation); // Delete specific conversation

module.exports = router;