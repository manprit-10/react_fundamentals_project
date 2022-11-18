import { Button } from "../../common/Button/Button";
import '../../common/common.css';
import { Logo } from "./components/logo/logo";
import "./Header.css";
import {useNavigate} from 'react-router-dom'

export const Header = function () {
  const navigate = useNavigate()
  const {user} = JSON.parse?.(localStorage.getItem('user-info'))
  const logOut=()=>{
    localStorage.removeItem('user-info')
    navigate('/login')
  }
  return (
    <div className="header_container">
      <div className="header">
        <Logo />
        <div className="user">
          <p>{user.name}</p>
          <div className="button">
            <Button onClick={()=>logOut()} name="Logout" />
          </div>
        </div>
      </div>
    </div>
  );
};
