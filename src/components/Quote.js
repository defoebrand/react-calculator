import Navbar from './Navbar';

const Quote = () => {
  const style = {
    display: 'flex',
    flexDirection: 'column',
    width: '90vw',
    margin: '25px auto 0',
  };
  return (
    <>
      <Navbar />
      <div style={style}>
        <h1>Math Magicians</h1>
        <h3>Welcome to our page!</h3>
        <p>
          Mathematics is not about numbers, equations, computations, or
          algorithms: it is about understanding. –William Paul Thurston
        </p>
      </div>
    </>
  );
};

export default Quote;
