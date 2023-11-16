import { Badge, Col } from 'antd'
import React from 'react'
import { WrapperHeader, WrapperHeaderAccount, WrapperTextHeader, WrapperHeaderSmall } from './style'
import Search from 'antd/es/input/Search'
import {
  UserOutlined,
  DownCircleOutlined,
  ShoppingCartOutlined,
} from '@ant-design/icons';
import ButtonInputSearch from '../ButtonInputSearch/ButtonInputSearch';
import { useNavigate } from 'react-router-dom';

const HeaderComponent = () => {
  const navigate = useNavigate()
  const handleNavigateLogin = () => {
    navigate('/signin')
  }
  return (
    <div>
      <WrapperHeader gutter={15}>
        <Col span={6}>
          <h1> <WrapperTextHeader>DIEN THOAI GIA RE</WrapperTextHeader></h1>
        </Col>

        <Col span={10} >
          <ButtonInputSearch
            size='large'
            textButton='Tìm kiếm'
            placeholder="input search text"

          //onSearch={onSearch}
          /></Col>
        <Col span={8} style={{ display: 'flex', gap: '30px', alignItems: 'center' }}>

          <WrapperHeaderAccount>

            <UserOutlined style={{ fontSize: '30px' }} />

            <div onClick={handleNavigateLogin} style={{ cursor: 'pointer' }}>
              <WrapperHeaderSmall> Đăng nhập/Đăng ký</WrapperHeaderSmall> <br />
            </div>
            <div>
              <DownCircleOutlined />
              <WrapperHeaderSmall>Tài Khoản</WrapperHeaderSmall>

            </div>
          </WrapperHeaderAccount>
          <div>
            <Badge count={4} size='small'>
              <ShoppingCartOutlined style={{ fontSize: '30px' }} />
            </Badge>
            <WrapperHeaderSmall>Giỏ hàng</WrapperHeaderSmall>

          </div>
        </Col >
      </WrapperHeader >
    </div >
  )
}

export default HeaderComponent