/* @flow */
import mongoose from 'mongoose';

export const Schema = mongoose.Schema;
const schema = new Schema({
  title: {
    type: String,
    required: true,
  },
  content: {
    type: String,
    required: true,
  },
  category: {
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    required: true,
  },
  updatedAt: Date,
});

const Post = mongoose.model('Post', schema);
export default Post;
