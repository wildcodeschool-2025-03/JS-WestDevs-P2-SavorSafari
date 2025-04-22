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
  projection: ProjectionProps;
}


export interface WorldMapProps {
  mapFeatures: FeatureProps;
}