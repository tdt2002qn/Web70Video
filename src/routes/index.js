import Homepage from '../pages/HomePage/Homepage'
import NotfoudPage from '../pages/NotfoudPage/NotfoudPage'
import OrderPage from '../pages/OrderPage/OrderPage'
import ProductsPage from '../pages/ProductsPage/ProductsPage'
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
    path: '*',
    page: NotfoudPage,
    isShowHeader: false
  }
]
