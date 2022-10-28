import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

// Models
import { Location } from '../models/location.model';

function LocationCard(props: { item: Location }) {
  const { item } = props;

  const cardStyles = {
    width: '20%',
    height: '27vh',
    marginTop: 5,
    marginBottom: 5,
  };

  return (
    <Card sx={cardStyles}>
      <CardContent>
        <Typography variant="h6">Location Type: {item.locationType}</Typography>
        <Typography variant="subtitle2">{item.locationDetails}</Typography>
        <Typography variant="subtitle2">{item.address.city}</Typography>
      </CardContent>
    </Card>
  );
}

export default LocationCard;
