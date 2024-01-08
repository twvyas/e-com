// import Button from '@material-ui/core/Button'
import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';

//types
import { CartItemType } from '../App'
//styles
// import { Wrapper } from './Item.styles'
type Props = {
  item: CartItemType;
  handleAddToCart: (clickedItem: CartItemType) => void;
}

const Item = ({ item, handleAddToCart }:Props) => {
  const renderStars = () => {
    const filledStars = Math.round(item.rating.rate); 
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      const starClass = i <= filledStars ? 'fa-solid fa-star' : 'fa-regular fa-star';
      stars.push(<i key={i} className={starClass} />);
    }

    return stars;
  };

  return (
    <div className="card" style={{ width: '18rem', margin:'auto'}}>
      <br />
      <img
        className="card-img-top "
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

        <p
          className="card-text "
          style={{
            display: '-webkit-box',
            WebkitLineClamp: 2,
            WebkitBoxOrient: 'vertical',
            overflow: 'hidden',
          }}>
          ${item.price}
        </p>


        {renderStars()}

        <br />

      </div>
      <div className="card-body" style={{ borderRadius: '0 0 40px 40px' }}>
        <Button className='button' onClick={() => handleAddToCart(item)}>
          Add to Cart
        </Button>
      </div>
    </div>
  );
}

export default Item;
