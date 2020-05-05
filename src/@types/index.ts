export interface IUser {
  email: string;
  token?: string;
  username: string;
  bio?: string;
  image?: string;
}
export interface TArticle {
  slug: string;
  title: string;
  description: string;
  body: string;
  tagList: string[];
  createdAt: string;
  updatedAt: string;
  favorited: boolean;
  favoritesCount: number;
  author: {
    username: string;
    bio: string;
    image: string;
    following: boolean;
  };
}
export type TArticles = TArticle[];

export interface TMultipleArticles {
  articles: TArticles;
  articlesCount: number;
}

export interface RegisterPayload {
  user: { username: string; email: string; password: string };
}
export interface LoginPayload {
  user: { email: string; password: string };
}
export interface UserUpdatePayload {
  user: {
    email: string;
    username: string;
    password: string;
    bio: string;
    image: string;
  };
}
export interface TArticlePayload {
  article: {
    title: string;
    description: string;
    body: string;
    tagList: string[];
  };
}
export interface TGetArticlesPayload {
  shouldGetFeeds?: boolean;
}
