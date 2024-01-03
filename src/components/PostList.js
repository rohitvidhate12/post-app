import { Link } from "react-router-dom";

function PostList({ list }) {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>Id</th>
            <th>Title</th>
            <th>Body</th>
          </tr>
        </thead>
        <tbody>
          {list.map((post) => {
            return (
              <Link key={post.id} to={`/post-detail/${post.id}`}>
                <tr>
                  <td>{post.id}</td>
                  <td>{post.title}</td>
                  <td>{post.body}</td>
                </tr>
              </Link>
            );
          })}
        </tbody>
      </table>
    </div>
  );
}

export default PostList;
