import React from 'react'
import { WrapperContainerLeft, WrapperContainerRight } from './style'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponents/ButtonComponent'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'
import { useState } from 'react'
import { navigate, useNavigate } from 'react-router-dom'
import { useMutation } from '@tanstack/react-query'
import * as UserServicer from '../../services/userService'
const SigninPage = () => {

  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');

  const [isShowPassword, setIsShowPassword] = useState(false)
  const [password, setPassword] = useState('');
  const navigate = useNavigate()
  const mutation = useMutation({
    mutationFn: (data) => UserServicer.loginUser(data)

  })
  const handleNavigateSignup = () => {
    navigate('/signup')
  }

  const handleSignin = () => {
    mutation.mutate({
      email,
      pass
    })
  }

  const handleOnchangeEmail = (value) => { setEmail(value) }
  const handleOnchangePass = (value) => { setPass(value) }


  console.log('mulation', mutation)
  return (

    <body style={{
      margin: '0',
      padding: '0',
      background: 'darkgrey'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <div style={{ height: '200px', width: '400px' }}>
          <WrapperContainerLeft style={{ margin: '10px 0 20px' }}>
            <h1>Xin chào bạn!</h1>
            <p>Đăng nhập hoặc tạo tài khoản</p>
          </WrapperContainerLeft>
          <InputForm style={{ marginBottom: '10px' }} placeholder='Tên tài khoản ( abc@gmail.com )' value={email} onChange={handleOnchangeEmail} />
          <div style={{ position: 'relative' }}>
            <span
              onClick={() => setIsShowPassword(!isShowPassword)}
              style={{
                zIndex: 10,
                position: 'absolute',
                top: '4px',
                right: '8px'
              }}
            >{
                isShowPassword ? (
                  <EyeFilled />
                ) : (
                  <EyeInvisibleFilled />
                )
              }
            </span>
            <InputForm
              placeholder="Mật khẩu"
              type={isShowPassword ? "text" : "password"}
              value={pass} onChange={handleOnchangePass}
            />
          </div>
          <ButtonComponent styleButton={{ background: "#00CCFF", height: '48px', width: '400px', margin: '10px 0 20px' }}
            disabled={email.length === 0 || pass.length === 0}
            onClick={handleSignin}
            size={60}
            textButton={' Đăng nhập '}
            styleTextButton={{ color: '#fff' }}

          >

          </ButtonComponent>
          <p style={{ color: 'blue', cursor: 'pointer' }} > Quên mật khẩu</p>
          <p>Chưa có tài khoản ? <span style={{ color: 'blue', cursor: 'pointer' }} onClick={handleNavigateSignup}>Đăng ký tài khoản</span></p>
          <WrapperContainerRight>


          </WrapperContainerRight>
        </div>
      </div>
    </body>
  )

}

export default SigninPage