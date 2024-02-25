import { FaStar, FaStarHalfAlt } from 'react-icons/fa'; // Import star icons from react-icons library

const Rating = ({ value, max }) => {
  const renderStars = () => {
    const stars = [];
    const fullStars = Math.floor(value);
    const hasHalfStar = value % 1 !== 0;

    for (let i = 0; i < fullStars; i++) {
      stars.push(<FaStar key={i} color="gold" />);
    }

    if (hasHalfStar) {
      stars.push(<FaStarHalfAlt key="half" color="gold" />);
    }

    const remainingStars = max - stars.length;
    for (let i = 0; i < remainingStars; i++) {
      stars.push(<FaStar key={`empty-${i}`} color="gray" />);
    }

    return stars;
  };

  return <div>{renderStars()}</div>;
};

export default Rating;
