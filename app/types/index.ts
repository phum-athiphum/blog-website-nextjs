export interface User {
    id: number;
    username: string;
    created_date: string;
    updated_date: string;
  }
  
  export interface Category {
    id: number;
    name: string;
    created_date: string;
    updated_date: string;
  }
  
  export interface Comment {
    id: number;
    description: string;
    created_date: string;
    updated_date: string;
    user: User;
  }
  
  export interface Post {
    id: number;
    title: string;
    description: string;
    created_date: string;
    updated_date: string;
    category: Category;
    user: User;
    comments: Comment[];
  }
  
  export interface PostsResponse {
    message: string;
    data: Post[];
  }