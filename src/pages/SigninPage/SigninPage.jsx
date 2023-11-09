import React from 'react'
import { WrapperContainerLeft, WrapperContainerRight } from './style'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponents/ButtonComponent'

const SigninPage = () => {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div>
        <WrapperContainerLeft style={{ margin: '10px 0 20px' }}>
          <h1>Xin chào bạn!</h1>
          <p>Đăng nhập hoặc tạo tài khoản</p>
        </WrapperContainerLeft>
        <InputForm style={{ marginBottom: '10px' }} placeholder='Tên tài khoản' />
        <InputForm placeholder='Mật khẩu' />
        <ButtonComponent styleButton={{ background: "red", height: '48px', width: '250px', margin: '10px 0 20px' }}
          size={60}
          textButton={' Đăng nhập '}
          styleTextButton={{ color: '#fff' }}

        >

        </ButtonComponent>
        <p style={{ color: 'blue', cursor: 'pointer' }} > Quên mật khẩu</p>
        <p>Chưa có tài khoản ? <span style={{ color: 'blue', cursor: 'pointer' }}>Đăng ký tài khoản</span></p>
        <WrapperContainerRight>


        </WrapperContainerRight>
      </div>
    </div>
  )

}

export default SigninPage