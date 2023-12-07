import ClickCounter from './ClickCounter';
import HoverCounter from './HoverCounter';
import RenderCounter from './RenderCounter';

const Home = () => {
  return (
    //use this
    // <>
    //   <RenderCounter
    //     render={(count, handleCounter) => (
    //       <ClickCounter count={count} handleCounter={handleCounter} />
    //     )}
    //   />
    //   <RenderCounter
    //     render={(count, handleCounter) => (
    //       <HoverCounter count={count} handleCounter={handleCounter} />
    //     )}
    //   />
    // </>

    //or
    <>
      <RenderCounter>
        {(count, handleCounter) => (
          <ClickCounter count={count} handleCounter={handleCounter} />
        )}
      </RenderCounter>
      <RenderCounter>
        {(count, handleCounter) => (
          <HoverCounter count={count} handleCounter={handleCounter} />
        )}
      </RenderCounter>
    </>
  );
};

export default Home;
