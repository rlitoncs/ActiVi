import '../../styles/navigation/MenuList.scss'
import Logo from './Logo';
import { useNavigate } from "react-router-dom";
import { Menu, Layout, Button } from "antd";
import { Link } from 'react-router-dom';
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import HomeOutlinedIcon from '@mui/icons-material/HomeOutlined';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';
import GridViewOutlinedIcon from '@mui/icons-material/GridViewOutlined';
import LogoutIcon from '@mui/icons-material/Logout';

const MenuList = ({collapsed, setCollapsed}) => {
  const navigate = useNavigate();

  return (
    <Menu
    onClick={({key}) => { navigate(key);}}
    > 
      <Layout className='toggle'>
          <Button
            style={{color: "black"}}
            type="text" 
            onClick={setCollapsed}
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined 
            /> }
          />
      </Layout> 
      <Link to="/" style={{textDecoration:"none"}}> <Logo />  </Link> 
      <Menu.Item className={"dashboard-menu-item"} key="/dashboard" icon={<HomeOutlinedIcon style={{fontSize: "30px"}}/>} title="Dashboard" style={{paddingTop: !collapsed ? "40px" : "20px", paddingBottom: !collapsed ? "30px" : "20px"}}> {!collapsed && "Dashboard"}</Menu.Item>
      <Menu.Item className={"exercise-menu-item"} key="/exercises" icon={<FitnessCenterIcon/>} title="Fitness" style={{paddingTop: !collapsed ? "40px" : "20px", paddingBottom: !collapsed ? "30px" : "20px"}}> {!collapsed && "Exercises"}</Menu.Item>
      <Menu.Item className={"about-menu-item"} key="/about" icon={<GridViewOutlinedIcon/>} title="About" style={{paddingTop: !collapsed ? "40px" : "20px", paddingBottom: !collapsed ? "30px" : "20px"}}>{!collapsed && "About"}</Menu.Item>
      <Menu.Item className={"logout-menu-item"} key="/logout" icon={<LogoutIcon/>} title="Logout" style={{paddingTop: !collapsed ? "40px" : "20px", paddingBottom: !collapsed ? "30px" : "20px"}}>{!collapsed && "Logout"}</Menu.Item>
      
    </Menu>

  )
}

export default MenuList;