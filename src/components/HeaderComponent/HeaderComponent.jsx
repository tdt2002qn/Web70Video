import { Col } from 'antd'
import React from 'react'
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperHeaderSmall } from './style'
import Search from 'antd/es/input/Search'
import {
  UserOutlined,
  DownCircleOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';

const HeaderComponent = () => {
  return (
    <div>
      <WrapperHeader gutter={15}>
        <Col span={6}>
          <h1> <WrapperTextHeader>DIENTU-DIENTHOAI</WrapperTextHeader></h1>
        </Col>

        <Col span={12} >
          <Search
            placeholder="input search text"
            allowClear
            enterButton="Search"
            size="large"
          //onSearch={onSearch}
          /></Col>
        <Col span={6} style={{ display: 'flex', gap: '30px' }}>

          <WrapperHeaderAccount>

            <UserOutlined style={{ fontSize: '30px' }} />

            <div>
              <WrapperHeaderSmall> Đăng nhập/Đăng ký</WrapperHeaderSmall> <br />
              <div>
                <DownCircleOutlined />
                <WrapperHeaderSmall>Tài Khoản</WrapperHeaderSmall>
              </div>
            </div>
          </WrapperHeaderAccount>
          <div>

            <ShoppingCartOutlined style={{ fontSize: '30px' }} />
            <WrapperHeaderSmall>Giỏ hàng</WrapperHeaderSmall>

          </div>
        </Col >
      </WrapperHeader >
    </div >
  )
}

export default HeaderComponent