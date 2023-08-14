import { QueryStatus } from '@tanstack/react-query';

export type ImageType = {
  _id: string;
  url: string;
  name: string;
  createdAt: Date;
  updatedAt: Date;
};

export type ImageState = {
  status: QueryStatus;
  data: ImageType | null;
};

export type ImageCreate = Omit<ImageType, '_id'>;

export type IamgeUpdate = {
  _id: string;
  url?: string;
};
