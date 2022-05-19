import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <nav style={{display:'flex', justifyContent: 'space-between',alignItem:'center', padding: '20px 40px', backgroundColor:'#0D0D0D'}}>
      <Link style={{color:'#fff'}} to="/">Multiple Components</Link>
      <Link style={{color:'#fff'}} to="/products">Products</Link>

    </nav>
  );
};

export default Nav