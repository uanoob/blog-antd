import React from 'react';
import { List } from 'antd';

const Posts = ({ posts }: any) => (
  <List
    itemLayout='horizontal'
    dataSource={posts}
    renderItem={(item: { id: number; title: string; body: string }) => (
      <List.Item>
        <List.Item.Meta title={item.title} description={item.body} />
      </List.Item>
    )}
  />
);

export default Posts;
