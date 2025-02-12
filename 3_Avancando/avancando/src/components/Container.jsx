const Container = ({ children, myValue }) => {
  return (
    <div>
        <h2>Container</h2>
        { children }
        <p>{myValue}</p>
    </div>
  );
};

export default Container;