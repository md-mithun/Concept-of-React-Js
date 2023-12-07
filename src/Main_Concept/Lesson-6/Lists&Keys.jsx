import StateLifeCycle from './State_&_LifeCycle';
const ListsKeys = (props) => {
  return (
    <div>
      {props.quantities.map(() => (
        <StateLifeCycle key={Math.random()} />
      ))}
    </div>
  );
};

export default ListsKeys;

// In App.jsx
//<ListsKeys quantities={[1, 1, 1]} />
