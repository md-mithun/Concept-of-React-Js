import Brackets from './Brackets';
import Composition from './Composition ';
import Emoji from './Emoji';
import Asterisk from './Asterisk';
const Home = () => {
  return (
    <Emoji>
      {({ addEmoji }) => (
        <Brackets>
          {({ addBrackets }) => (
            <Asterisk>
              {({ addasterisk }) => (
                <Composition
                  addEmoji={addEmoji}
                  addBrackets={addBrackets}
                  addasterisk={addasterisk}
                />
              )}
            </Asterisk>
          )}
        </Brackets>
      )}
    </Emoji>
  );
};

export default Home;
