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

const Item: React.FC<Props> = ({ item, handleAddToCart }) => {
  const renderStars = () => {
    const filledStars = Math.round(item.rating.rate); // Round to the nearest integer
    const stars = [];

    for (let i = 1; i <= 5; i++) {
      const starClass = i <= filledStars ? 'fa fa-star checked' : 'fa fa-star';
      stars.push(<span key={i} className={starClass}></span>);
    }

    return stars;
  };

  return (
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
        <p> {item.rating.count} </p>

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
