import React from 'react';
import { APIProvider, Map, Marker } from '@vis.gl/react-google-maps';

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
        height: '10%' // Adjust as needed
    };

    const center = {
        lat: data[0]?.latitude || 20.5937,
        lng: data[0]?.longitude || 78.9629
    };

    const apiKey = process.env.NEXT_PUBLIC_GOOGLE_API_KEY || '';
    const mapId = process.env.NEXT_PUBLIC_GOOGLE_MAP_ID || '';

    return (
        <APIProvider apiKey={apiKey}>
            <Map
                mapId={mapId}
                zoom={5}
                center={center}
                style={mapContainerStyle}
            >
                {data.map((centre, index) => (
                    <Marker
                        key={index}
                        position={{ lat: centre.latitude, lng: centre.longitude }}
                        title={centre.name}
                    />
                ))}
            </Map>
        </APIProvider>
    );
};

export default MapComponent;
