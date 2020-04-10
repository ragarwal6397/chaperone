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
import React from "react";

import AboutRideUsher from "../ui/pages/about-ride-usher/AboutRideUsher";
import ContactUs from "../ui/pages/contact-us/ContactUs";
import Donate from "../ui/pages/donate/Donate";
import SearchReviews from "../ui/pages/search-reviews/SearchReviews";

export interface MenuListInterface {
  title: string;
  partialUrl: string;
  iosIcon: string;
  mdIcon: string;
  component: React.FunctionComponent;
}

export const DEFAULT_MENU_OPTION = "SearchReviews";
export const MenuList: MenuListInterface[] = [
  {
    title: "Search Reviews",
    partialUrl: "SearchReviews",
    iosIcon: searchOutline,
    mdIcon: searchSharp,
    component: SearchReviews,
  },
  {
    title: "Donate",
    partialUrl: "Donate",
    iosIcon: heartOutline,
    mdIcon: heartSharp,
    component: Donate,
  },
  {
    title: "About RideUsher",
    partialUrl: "AboutRideUsher",
    iosIcon: informationCircleOutline,
    mdIcon: informationCircleSharp,
    component: AboutRideUsher,
  },
  {
    title: "Contact Us",
    partialUrl: "ContactUs",
    iosIcon: mailOutline,
    mdIcon: mailSharp,
    component: ContactUs,
  },
];
