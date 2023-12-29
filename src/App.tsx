import './App.css'
import { useEffect, useState } from 'react'
// import { useQuery } from 'react-query'

//components
import Item from './Item/Item'
import Drawer from '@material-ui/core/Drawer'
import LinearProgress from '@material-ui/core/LinearProgress'
import Grid from '@material-ui/core/Grid'
// import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Badge from '@material-ui/core/Badge'
import NavBar from './Item/NavBar'


//styles
import { Wrapper, StyledButton } from './App.styles';
import { apiCall } from './utils/functions'

//type
export type CartItemType = {
  id: number;
  category: string;
  description: string;
  image: string;
  price: number;
  title: string;
  amount: number;
}

const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  // const [cartItems, setCartItems] = useState([] as CartItemType[])
  const [data, setData] = useState([] as CartItemType[])

  const getProducts = async () => {
    try {
      setIsLoading(true);
      const productsArr = await apiCall.get("products"); // use axios(instance) instead of this 
      setData(productsArr.data);
    } catch (error) {
      console.error("Error fetching products:", error);
      setError(true)
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    getProducts();
  }, []);

  useEffect(() => {
    data.map((d) => console.log(d.category))

  }, [data]);

  const getTotalItems = () => null;
  const handleAddToCart = (clickedItem: CartItemType) => null;
  // const handleRemoveFromCart = () => null;

  if (isLoading) return <LinearProgress />
  if (error) return <div>Something went wrong ...</div>

  return (
    <>
      <NavBar />
      <Wrapper>
        <Drawer anchor='right' open={cartOpen} onClose={() => setCartOpen(false)}>
          Cart goes here
        </Drawer>
        <StyledButton onClick={() => setCartOpen(true)}>
          <Badge badgeContent={getTotalItems()}></Badge>
        </StyledButton>
        <Grid container spacing={3}>
          {data?.map(item => (
            <Grid item key={item.id} xs={12} sm={3}>
              <Item item={item} handleAddToCart={handleAddToCart}></Item>
            </Grid>
          ))}
        </Grid>
      </Wrapper>
    </>
  );
}

export default App

