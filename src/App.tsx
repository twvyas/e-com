import './App.css'
import { useState } from 'react'
import { useQuery } from 'react-query'

//components
import Item from './Item/Item'
import Drawer from '@material-ui/core/Drawer'
import LinearProgress from '@material-ui/core/LinearProgress'
import Grid from '@material-ui/core/Grid'
// import AddShoppingCartIcon from '@material-ui/icons/AddShoppingCart'
import Badge from '@material-ui/core/Badge'


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

// React Query is a library that gives 
// React JS the state management ability for any kind of asynchronous data.
// “React Query is often described as the missing data-fetching library for React,
// but in more technical terms, it makes fetching, caching, synchronizing and
// updating server state in your React applications a breeze.”
// useQuery is a custom hook within React Query used to fetch data in
// a React application. Under the hood, these hooks manage lots of things such as
// caching data after the initial fetch, re-fetching data in the background, etc.

const getProducts = async (): Promise<CartItemType[]> =>
   await apiCall.get("products") // use axios(instance) instead of this 
  
//  can i call ?yep
const App = () => {
  const [cartOpen, setCartOpen] = useState(false);
  const [cartItems, setCartItems] = useState([] as CartItemType[])
  const { data, isLoading, error } = useQuery<CartItemType[]>(
    'products',
    getProducts
  );

  console.log(data)

  const getTotalItems = () => null;

  const handleAddToCart = (clickedItem: CartItemType) => null;

  const handleRemoveFromCart = () => null;

  if (isLoading) return <LinearProgress />
  if (error) return <div>Something went wrong ...</div>


  return (
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
  );
}

export default App
