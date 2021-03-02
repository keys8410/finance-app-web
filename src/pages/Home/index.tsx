import React from 'react';
import { usePaginateFetch } from '../../hooks/usePaginateFetch';

type PostType = { post: { title: string; body: any; id: number } };
function Post({ post }: PostType) {
  const { title, body, id } = post;
  return (
    <div className="Card">
      <h1 className="Card--title">
        {id}. {title}
      </h1>
      <p className="Card--body">{body}</p>
    </div>
  );
}

const Home = () => {
  const {
    response,
    error,
    isLoadingMore,
    size,
    setSize,
    isReachingEnd,
  } = usePaginateFetch('/usuario/lancamentos');

  if (error) return <h1>Something went wrong!</h1>;
  if (!response) return <h1>Loading...</h1>;

  return (
    <div className="container">
      <h1>My Posts with useSWRInfinite</h1>
      {response.map((post: any) => (
        <Post post={post} key={post?.id} />
      ))}
      <button
        disabled={isLoadingMore || isReachingEnd}
        onClick={() => setSize(size + 1)}
      >
        {isLoadingMore
          ? 'Loading...'
          : isReachingEnd
          ? 'No more posts'
          : 'Load more'}
      </button>
    </div>
  );
};
export default Home;
