import { useEffect, useState } from "react";
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

  // Nav on click

  const navigate = useNavigate();

  const getAreaFromGeo = (geoName: string) => {
    return availableCountries.find((country) => country.name === geoName)
      ?.strArea;
  };

  const dialog = document.querySelector("dialog");
  const popoverText = document.querySelector(".popover-text");
  let area: string | undefined;

  const handleClick = (geoName: string) => {
    area = getAreaFromGeo(geoName);
    if (popoverText) {
      popoverText.innerHTML = `Chosen country : ${geoName}`;
    }
    area && dialog && dialog.showModal()
  };

  return (
    <section className="world-map-section">
      <p>
        Click, Cook, Travel : Discover the Flavors of the World with a click!
      </p>
      <dialog>
        <button
          type="button"
          onClick={() => {
            if (dialog) dialog.close()
          }}
        >
          Close
        </button>
        <button type="button"
          onClick={() => {
            area && navigate(`/recipe-list/${area}`);
          }}>
          Travel !

        </button>
        <p className="popover-text">Test modal</p>
      </dialog>
      <ComposableMap
        projection={mapFeatures.projection}
        projectionConfig={{
          scale: mapFeatures.scale,
          center: mapFeatures.center,
        }}
        className="map-container"
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
