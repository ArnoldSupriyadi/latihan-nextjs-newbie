import { Post } from "@/app/model/post";
import axios from "axios";
import { notFound } from "next/navigation";
import NotFound from "./not-found";

export const metadata = {
    title: "Posts",
    description: "Posts"
};

export default async function Page({ params }: { params: Promise<{ id: string }> }) {
    const { id } = await params;
    const { data } = await axios.get<Post>(`http://localhost:3001/posts/${id}`)
        .catch(() => { return { data: null };
    });

    if (!data) {
        return notFound();
    }
    const { title, description } = data;

    return (
        <div>
            <h1 className="font-bold text-2xl text-gray-600">Post Details</h1>
            <h1 className="font-bold text-2xl text-gray-600">Posts at {id} {title} </h1>
            <p className="text-gray-600">{description}</p>
        </div>
    )
}