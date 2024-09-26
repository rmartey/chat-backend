import ChatModel from "../models/chat.model.js";

export const createChat = async (req, res) => {
  try {
    const existingChat = await ChatModel.findOne({
      members: { $all: [req.body.senderId, req.body.receiverId] },
    });

    if (existingChat) {
      // If chat exists, return the existing chat
      return res
        .status(200)
        .json({ message: "Chat already exists", chat: existingChat });
    }

    const newChat = new ChatModel({
      members: [req.body.senderId, req.body.receiverId],
    });

    const result = await newChat.save();
    res.status(201).json(result);
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const userChats = async (req, res) => {
  try {
    const chats = await ChatModel.find({
      members: { $in: [req.params.userId] },
    });

    res.status(200).json({ chats });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const findChat = async (req, res) => {
  try {
    const chats = await ChatModel.findOne({
      members: { $all: [req.params.firstUser, req.params.secondUser] },
    });

    res.status(200).json({ chats });
  } catch (error) {
    res.status(500).json({ error });
  }
};

export const getChats = async (req, res) => {
  res.status(200).json({ message: "everything is good" });
};
