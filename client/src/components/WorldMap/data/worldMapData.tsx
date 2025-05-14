import type {
  CountryProps,
  FeatureProps,
  FoodCategoryProps,
  ProjectionProps,
} from "./worldMapType";

export const availableProjections = {
  0: "geoEqualEarth",
  1: "geoAlbers",
  2: "geoAlbersUsa",
  3: "geoAzimuthalEqualArea",
  4: "geoAzimuthalEquidistant",
  5: "geoOrthographic",
  6: "geoConicConformal",
  7: "geoConicEqualArea",
  8: "geoConicEquidistant",
  9: "geoStereographic",
  10: "geoMercator",
  11: "geoTransverseMercator",
};

export const availableCountries: CountryProps[] = [
  {
    id: 0,
    name: "United States of America",
    strArea: "American",
    foodCategory: "Western",
  },
  {
    id: 1,
    name: "United Kingdom",
    strArea: "British",
    foodCategory: "Western",
  },
  { id: 2, name: "Canada", strArea: "Canadian", foodCategory: "Western" },
  { id: 3, name: "China", strArea: "Chinese", foodCategory: "Asian" },
  {
    id: 4,
    name: "Croatia",
    strArea: "Croatian",
    foodCategory: "Eastern European",
  },
  { id: 5, name: "Netherlands", strArea: "Dutch", foodCategory: "Western" },
  {
    id: 6,
    name: "Egypt",
    strArea: "Egyptian",
    foodCategory: "Middle Eastern & African",
  },
  { id: 7, name: "Philippines", strArea: "Filipino", foodCategory: "Asian" },
  { id: 8, name: "France", strArea: "French", foodCategory: "Western" },
  { id: 9, name: "Greece", strArea: "Greek", foodCategory: "Western" },
  { id: 10, name: "India", strArea: "Indian", foodCategory: "Asian" },
  { id: 11, name: "Ireland", strArea: "Irish", foodCategory: "Western" },
  { id: 12, name: "Italy", strArea: "Italian", foodCategory: "Western" },
  {
    id: 13,
    name: "Jamaica",
    strArea: "Jamaican",
    foodCategory: "Latin American & Caribbean",
  },
  { id: 14, name: "Japan", strArea: "Japanese", foodCategory: "Asian" },
  {
    id: 15,
    name: "Kenya",
    strArea: "Kenyan",
    foodCategory: "Middle Eastern & African",
  },
  { id: 16, name: "Malaysia", strArea: "Malaysian", foodCategory: "Asian" },
  {
    id: 17,
    name: "Mexico",
    strArea: "Mexican",
    foodCategory: "Latin American & Caribbean",
  },
  {
    id: 18,
    name: "Morocco",
    strArea: "Moroccan",
    foodCategory: "Middle Eastern & African",
  },
  {
    id: 19,
    name: "Poland",
    strArea: "Polish",
    foodCategory: "Eastern European",
  },
  { id: 20, name: "Portugal", strArea: "Portuguese", foodCategory: "Western" },
  {
    id: 21,
    name: "Russia",
    strArea: "Russian",
    foodCategory: "Eastern European",
  },
  { id: 22, name: "Spain", strArea: "Spanish", foodCategory: "Western" },
  { id: 23, name: "Thailand", strArea: "Thai", foodCategory: "Asian" },
  {
    id: 24,
    name: "Tunisia",
    strArea: "Tunisian",
    foodCategory: "Middle Eastern & African",
  },
  {
    id: 25,
    name: "Turkey",
    strArea: "Turkish",
    foodCategory: "Middle Eastern & African",
  },
  {
    id: 26,
    name: "Ukraine",
    strArea: "Ukrainian",
    foodCategory: "Eastern European",
  },
  {
    id: 27,
    name: "Uruguay",
    strArea: "Uruguayan",
    foodCategory: "Latin American & Caribbean",
  },
  { id: 28, name: "Vietnam", strArea: "Vietnamese", foodCategory: "Asian" },
];

export const availableFoodCategories: FoodCategoryProps[] = [
  "Asian",
  "Eastern European",
  "Latin American & Caribbean",
  "Middle Eastern & African",
  "Western",
];

export const mapFeatures: FeatureProps = {
  geoUrl: "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json",
  scale: 130,
  center: [0, 40],
  projection: availableProjections[10] as ProjectionProps,
  stroke: "#000",
  strokeWidth: 0.2,
  notAvailableColor: "#F5F5F5",
  availableColor: "rgba(248, 245, 202, 1)",
  availableColorHover: "rgba(76, 39, 25, 0.4)",
};
