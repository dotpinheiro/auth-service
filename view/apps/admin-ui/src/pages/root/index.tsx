import { Layout, Menu, Typography } from 'antd';
import { Link, Outlet, useLocation } from "react-router-dom";
import { baseRoutes } from '../../App';

export default function Root() {
    const location = useLocation()
    const selectedRoute = baseRoutes.find(route => route.path === location.pathname)
    return (
    <Layout>
        <Layout.Sider width={200}>
            <Layout.Header style={{ display: 'flex', alignItems: 'center' }}>
                <Typography.Title level={3} style={{ color: 'white' }}>Heimdall</Typography.Title>
            </Layout.Header>
            <Menu
            mode="inline"
            defaultSelectedKeys={[selectedRoute?.path || '/']}
            style={{ height: '100%', borderRight: 0 }}
            >
            {
                baseRoutes.map((route, index) => {
                   if(!route.children)
                    return (
                        <Menu.Item key={route.path}>
                            <Link to={route.path}>
                                {route.name}
                            </Link>
                        </Menu.Item>
                    )

                   return (
                    <Menu.SubMenu key={index} title={route.name}>
                        {
                            route.children.map((child, childIndex) => {

                                //TODO: simplify this
                                if(!child.children)
                                    return (
                                        <Menu.Item key={child.path}>
                                            <Link to={child.path}>
                                                {child.name}
                                            </Link>
                                        </Menu.Item>
                                    )

                                return (
                                    <Menu.SubMenu key={childIndex} title={child.name}>
                                        {
                                            child.children.map((grandChild) => (
                                                <Menu.Item key={grandChild.path}>
                                                    <Link to={grandChild.path}>
                                                        {grandChild.name}
                                                    </Link>
                                                </Menu.Item>
                                            ))
                                        }
                                    </Menu.SubMenu>
                                )
                            })
                        }
                    </Menu.SubMenu>
                   )
                })
            }
            </Menu>
        </Layout.Sider>
        <Layout>
            <Layout.Header style={{ display: 'flex', alignItems: 'center' }}>
                <Typography.Title level={3} style={{ color: 'white' }}>{selectedRoute?.name}</Typography.Title>
            </Layout.Header>
            <Layout.Content style={{ padding: 24, margin: 0, minHeight: 280 }}>
                <Outlet/>
            </Layout.Content>
        </Layout>
      </Layout>
    );
  }
