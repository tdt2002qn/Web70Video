import React, { useState } from 'react'
import { WrapperContainerLeft, WrapperContainerRight } from './style'
import InputForm from '../../components/InputForm/InputForm'
import ButtonComponent from '../../components/ButtonComponents/ButtonComponent'
import { useNavigate } from 'react-router-dom'
import { EyeFilled, EyeInvisibleFilled } from '@ant-design/icons'


const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [pass, setPass] = useState('');
  const [confirmpass, setConfirmPass] = useState('');

  const handleOnchangeEmail = (value) => { setEmail(value) }
  const handleOnchangePass = (value) => { setPass(value) }
  const handleOnchangeConfirmPass = (value) => { setConfirmPass(value) }

  const handleSignup = () => {
    console.log('Signup', email, pass, confirmpass)
  }

  const [isShowPassword, setIsShowPassword] = useState(false)
  const navigate = useNavigate()
  const handleNavigateSignin = () => {
    navigate('/signin')
  }

  return (
    <body style={{
      margin: '0',
      padding: '0',
      background: 'darkgrey'
    }}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '100vh' }}>
        <div style={{ height: '200px', width: '400px' }}>
          <WrapperContainerLeft style={{ margin: '10px 0 20px' }} >
            <h1>Xin chào bạn!</h1>
            <p>Đăng ký tài khoản </p>
          </WrapperContainerLeft>
          <InputForm style={{ marginBottom: '10px' }} placeholder='Tên tài khoản ( abc@gmail.com)' value={email} onChange={handleOnchangeEmail} />
          <div style={{ position: 'relative', marginBottom: '10px' }}>
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

          <div style={{ position: 'relative', }}>
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
              placeholder="Nhập lại mật khẩu"
              type={isShowPassword ? "text" : "password"}
              value={confirmpass} onChange={handleOnchangeConfirmPass}
            />
          </div>
          <ButtonComponent styleButton={{ background: "#00CCFF", height: '48px', width: '400px', margin: '10px 0 20px' }}
            onClick={handleSignup}
            disabled={email.length === 0 || pass.length === 0 || confirmpass.length === 0}
            size={60}
            textButton={' Đăng ký '}
            styleTextButton={{ color: '#fff' }}

          >
          </ButtonComponent>
          <p >Đã có tài khoản ? <span style={{ color: 'blue', cursor: 'pointer' }} onClick={handleNavigateSignin} >Đăng nhập</span></p>
        </div>
      </div>
    </body>
  )
}

export default SignupPage