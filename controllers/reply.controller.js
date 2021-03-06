const Reply = require("../models/reply");
const Forum = require("../models/forum");

module.exports = {
  create: async (req, res) => {
    const reply = await Reply.create({
      reply_description: req.body.reply_description,
      forum: req.params.forumId,
      user: req.body.user,
    });
    await reply.save();
    const forum = await Forum.findById(req.params.forumId);
    forum.replies.push(reply);
    await forum.save();
    return res.json(reply);
  },
  getReplies: async (req, res) => {
    const replies = await Forum.findById(req.params.forumId).populate(
      "replies"
    );
    res.json(replies);
  },
  deleteByReplyId: async (req, res) => {
    const deleteReply = await Reply.findByIdAndRemove(req.params.replyId);
    res.json(deleteReply);
  },
  updateByReplyId: async (req, res) => {
    console.log(req.body);
    const updateReply = await Reply.findByIdAndUpdate(
      req.params.replyId,
      req.body
    );
    res.json(updateReply);
  },
};
