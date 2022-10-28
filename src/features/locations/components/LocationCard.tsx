import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import ApartmentIcon from '@mui/icons-material/Apartment';

// Models
import { Location } from '../models/location.model';

function LocationCard(props: { item: Location }) {
  const { item } = props;

  const cardStyles = {
    width: '20%',
    height: '27vh',
    minHeight: '300px',
    marginTop: 5,
    marginBottom: 5,
    textAlign: 'center',
  };

  return (
    <Card sx={cardStyles}>
      <CardContent>
        <ApartmentIcon sx={{ fontSize: 100, margin: '20px' }}></ApartmentIcon>

        <Typography variant="h5">{item.address.addressLine1}</Typography>

        <Typography variant="subtitle1" sx={{ color: '#6a6d72' }}>
          {item.address.city}, {item.address.state} {item.address.zip}
        </Typography>

        <Typography variant="body2" sx={{ color: '#6a6d72' }}>
          {item.locationType}
        </Typography>

        <Typography variant="body2" sx={{ color: '#6a6d72' }}>
          {item.locationDetails}
        </Typography>
      </CardContent>
    </Card>
  );
}

export default LocationCard;
