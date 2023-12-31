const Posts = ({ id, title, body }) => {
  const center = { textAlign: 'center' };
  const card = {
    boxShadow: 'rgba(0, 0, 0, 0.35) 0px 5px 15px',
    background: 'white',
    padding: '5px',
    margin: '20px 5px',
  };
  return (
    <div style={card}>
      <h1 style={center}>{id}</h1>
      <h3>{title.toUpperCase()}</h3>
      <i>{body}</i>
    </div>
  );
};

export default Posts;
