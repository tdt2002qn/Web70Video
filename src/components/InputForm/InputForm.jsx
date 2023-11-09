import { Input } from 'antd'
import React, { useState } from 'react'

const InputForm = (props) => {
  const [valueInput, setValueinput] = useState('')
  const { placeholder = 'Nhập', ...rests } = props
  return (
    <Input placeholder={placeholder} valueInput={valueInput}  {...rests} />

  )
}

export default InputForm