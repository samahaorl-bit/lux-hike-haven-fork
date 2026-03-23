const BASE_AIRBNB_URL =
    "https://www.airbnb.lu/rooms/1499390885375608765"

export const getAirbnbUrl = (content: string, campaign = "landing-page") => {
  const url = new URL(BASE_AIRBNB_URL);
  url.searchParams.set("utm_source", "lux-hike-haven");
  url.searchParams.set("utm_medium", "website");
  url.searchParams.set("utm_campaign", campaign);
  url.searchParams.set("utm_content", content);
  return url.toString();
};

export const getAirbnbGalleryUrl = (content: string) => {
  const url = new URL(getAirbnbUrl(content, "photo-tour"));
  url.searchParams.set("modal", "PHOTO_TOUR_SCROLLABLE");
  return url.toString();
};
