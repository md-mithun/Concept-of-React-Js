import { useReducer, useEffect } from 'react';
import Posts from './Posts';

const initialState = {
  loading: true,
  error: '',
  posts: [],
};
function reducer(currentState, action) {
  switch (action.type) {
    case 'SUCCESS':
      return {
        loading: false,
        error: '',
        posts: action.values,
      };
    case 'FAILED':
      return {
        loading: false,
        error: 'There wa an error!',
        posts: [],
      };
    default:
      return currentState;
  }
}

const FetchData2 = () => {
  const [state, dispatch] = useReducer(reducer, initialState);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        dispatch({
          type: 'SUCCESS',
          values: data,
        });
      })
      .catch((err) => {
        dispatch({
          type: 'FAILED',
        });
        console.log(err);
      });
  }, []);
  return (
    <div>
      {state.loading && <h2>Loading.....</h2>}
      {state.error && <h2>{state.error}</h2>}
      {!state.error &&
        !state.loading &&
        state.posts.length > 0 &&
        state.posts.map((post) => (
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

export default FetchData2;

//fetch data using useReducer hook
