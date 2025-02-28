type UserLevel = {
    level_id: number;
    level_name: "Admin" | "User" | "Guest";
};

type User = {
    user_id: number;
    username: string;
    password_hash: string;
    email: string;
    user_level_id: number;
    profile_picture: string | null;
    profile_info: string | null;
    created_at: Date | string;
};

type UserWithNoPassword = Omit<UserWithLevel, "password_hash">;

type Tag = {
    tag_id: number;
    tag_name: string;
};

type PostTag = {
    post_id: number;
    tag_id: number;
};
type TravelPost = {
    post_id: number;
    user_id: number;
    filename: string;
    media_type: string;
    thumbnail: string | null;
    screenshots: string[] | null;
    continent: string;
    country: string;
    city: string;
    start_date: Date | string;
    end_date: Date | string;
    description: string;
    created_at: Date | string;
    tags: string[] | null;
};

type Follow = {
    following_id: number;
    follower_id: number;
};

type Comment = {
    comment_id: number;
    post_id: number;
    user_id: number;
    comment_text: string;
    created_at: Date;
};
type Like = {
    like_id: number;
    post_id: number;
    user_id: number;
    created_at: Date;
};

type TagResult = PostTag & Tag;

type UploadResult = {
    message: string;
    data?: {
        image: string;
    };
};

type MostLikedPosts = Pick<TravelPost, "post_id" | "user_id" | "filename" | "media_type" | "continent" | "country" | "city" | "start_date" | "end_date" | "description" | "created_at"> & Pick<User, "user_id" | "username" | "email" | "profile_picture" | "profile_info" | "created_at"> & {
    likes_count: bigint;
};

type UserWithLevel = Omit<User, "user_level_id"> & Pick<UserLevel, "level_name">;

type TokenContent = Pick<User, "user_id" | "username" | "email"> & Pick<UserLevel, "level_name">;

type FileInfo = {
    filename: string;
    user_id: number;
};

export type { UserLevel, User, Comment, Like, Tag, PostTag, TagResult, UploadResult, MostLikedPosts, UserWithLevel, TokenContent, FileInfo, TravelPost, UserWithNoPassword, Follow };
