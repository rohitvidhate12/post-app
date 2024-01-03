import { useLoaderData } from "react-router-dom";
import { getPostDetail } from "../services/post";

const PostDetail = () => {
  const { post } = useLoaderData();
  console.log({ post });

  return (
    <>
      <h1>Post Detail</h1>
      <p>
        <h3>Id:</h3> <span>{post.id}</span>
      </p>
      <p>
        <h3>Title:</h3> <span>{post.title}</span>
      </p>
      <p>
        <h3>Body:</h3> <span>{post.body}</span>
      </p>
    </>
  );
};

export default PostDetail;

export async function loader({ params }) {
  const response = await getPostDetail(params.id);
  return { post: response.data };
}
