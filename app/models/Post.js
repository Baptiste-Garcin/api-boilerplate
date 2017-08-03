/* @flow */
import { Schema, mongoose } from 'mongoose';

const schema: Schema = new Schema({
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
