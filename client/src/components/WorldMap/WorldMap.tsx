import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from "@headlessui/react";
import { useRef, useState } from "react";
import { useNavigate } from "react-router";
import {
  ComposableMap,
  Geographies,
  Geography,
  ZoomableGroup,
} from "react-simple-maps";
import type { CountryProps, ZoomPositionProps } from "./data/worldMapType";

import {
  availableCountries,
  availableFoodCategories,
  mapFeatures,
} from "./data/worldMapData";
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

  // Desktop

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

  // Mobile

  const [query, setQuery] = useState("");

  const filteredCountries =
    query === ""
      ? availableCountries
      : availableCountries.filter((country) => {
          return country.name.toLowerCase().includes(query.toLowerCase());
        });

  return (
    <section className="world-map-section">
      <h3>
        Click, Cook, Travel : Discover the flavors of the world with a click!
      </h3>

      {/* Mobile */}
      <img
        src="../src/assets/img/world-map-img.webp"
        alt="Static world map"
        className="static-map"
      />
      <div className="mobile-form">
        {!countryName && <p>Choose your next stop !</p>}
        {countryName && (
          <>
            <p>Next stop : {countryName}</p>
            <button
              type="button"
              className="travel-button"
              onClick={() => {
                countryName && setArea(getAreaFromGeo(countryName));
                area && navigate(`/recipe-list/${area}`);
              }}
            >
              Travel !
            </button>
          </>
        )}

        <Combobox
          value={countryName}
          onChange={(country: string) => setCountryName(country)}
          onClose={() => setQuery("")}
          immediate
        >
          <div className="combobox-container">
            <ComboboxInput
              className="combobox-input"
              aria-label="Assignee"
              displayValue={(country: CountryProps) => country?.name}
              onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
                setQuery(event.target.value)
              }
            />
            <ComboboxButton className="combobox-button">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="chevron-down-icon"
              >
                <title>Chevron-down icon</title>
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m19.5 8.25-7.5 7.5-7.5-7.5"
                />
              </svg>
            </ComboboxButton>
          </div>

          <ComboboxOptions anchor="bottom" className="combobox-options">
            {availableFoodCategories.map((category) => {
              const filteredByCat = filteredCountries.filter(
                (country) => country.foodCategory === category,
              );

              return (
                filteredByCat.length > 0 && (
                  <>
                    <div key={category} className="category-option">
                      {category}
                    </div>
                    {filteredByCat.map((country) => (
                      <ComboboxOption
                        key={country.id}
                        value={country.name}
                        className="combobox-option"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="check-icon"
                        >
                          <title>Check icon</title>
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="m4.5 12.75 6 6 9-13.5"
                          />
                        </svg>
                        <div>{country.name}</div>
                      </ComboboxOption>
                    ))}
                  </>
                )
              );
            })}
          </ComboboxOptions>
        </Combobox>
      </div>

      {/* Desktop - Confirm navigation */}
      <dialog ref={dialogRef}>
        <p ref={popTextRef}>{countryName}</p>
        <button
          type="button"
          onClick={() => {
            setArea("");
            setCountryName("");
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

      {/* Desktop - Map + Controls */}
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
