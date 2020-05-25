import React from 'react';
import { Layout } from 'antd';
import Blog from './components/Blog';

const { Header, Content } = Layout;

const App = () => (
  <Layout>
    <Header style={{ backgroundColor: 'lightgrey' }}>Blog Antd</Header>
    <Content style={{ padding: '0 50px' }}>
      <Blog />
    </Content>
  </Layout>
);

export default App;
