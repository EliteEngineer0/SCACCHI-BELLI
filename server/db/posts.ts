import type { Post } from "@prisma/client";
import { prisma } from ".";

export const createPost = async (post: Post) => {
    return prisma.post.create({
        data: post
    });
};

// Get all posts made by a specific user
export const getPostsFromUser = async (username: string) => {
    return prisma.user.findUnique({
        where: {
            username
        },
        include: {
            posts: true
        }
    }).then(user => user?.posts || []);
};

export const getAllPosts = async () => {
    return prisma.post.findMany();
}