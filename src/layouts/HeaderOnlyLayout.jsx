import { Outlet } from 'react-router-dom';
import Header from '../components/Header';  


function HeaderOnlyLayout() {
  return (
    <>
      <Header /> 
      <Outlet /> 
    </>
  );
}

export default HeaderOnlyLayout;