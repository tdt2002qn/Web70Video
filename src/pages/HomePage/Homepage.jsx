import React from 'react'
import TypeProduct from '../../components/TypeProduct/TypeProduct'
import { WrapperProduct, WrapperTypeProduct } from './style'
import SlideComponient from '../../components/SlideComponient/SlideComponient'
import slide1 from '../../Imagess/Image/Slide1.webp'
import slide2 from '../../Imagess/Image/Slide2.webp'
import CardComponent from '../../components/CardComponent/CardComponent'
import NavBarComponent from '../../components/NavbarComponent/NavBarComponent'
import ButtonComponent from '../../components/ButtonComponents/ButtonComponent'
const Homepage = () => {
  const arr = ['Iphone', 'Oppo', 'Samsung']
  return (
    <div style={{ padding: '0 120px' }}>
      <WrapperTypeProduct>
        {arr.map((item) => {
          return (
            <TypeProduct name={item} key={item} />
          )
        })}
      </WrapperTypeProduct>
      <SlideComponient arrImage={[slide1, slide2]} />
      <WrapperProduct>
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
        <CardComponent />
      </WrapperProduct>
      <div style={{ justifyContent: 'center', display: 'flex' }}>
        <ButtonComponent textButton="Thêm" type="outline" styleButton={{
          border: '2px solid #ADD8E6', background: '#ADD8E6', color: 'blue', borderRadius: '4px', style: 'groove', width: '240px'
        }} />
      </div>
    </div>
  )
}

export default Homepage