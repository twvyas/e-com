// import Button from '@material-ui/core/Button'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
//types
import { CartItemType } from '../App'
//styles
import { Wrapper } from './Item.styles'

type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}
const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
    <Wrapper>
        <img src={item.image} alt={item.title} />
        <div>
            <h3 className="one-line-title">{item.title}</h3>
            <p className="two-line-desc">{item.description}</p>
            <h3>${item.price}</h3>
        </div>
        {/* <Card style={{ width: '18rem' }}>
            <Card.Img className='img' variant="top" src={item.image} />
            <Card.Body>
                <Card.Title className='one-line-title'>{item.title}</Card.Title>
                <Card.Text className='two-line-desc '>
                {item.description}
                </Card.Text>
                <Button className='button' onClick={() => handleAddToCart(item)}>Add to Cart</Button>
            </Card.Body>
        </Card> */}
        <Button onClick={() => handleAddToCart(item)}>Add to Cart</Button>

    </Wrapper>

);
export default Item;