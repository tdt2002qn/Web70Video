import React, { useState } from 'react'
import { WrapperContainerLeft, WrapperContainerRight } from './style'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponents/ButtonComponent'


const SignupPage = () => {

  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
      <div>
        <WrapperContainerLeft style={{ margin: '10px 0 20px' }}>
          <h1>Xin chào bạn!</h1>
          <p>Đăng ký tài khoản </p>
        </WrapperContainerLeft>
        <InputForm style={{ marginBottom: '10px' }} placeholder='Tên tài khoản' />
        <InputForm style={{ marginBottom: '10px' }} placeholder='Mật khẩu' />
        <InputForm placeholder='Nhập lại mật khẩu' />
        <ButtonComponent styleButton={{ background: "red", height: '48px', width: '250px', margin: '10px 0 20px' }}
          size={60}
          textButton={' Đăng ký '}
          styleTextButton={{ color: '#fff' }}

        >
        </ButtonComponent>
        <p >Đã có tài khoản ? <span style={{ color: 'blue', cursor: 'pointer' }}>Đăng nhập</span></p>
      </div>
    </div>
  )
}

export default SignupPage