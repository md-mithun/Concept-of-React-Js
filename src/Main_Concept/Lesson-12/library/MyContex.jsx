/* eslint-disable no-unused-vars */
class MyContex {
  constructor(value = null) {
    this.value = value;
  }

  Provider = ({ children, value }) => {
    this.value = value;
    return children;
  };

  Consumer = ({ children }) => {
    //children as function
    return children(this.value);
  };
}
function createContext(value = null) {
  const context = new MyContex(value);
  return {
    Provider: context.Provider,
    Consumer: context.Consumer,
  };
}

export default createContext;
