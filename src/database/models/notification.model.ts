import { Schema, model } from 'mongoose';
import { DATABASES } from '../../constants';
import INotification from '../../interfaces/notification.interface';

const NotificationSchema = new Schema<INotification>(
  {
    subscription: {
      type: Object,
      required: true,
    },
    rooms: [
      {
        type: String,
        required: true,
      },
    ],
    deleted: {
      type: Boolean,
      required: false,
      default: false,
      select: false,
    },
  },
  {
    timestamps: true,
  },
);

export default model<INotification>(DATABASES.NOTIFICATION, NotificationSchema);
