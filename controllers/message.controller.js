import MessageModel from "../models/message.model.js";

export const addMessage = async (req, res) => {
  const { chatId, senderId, text } = req.body;

  const message = await MessageModel({
    chatId,
    senderId,
    text,
  });

  try {
    const result = await message.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getMessages = async (req, res) => {
  const { chatId } = req.params;

  try {
    const messages = await MessageModel.find({ chatId });
    res.status(200).json(messages);
  } catch (error) {
    res.status(500).json({ error });
  }
};
