import { Schema, model } from 'mongoose';
import autopopulate from 'mongoose-autopopulate';
import { DATABASES } from '../../constants';
import IComment from '../../interfaces/comment.interface';

const commentSchema = new Schema<IComment>(
  {
    user: {
      type: Schema.Types.ObjectId,
      ref: DATABASES.USER,
      required: true,
      autopopulate: true,
    },
    content: {
      type: String,
      required: true,
    },
    attachments: [
      {
        type: String, // URL or file reference
      },
    ],
    project_task: {
      type: Schema.Types.ObjectId,
      ref: DATABASES.PROJECT_TASK,
      required: true,
    },
    deleted: {
      type: Boolean,
      select: false,
      required: true,
      default: false,
    },
  },
  {
    timestamps: true,
  }
);

commentSchema.plugin(autopopulate);

const CommentModel = model<IComment>(DATABASES.COMMENT, commentSchema);

export default CommentModel;
