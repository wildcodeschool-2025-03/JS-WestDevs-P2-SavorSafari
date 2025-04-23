export type ProjectionProps =
  "geoEqualEarth" |
  "geoAlbers" |
  "geoAlbersUsa" |
  "geoAzimuthalEqualArea" |
  "geoAzimuthalEquidistant" |
  "geoOrthographic" |
  "geoConicConformal" |
  "geoConicEqualArea" |
  "geoConicEquidistant" |
  "geoStereographic" |
  "geoMercator" |
  "geoTransverseMercator";

export interface FeatureProps {
  geoUrl: string;
  scale: number;
  center: [number, number];
  projection: ProjectionProps;
  stroke: string;
  strokeWidth: number;
  notAvailableColor: string,
  availableColor: string;
  availableColorHover: string;
}

export interface WorldMapProps {
  mapFeatures: FeatureProps;
}

export interface CountryProps {
  key: number;
  name: string;
  strArea: string;
}

export interface ZoomPositionProps {
  position: {
    coordinates: [number, number], zoom: number
  }
}