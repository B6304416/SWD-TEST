import React from 'react';
import { Layout } from 'antd';
import { Outlet } from 'react-router-dom';
import AppHeader from './AppHeader';

const { Content } = Layout;

const AppLayout: React.FC = () => {
  return (
    <Layout className="app-layout">
      <AppHeader />
      <Content className="app-content">
        <Outlet />
      </Content>
    </Layout>
  );
};

export default AppLayout;
