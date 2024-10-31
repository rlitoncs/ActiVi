import useToggle from '../../hooks/useToggle';
import MenuList from './MenuList'
import { Layout } from 'antd';

const { Sider } = Layout;

const Sidebar = ({handleLogout}) => {
  const [collapsed, setCollapsed ] = useToggle(false);

  return (
    <nav className={"nav-menu-items"}> 
      <Layout>
        <Sider
          collapsed={collapsed}
          collapsible
          trigger={null}
        >
        <MenuList collapsed={collapsed} setCollapsed={setCollapsed} handleLogout={handleLogout}/>
        </Sider>
      </Layout>
    </nav>    
  )
}


export default Sidebar;