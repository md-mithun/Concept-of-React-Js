import { useEffect, useState } from 'react';
import Posts from './Posts';

const FetchData1 = () => {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setLoading(false);
        setError('');
        setPosts(data);
      })
      .catch((err) => {
        setLoading(false);
        setError('There was an error!');
        console.log(err);
      });
  }, []);
  return (
    <div>
      {loading && <h2>Loading.....</h2>}
      {error && <h2>{error}</h2>}
      {!error &&
        !loading &&
        posts.length > 0 &&
        posts.map((post) => (
          <Posts
            key={post.id}
            id={post.id}
            title={post.title}
            body={post.body}
          />
        ))}
    </div>
  );
};

export default FetchData1;
