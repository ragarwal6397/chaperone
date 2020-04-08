import {
  searchOutline,
  searchSharp,
  heartOutline,
  heartSharp,
  informationCircleOutline,
  informationCircleSharp,
  mailOutline,
  mailSharp,
} from "ionicons/icons";

export interface AppPageInterface {
  title: string;
  partialUrl: string;
  iosIcon: string;
  mdIcon: string;
}

export const AppPageList: AppPageInterface[] = [
  {
    title: "Search Reviews",
    partialUrl: "Reviews",
    iosIcon: searchOutline,
    mdIcon: searchSharp,
  },
  {
    title: "Donate",
    partialUrl: "Donate",
    iosIcon: heartOutline,
    mdIcon: heartSharp,
  },
  {
    title: "About RideUsher",
    partialUrl: "AboutRideUsher",
    iosIcon: informationCircleOutline,
    mdIcon: informationCircleSharp,
  },
  {
    title: "Contact Us",
    partialUrl: "ContactUs",
    iosIcon: mailOutline,
    mdIcon: mailSharp,
  },
];
