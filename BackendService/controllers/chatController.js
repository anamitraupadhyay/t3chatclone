const Chat = require('../models/Chat');
const { v4: uuidv4 } = require('uuid');

// Start a new conversation or add a message to an existing one
exports.addMessage = async (req, res) => {
  try {
    const userId = req.auth.userId; // Always use Clerk userId
    const { question, response, conversationId } = req.body;

    if (!question || !response) {
      return res.status(400).json({ error: 'question and response are required' });
    }

    if (conversationId) {
      // Add to existing conversation
      const chat = await Chat.findOne({ conversationId, userId });
      if (!chat) {
        return res.status(404).json({ error: 'Conversation not found or not owned by user' });
      }

      chat.messages.push({ question, response });
      await chat.save();
      return res.json(chat);
    } else {
      // Start a new conversation
      const newConversationId = uuidv4();
      const chat = new Chat({
        userId,
        conversationId: newConversationId,
        messages: [{ question, response }],
      });
      await chat.save();
      return res.status(201).json(chat);
    }
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to save message' });
  }
};

// Get all conversations for the authenticated user
exports.getUserConversations = async (req, res) => {
  try {
    const userId = req.auth.userId;
    const chats = await Chat.find({ userId }).sort({ updatedAt: -1 });
    res.json(chats);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch conversations' });
  }
};

// Get a specific conversation by conversationId for the authenticated user
exports.getConversation = async (req, res) => {
  try {
    const userId = req.auth.userId;
    const { conversationId } = req.params;
    const chat = await Chat.findOne({ userId, conversationId });
    if (!chat) {
      return res.status(404).json({ error: 'Conversation not found' });
    }
    res.json(chat);
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch conversation' });
  }
};

// Delete a specific conversation by conversationId for the authenticated user
exports.deleteConversation = async (req, res) => {
  try {
    const userId = req.auth.userId;
    const { conversationId } = req.params;
    const chat = await Chat.findOneAndDelete({ userId, conversationId });
    if (!chat) {
      return res.status(404).json({ error: 'Conversation not found or not owned by user' });
    }
    res.json({ message: 'Conversation deleted successfully' });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Failed to delete conversation' });
  }
};