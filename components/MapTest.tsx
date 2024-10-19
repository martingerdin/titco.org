import { GoogleMap, LoadScript, Marker } from '@react-google-maps/api';
import React from 'react';

interface MapProps {
    data: {
        name: string;
        latitude: number;
        longitude: number;
    }[];
}

const MapComponent: React.FC<MapProps> = ({ data }) => {
    const mapContainerStyle = {
        width: '100%',
        height: '10%'
    };

    const center = {
        lat: data[0]?.latitude || 20.5937,
        lng: data[0]?.longitude || 78.9629
    };

    return (
        <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_API_KEY || ''}>
            <GoogleMap
                mapContainerStyle={mapContainerStyle}
                center={center}
                zoom={5}
            >
                {data.map((centre, index) => (
                    <Marker
                        key={index}
                        position={{ lat: centre.latitude, lng: centre.longitude }}
                        title={centre.name}
                    />
                ))}
            </GoogleMap>
        </LoadScript>
    );
};

export default MapComponent;
