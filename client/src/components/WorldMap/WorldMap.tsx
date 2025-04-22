import { ComposableMap, Geographies, Geography } from "react-simple-maps";

import "./WorldMap.css"
import { availableCountries, mapFeatures } from "./data/worldMapData";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const WorldMap = () => {

  return (
    <>
      <p>Click, Cook, Travel : Discover the Flavors of the World with a click! {mapFeatures.projection} </p>
      <ComposableMap
        projection={mapFeatures.projection}
        projectionConfig={{
          center: [0, 20],
          scale: mapFeatures.scale,
        }}
        /* height={mapFeatures.height}
        width={(mapFeatures.height / 600) * 800} //Problem here */
        className="map-container">
        <Geographies geography={geoUrl}>
          {({ geographies }) =>
            geographies.map((geo) => {
              /* console.log(geo.properties.name); */
              const isAvailable = availableCountries.some(country => country.name === geo.properties.name);
              return (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  className={geo.properties.name}
                  stroke={mapFeatures.stroke}
                  style={{
                    default: {
                      fill: isAvailable ? "lightblue" : "#EEE",
                    },
                    hover: {
                      fill: isAvailable ? "pink" : "#EEE",
                    },
                    pressed: {
                      fill: isAvailable ? "purple" : "#EEE",
                    },
                  }}
                />
              )
            })
          }
        </Geographies>
      </ComposableMap>
    </>
  );
};

export default WorldMap;
