export type SinglePost = { data: string };
export type FacebookProfileData = {
  name: string;
  details: {
    age: number;
    dob: string;
  };
  singlePosts: SinglePost[];
};
