import { Outlet } from 'react-router-dom';
import HeaderNone from '../components/HeaderNone';  



function HeaderNoneLayout() {
  return (
    <>
      <HeaderNone /> 
      <Outlet /> 
   
    </>
  );
}

export default HeaderNoneLayout;