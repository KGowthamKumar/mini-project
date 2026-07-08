import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import "./InfoBox.css";

export default function InfoBox({ info }) {

    const HOT_URL =
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?w=600";

    const COLD_URL =
        "https://images.unsplash.com/photo-1483664852095-d6cc6870702d?w=600";

    const RAIN_URL =
        "https://images.unsplash.com/photo-1515694346937-94d85e41e6f0?w=600";

    const CLOUD_URL =
        "https://images.unsplash.com/photo-1534088568595-a066f410bcda?w=600";

    let imageUrl = CLOUD_URL;

    if (info.humidity >= 80) {
        imageUrl = RAIN_URL;
    } else if (info.temp > 30) {
        imageUrl = HOT_URL;
    } else if (info.temp < 15) {
        imageUrl = COLD_URL;
    }

    return (
        <div className="InfoBox">

            <h2>Weather Information</h2>

            {/* cardContainer starts here */}
            <div className="cardContainer">

                <Card sx={{ maxWidth: 400 }}>

                    <CardMedia
                        component="img"
                        height="220"
                        image={imageUrl}
                        alt="Weather"
                    />

                    <CardContent>

                        <Typography gutterBottom variant="h5">
                            {info.city}
                        </Typography>

                        <Typography variant="body1">
                            🌡️ Temperature : {info.temp}°C
                        </Typography>

                        <Typography variant="body1">
                            💧 Humidity : {info.humidity}%
                        </Typography>

                        <Typography variant="body1">
                            ❄️ Min Temperature : {info.tempMin}°C
                        </Typography>

                        <Typography variant="body1">
                            🔥 Max Temperature : {info.tempMax}°C
                        </Typography>

                        <Typography variant="body1">
                            🌤️ Weather : {info.weather}
                        </Typography>

                        <Typography variant="body1">
                            😊feelsLike: {info.feelsLike}°C
                        </Typography>

                    </CardContent>

                </Card>

            </div>
            {/* cardContainer ends here */}

        </div>
    );
}