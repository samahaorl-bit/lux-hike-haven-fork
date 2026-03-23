const BASE_AIRBNB_URL =
  "https://www.airbnb.fr/rooms/1499390885375608765?check_in=2026-03-23&check_out=2026-03-25&search_mode=regular_search&source_impression_id=p3_1774269359_P3MVnteU1CDx7sqM&previous_page_section_name=1000&federated_search_id=fedc6163-e50d-459c-a65d-5960290112cb";

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
