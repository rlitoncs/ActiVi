import '../../styles/navigation/MenuList.scss'
import Logo from './Logo';
import { useNavigate } from "react-router-dom";
import { Menu, Layout, Button } from "antd";
import { HomeOutlined, AppstoreOutlined} from "@ant-design/icons/lib/icons";
import { MenuUnfoldOutlined, MenuFoldOutlined } from '@ant-design/icons'
import LogoutIcon from '@mui/icons-material/Logout';
import FitnessCenterIcon from '@mui/icons-material/FitnessCenter';

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
      <Logo />
      <Menu.Item className={"dashboard-menu-item"} key="/dashboard" icon={<HomeOutlined/>} title="Dashboard" style={{padding: !collapsed ? "50px" : "30px"}}> {!collapsed && "Dashboard"}</Menu.Item>
      <Menu.Item className={"exercise-menu-item"} key="/exercises" icon={<FitnessCenterIcon/>} title="Fitness" style={{padding: !collapsed ? "50px" : "30px"}}>{!collapsed && "Exercises"}</Menu.Item>
      <Menu.Item className={"faq-menu-item"} key="/faq" icon={<AppstoreOutlined/>} title="FAQ" style={{padding: !collapsed ? "50px" : "30px", }}>{!collapsed && "FAQ"}</Menu.Item>
      <Menu.Item className={"logout-menu-item"} key="/logout" icon={<LogoutIcon/>} title="Logout" style={{padding: !collapsed ? "50px" : "30px"}}>{!collapsed && "Logout"}</Menu.Item>
      
    </Menu>

  )
}

export default MenuList;