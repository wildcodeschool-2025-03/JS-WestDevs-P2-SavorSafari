import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import type { ZoomPositionProps } from "./data/worldMapType";

import { availableCountries, mapFeatures } from "./data/worldMapData";
import "./WorldMap.css";

const WorldMap = () => {
  // Zoom

  const [position, setPosition] = useState<ZoomPositionProps["position"]>({
    coordinates: [0, 0],
    zoom: 1,
  });

  const handleZoomIn = () => {
    if (position.zoom >= 8) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom * 2 }));
  };

  const handleZoomOut = () => {
    if (position.zoom <= 1) return;
    setPosition((pos) => ({ ...pos, zoom: pos.zoom / 2 }));
  };

  const handleMoveEnd = (position: ZoomPositionProps["position"]) => {
    setPosition(position);
  };

  // Desktop : Nav on map click + Popover

  const navigate = useNavigate();

  const getAreaFromGeo = (geoName: string) => {
    return availableCountries.find((country) => country.name === geoName)
      ?.strArea;
  };

  const dialogRef = useRef<HTMLDialogElement>(null);
  const popTextRef = useRef<HTMLParagraphElement>(null);
  const [area, setArea] = useState<string | undefined>("");
  const [countryName, setCountryName] = useState("");

  const handleClick = (geoName: string) => {
    setArea(getAreaFromGeo(geoName));
    setCountryName(geoName);
    area && dialogRef.current && dialogRef.current.showModal();
  };

  // Mobile : Nav on list keep ?
  const [searchCountry, setSearchCountry] = useState('');

  return (
    <section className="world-map-section">
      <h3>
        Click, Cook, Travel : Discover the flavors of the world with a click!
      </h3>
      {/* Mobile */}
      <img src="../src/assets/img/world-map-img.webp" alt="Static world map" className="static-map" />

      <div className="dropdown mobile-form">
        <label htmlFor="country-input">Select your destination</label>
        <input
          type="text"
          id="country-input"
          placeholder="Search destination..."
          list="country-list"
          value={countryName}
          onChange={event => setCountryName(event.target.value)}
        />
        <datalist id="country-list" className="options">
          {availableCountries.map(country => (
            <option key={country.key} value={country.name} />
          ))}
        </datalist>
      </div>

      <p className="selected mobile-form" id="selected-country">Selected country : {countryName}</p>
      <button
        type="button"
        id="validate-btn"
        className="mobile-form"
        onClick={() => {
          countryName && setArea(getAreaFromGeo(countryName));
          area && navigate(`/recipe-list/${area}`)
        }}
      >
        Travel !
      </button>

      <dialog ref={dialogRef}>
        <p ref={popTextRef}>{countryName}</p>
        <button
          type="button"
          onClick={() => {
            if (dialogRef.current) dialogRef.current.close();
          }}
        >
          Choose another
        </button>
        <button
          type="button"
          onClick={() => {
            area && navigate(`/recipe-list/${area}`);
          }}
        >
          Travel now !
        </button>
      </dialog>
      {/* Desktop */}
      <ComposableMap
        projection={mapFeatures.projection}
        projectionConfig={{
          scale: mapFeatures.scale,
          center: mapFeatures.center,
        }}
        className="composable-map"
      >
        <ZoomableGroup
          zoom={position.zoom}
          center={position.coordinates}
          onMoveEnd={handleMoveEnd}
        >
          <Geographies geography={mapFeatures.geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => {
                const isAvailable = availableCountries.some(
                  (country) => country.name === geo.properties.name,
                );
                return (
                  <Geography
                    key={geo.rsmKey}
                    geography={geo}
                    className={geo.properties.name}
                    stroke={mapFeatures.stroke}
                    strokeWidth={mapFeatures.strokeWidth}
                    style={{
                      default: {
                        fill: isAvailable
                          ? mapFeatures.availableColor
                          : mapFeatures.notAvailableColor,
                      },
                      hover: {
                        fill: isAvailable
                          ? mapFeatures.availableColorHover
                          : mapFeatures.notAvailableColor,
                      },
                      pressed: {
                        fill: isAvailable
                          ? "purple"
                          : mapFeatures.notAvailableColor,
                      },
                    }}
                    onClick={() => {
                      if (isAvailable) {
                        handleClick(geo.properties.name);
                      }
                    }}
                  />
                );
              })
            }
          </Geographies>
        </ZoomableGroup>
      </ComposableMap>

      <div className="controls">
        <button type="button" onClick={handleZoomIn} aria-label="Zoom In">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="3"
          >
            <title>Zoom In</title>
            <line x1="12" y1="5" x2="12" y2="19" />
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
        <button type="button" onClick={handleZoomOut} aria-label="Zoom Out">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="3"
          >
            <title>Zoom Out</title>
            <line x1="5" y1="12" x2="19" y2="12" />
          </svg>
        </button>
      </div>
    </section>
  );
};

export default WorldMap;
