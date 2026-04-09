export type HikingRoute = {
  id: number;
  slugEn: string;
  slugNl: string;
  name: string;
  region: string;
  distanceKm: number;
  duration: string;
  difficulty: "Easy" | "Moderate" | "Challenging";
  startPoint: string;
  familyFriendly: boolean;
  dogFriendly: boolean;
  summaryEn: string;
  summaryNl: string;
};

export const hikingRoutes: HikingRoute[] = [
  {
    id: 1,
    slugEn: "mullerthal-trail-route-1",
    slugNl: "mullerthal-route-1",
    name: "Mullerthal Trail Route 1",
    region: "Mullerthal",
    distanceKm: 12,
    duration: "4-5 hours",
    difficulty: "Moderate",
    startPoint: "Echternach",
    familyFriendly: true,
    dogFriendly: true,
    summaryEn:
      "Rock formations, forest paths, and classic Luxembourg scenery in the Little Switzerland area.",
    summaryNl:
      "Rotsformaties, bospaadjes en het bekende landschap van Klein Zwitserland in Luxemburg.",
  },
  {
    id: 2,
    slugEn: "vianden-castle-circuit",
    slugNl: "vianden-kasteel-route",
    name: "Vianden Castle Circuit",
    region: "Vianden",
    distanceKm: 8,
    duration: "3 hours",
    difficulty: "Easy",
    startPoint: "Vianden",
    familyFriendly: true,
    dogFriendly: true,
    summaryEn:
      "A scenic circuit combining river views with one of Luxembourg's most iconic castles.",
    summaryNl:
      "Een mooie rondwandeling met uitzicht op de rivier en een van de bekendste kastelen van Luxemburg.",
  },
  {
    id: 3,
    slugEn: "echternach-lake-loop",
    slugNl: "echternach-meer-loop",
    name: "Echternach Lake Loop",
    region: "Echternach",
    distanceKm: 6,
    duration: "2 hours",
    difficulty: "Easy",
    startPoint: "Echternach Lake",
    familyFriendly: true,
    dogFriendly: true,
    summaryEn:
      "A relaxed lakeside route ideal for short breaks, families, and bird watching.",
    summaryNl:
      "Een rustige route langs het meer, perfect voor een korte trip, gezinnen en vogelliefhebbers.",
  },
  {
    id: 4,
    slugEn: "beaufort-castle-ruins",
    slugNl: "beaufort-kasteelruines",
    name: "Beaufort Castle Ruins",
    region: "Beaufort",
    distanceKm: 10,
    duration: "4 hours",
    difficulty: "Moderate",
    startPoint: "Beaufort",
    familyFriendly: true,
    dogFriendly: true,
    summaryEn:
      "A forest route with medieval heritage and varied terrain near Beaufort.",
    summaryNl:
      "Een bosroute met middeleeuwse geschiedenis en gevarieerd terrein rond Beaufort.",
  },
  {
    id: 5,
    slugEn: "kneiff-summit-trail",
    slugNl: "kneiff-top-route",
    name: "Kneiff Summit Trail",
    region: "Clervaux",
    distanceKm: 15,
    duration: "6 hours",
    difficulty: "Challenging",
    startPoint: "Wilwerdange",
    familyFriendly: false,
    dogFriendly: true,
    summaryEn:
      "A longer hike to Luxembourg's highest point with wide Ardennes panoramas.",
    summaryNl:
      "Een langere route naar het hoogste punt van Luxemburg met brede uitzichten over de Ardennen.",
  },
];
