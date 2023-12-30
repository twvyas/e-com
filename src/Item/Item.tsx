// import Button from '@material-ui/core/Button'
import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

//types
import { CartItemType } from '../App'
//styles
import { Wrapper } from './Item.styles'
type Props = {
    item: CartItemType;
    handleAddToCart: (clickedItem: CartItemType) => void;
}
const Item: React.FC<Props> = ({ item, handleAddToCart }) => (
    <div className="card" style={{ width: '18rem' }}>
        <br />
        <img
            className="card-img-top"
            style={{ width: '10rem', height: '10rem', margin: 'auto' }}
            src={item.image}
            alt={item.title}
        />
        <div className="card-body">

            <h5
                className="card-title"
                title={item.title}
                style={{
                    overflow: 'hidden',
                    textOverflow: 'ellipsis',
                    whiteSpace: 'nowrap',
                }}>
                {item.title}
            </h5>

            <p
                className="card-text "
                title={item.description}

                style={{
                    display: '-webkit-box',
                    WebkitLineClamp: 2,
                    WebkitBoxOrient: 'vertical',
                    overflow: 'hidden',
                }}>
                {item.description}
            </p>
        </div>
        <div className="card-body"  style={{ borderRadius: '0 0 40px 40px' }}>
            <Button className='button' onClick={() => handleAddToCart(item)}>
                Add to Cart
            </Button>
 
        </div>
    </div>


);
export default Item;