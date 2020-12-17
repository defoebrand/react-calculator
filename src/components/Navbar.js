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
      <a style={linkStyle} href="/">Home </a>
      <a style={linkStyle} href="/App">Calculator</a>
      <a style={linkStyle} href="/Quote">Quote Of The Day</a>
    </div>
  );
};

export default Navbar;
