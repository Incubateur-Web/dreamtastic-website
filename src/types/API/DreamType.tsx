import { BaseTable } from "./BaseType";
import { User } from "./UserType";
import { Topic } from "./TopicType";
import { Type } from "./TypeType";
import { Comment } from "./CommentType";

export type Dream = BaseTable<{
  author: User;
  isAnonymous: boolean;
  isPublished: boolean;
  content: string;
  topic: Topic;
  type: Type;
  title: string;
  comments: Array<Comment>;
}>;