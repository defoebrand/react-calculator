import { Link } from 'react-router-dom';

const Navbar = () => {
  const style = {
    width: '100vw',
    display: 'flex',
    justifyContent: 'space-around',
    alignItems: 'center',
    height: '50px',
    backgroundColor: '#fffddd',
  };
  const linkStyle = {
    textDecoration: 'none',
    fontSize: 'calc(15px + 1vw)',
    fontWeight: 'bold',
    cursor: 'pointer',
  };
  return (
    <div style={style}>
      <Link style={linkStyle} to="/">Home </Link>
      <Link style={linkStyle} to="/App">Calculator</Link>
      <Link style={linkStyle} to="/Quote">Quote Of The Day</Link>
    </div>
  );
};

export default Navbar;
