import { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { displayPosts } from '../shared/redux/actions/postsActions';

const Posts = () => {
  // State
  const { posts, loading, error } = useSelector((state) => state.posts);
  console.log({ posts, loading, error });

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(displayPosts());
  }, []);
  return loading ? (
    <p>Loading...</p>
  ) : error ? (
    <p>{error}</p>
  ) : (
    posts.map((post) => (
      <ul key={post.id}>
        <li>{post.title}</li>
      </ul>
    ))
  );
};

export default Posts;
