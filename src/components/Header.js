

const Header = () => {
  const home =  "MMS Middleware";  
  const aboutUs = "(note:please do not close this browser)";
  const h1Style = {
    fontFamily: 'Comic Sans MS', // Corrected the property name
    color: 'red'
  };

  return (
    <header>
      <h1 style={h1Style}>{home} {aboutUs}</h1>
    </header>
  );
}

export default Header;
