import Homepage from '../pages/HomePage/Homepage'
import NotfoudPage from '../pages/NotfoudPage/NotfoudPage'
import OrderPage from '../pages/OrderPage/OrderPage'
import ProducDetailPage from '../pages/ProductDetailPage/ProducDetailPage'
import ProductsPage from '../pages/ProductsPage/ProductsPage'
import SigninPage from '../pages/SigninPage/SigninPage'
import SignupPage from '../pages/SingupPage/SignupPage'
import TypeProductPage from '../pages/TypeProductPage/TypeProductPage'
export const routes = [
  {
    path: '/',
    page: Homepage,
    isShowHeader: true
  },
  {
    path: '/Order',
    page: OrderPage,
    isShowHeader: true
  },
  {
    path: '/',
    page: ProductsPage,
    isShowHeader: true
  },
  {
    path: '/:type',
    page: TypeProductPage,
    isShowHeader: true
  },
  {
    path: '/signIn',
    page: SigninPage,
    isShowHeader: false
  },
  {
    path: '/signup',
    page: SignupPage,
    isShowHeader: false
  },
  {
    path: '/detail-product',
    page: ProducDetailPage,
    isShowHeader: true
  },
  {
    path: '*',
    page: NotfoudPage,
    isShowHeader: false
  }
]
