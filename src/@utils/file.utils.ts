const fileBucketUrl = (url: string, type: string) => {
  return `${process.env.REACT_APP_BUCKET_URL}/${type}/${url}`;
};

export { fileBucketUrl };
