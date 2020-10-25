import React from "react";

import { Card, Avatar } from 'antd';
import { EditOutlined, EllipsisOutlined, SettingOutlined } from '@ant-design/icons';

const { Meta } = Card;

const NewCard = () => {

    return (
        <div>
        <Card
        style={{ width: 300 }}
        cover={
          <img
            alt="example"
            src="https://i.ebayimg.com/images/g/4Z4AAOSwePRd-U1P/s-l500.jpg"
          />
        }
        actions={[
          <SettingOutlined key="setting" />,
          <EditOutlined key="edit" />,
          <EllipsisOutlined key="ellipsis" />,
        ]}
      >
        <Meta
          avatar={<Avatar src="https://i.ebayimg.com/images/g/4Z4AAOSwePRd-U1P/s-l500.jpg" />}
          title="${title}"
          description="This is the description"
        />
      </Card>
        </div>
    )
}

export default NewCard;