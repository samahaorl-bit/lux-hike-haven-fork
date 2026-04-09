import Link from "next/link";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import {
  Wifi,
  Laptop,
  Car,
  PawPrint,
  Tv,
  WashingMachine,
  Utensils,
  Baby,
  BookOpen,
  Snowflake,
  FlameKindling,
  ShieldCheck,
  AlarmSmoke,
  AlarmClock,
  DoorOpen,
  Refrigerator,
  Microwave,
  Coffee,
  CupSoda,
  BookHeart,
  BedDouble,
  Fan,
  MapPinHouse,
  KeyRound,
  Leaf,
  Sun,
  Lock,
} from "lucide-react";
import { getAirbnbUrl } from "@/lib/links";

type Amenity = {
  name: string;
  icon: JSX.Element;
  category: string;
  note?: string;
};

// Exactly 48 counted amenities (notes folded into related items, exclusions separated below)
const amenities: Amenity[] = [
  // Bathroom (5)
  {
    name: "Hair dryer",
    icon: <Leaf className="h-4 w-4" />,
    category: "Bathroom",
  },
  { name: "Shampoo", icon: <Leaf className="h-4 w-4" />, category: "Bathroom" },
  {
    name: "Body soap",
    icon: <Leaf className="h-4 w-4" />,
    category: "Bathroom",
  },
  {
    name: "Hot water",
    icon: <Sun className="h-4 w-4" />,
    category: "Bathroom",
  },
  {
    name: "Shower gel",
    icon: <Leaf className="h-4 w-4" />,
    category: "Bathroom",
  },
  // Bedroom and laundry (8)
  {
    name: "Washer",
    icon: <WashingMachine className="h-4 w-4" />,
    category: "Bedroom and laundry",
  },
  {
    name: "Free dryer – In unit",
    icon: <WashingMachine className="h-4 w-4" />,
    category: "Bedroom and laundry",
  },
  {
    name: "Hangers",
    icon: <DoorOpen className="h-4 w-4" />,
    category: "Bedroom and laundry",
  },
  {
    name: "Bed linens",
    icon: <BedDouble className="h-4 w-4" />,
    category: "Bedroom and laundry",
  },
  {
    name: "Extra pillows and blankets",
    icon: <BedDouble className="h-4 w-4" />,
    category: "Bedroom and laundry",
  },
  {
    name: "Room-darkening shades",
    icon: <ShieldCheck className="h-4 w-4" />,
    category: "Bedroom and laundry",
  },
  {
    name: "Drying rack for clothing",
    icon: <DoorOpen className="h-4 w-4" />,
    category: "Bedroom and laundry",
  },
  {
    name: "Clothing storage: wardrobe",
    icon: <DoorOpen className="h-4 w-4" />,
    category: "Bedroom and laundry",
  },
  // Entertainment (2)
  { name: "TV", icon: <Tv className="h-4 w-4" />, category: "Entertainment" },
  {
    name: "Books and reading material",
    icon: <BookOpen className="h-4 w-4" />,
    category: "Entertainment",
  },
  // Family (5)
  { name: "Crib", icon: <Baby className="h-4 w-4" />, category: "Family" },
  {
    name: "Pack ’n play/Travel crib",
    icon: <Baby className="h-4 w-4" />,
    category: "Family",
  },
  { name: "Baby bath", icon: <Baby className="h-4 w-4" />, category: "Family" },
  {
    name: "Outlet covers",
    icon: <ShieldCheck className="h-4 w-4" />,
    category: "Family",
  },
  {
    name: "Board games",
    icon: <BookHeart className="h-4 w-4" />,
    category: "Family",
  },
  // Heating and cooling (2)
  {
    name: "Portable fans",
    icon: <Fan className="h-4 w-4" />,
    category: "Heating and cooling",
  },
  {
    name: "Heating",
    icon: <FlameKindling className="h-4 w-4" />,
    category: "Heating and cooling",
  },
  // Home safety (2)
  {
    name: "Smoke alarm",
    icon: <AlarmSmoke className="h-4 w-4" />,
    category: "Home safety",
  },
  {
    name: "Carbon monoxide alarm",
    icon: <AlarmClock className="h-4 w-4" />,
    category: "Home safety",
  },
  // Internet and office (2)
  {
    name: "Wifi",
    icon: <Wifi className="h-4 w-4" />,
    category: "Internet and office",
  },
  {
    name: "Dedicated workspace",
    icon: <Laptop className="h-4 w-4" />,
    category: "Internet and office",
  },
  // Kitchen and dining (13 with notes folded)
  {
    name: "Kitchen",
    icon: <Utensils className="h-4 w-4" />,
    category: "Kitchen and dining",
    note: "Space where guests can cook their own meals",
  },
  {
    name: "Refrigerator",
    icon: <Refrigerator className="h-4 w-4" />,
    category: "Kitchen and dining",
  },
  {
    name: "Microwave",
    icon: <Microwave className="h-4 w-4" />,
    category: "Kitchen and dining",
  },
  {
    name: "Cooking basics",
    icon: <Utensils className="h-4 w-4" />,
    category: "Kitchen and dining",
    note: "Pots & pans, oil, salt & pepper",
  },
  {
    name: "Dishes and silverware",
    icon: <CupSoda className="h-4 w-4" />,
    category: "Kitchen and dining",
    note: "Bowls, chopsticks, plates, cups",
  },
  {
    name: "Freezer",
    icon: <Refrigerator className="h-4 w-4" />,
    category: "Kitchen and dining",
  },
  {
    name: "Dishwasher",
    icon: <Utensils className="h-4 w-4" />,
    category: "Kitchen and dining",
  },
  {
    name: "Stove",
    icon: <Utensils className="h-4 w-4" />,
    category: "Kitchen and dining",
  },
  {
    name: "Oven",
    icon: <Utensils className="h-4 w-4" />,
    category: "Kitchen and dining",
  },
  {
    name: "Coffee maker: pour-over coffee",
    icon: <Coffee className="h-4 w-4" />,
    category: "Kitchen and dining",
  },
  {
    name: "Wine glasses",
    icon: <CupSoda className="h-4 w-4" />,
    category: "Kitchen and dining",
  },
  {
    name: "Baking sheet",
    icon: <Utensils className="h-4 w-4" />,
    category: "Kitchen and dining",
  },
  {
    name: "Dining table",
    icon: <Utensils className="h-4 w-4" />,
    category: "Kitchen and dining",
  },
  // Outdoor (3)
  {
    name: "Patio or balcony",
    icon: <Sun className="h-4 w-4" />,
    category: "Outdoor",
  },
  {
    name: "Outdoor furniture",
    icon: <Sun className="h-4 w-4" />,
    category: "Outdoor",
  },
  {
    name: "Outdoor dining area",
    icon: <Sun className="h-4 w-4" />,
    category: "Outdoor",
  },
  // Parking and facilities (2)
  {
    name: "Free parking on premises",
    icon: <Car className="h-4 w-4" />,
    category: "Parking and facilities",
  },
  {
    name: "Paid parking off premises",
    icon: <Car className="h-4 w-4" />,
    category: "Parking and facilities",
  },
  // Services (4 with notes folded)
  {
    name: "Pets allowed",
    icon: <PawPrint className="h-4 w-4" />,
    category: "Services",
    note: "Assistance animals always allowed",
  },
  {
    name: "Long term stays allowed",
    icon: <MapPinHouse className="h-4 w-4" />,
    category: "Services",
    note: "28+ days welcome",
  },
  {
    name: "Self check-in",
    icon: <KeyRound className="h-4 w-4" />,
    category: "Services",
    note: "Lockbox access",
  },
  { name: "Lockbox", icon: <Lock className="h-4 w-4" />, category: "Services" },
];

// Not included / unavailable (not counted in 48)
const notIncluded: Amenity[] = [
  {
    name: "Exterior security cameras on property",
    icon: <ShieldCheck className="h-4 w-4" />,
    category: "Not included",
  },
  {
    name: "Air conditioning",
    icon: <Snowflake className="h-4 w-4" />,
    category: "Not included",
  },
  {
    name: "Essentials",
    icon: <ShieldCheck className="h-4 w-4" />,
    category: "Not included",
  },
];

const previewAmenityNames = [
  "Kitchen",
  "Wifi",
  "Dedicated workspace",
  "Free parking on premises",
  "Pets allowed",
  "TV",
  "Washer",
  "Free dryer – In unit",
  "Patio or balcony",
  "Crib",
];

export default function AmenitiesSection() {
  const preview = amenities.filter((a) => previewAmenityNames.includes(a.name));
  const grouped = amenities.reduce<Record<string, Amenity[]>>((acc, a) => {
    (acc[a.category] ||= []).push(a);
    return acc;
  }, {});
  const categories = Object.keys(grouped);
  const total = amenities.length; // 48
  const airbnbUrl = getAirbnbUrl("amenities-section");

  return (
    <section
      id="amenities"
      className="section-divider section-parallax-soft py-24 bg-gradient-to-b from-slate-50/70 via-background to-slate-50/50"
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <header className="section-reveal max-w-4xl mb-10">
          <p className="inline-flex items-center rounded-full bg-secondary/10 text-secondary px-4 py-1.5 text-xs font-semibold tracking-wide mb-4">
            Comfort Essentials
          </p>
          <h2 className="text-4xl font-bold tracking-tight mb-4 leading-tight">
            What this place offers
          </h2>
          <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
            Thoughtfully curated amenities providing comfort, convenience and a
            relaxed base for discovering Luxembourg & the Moselle valley.
          </p>
        </header>

        {/* Preview grid */}
        <ul className="section-reveal section-reveal-delay grid gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 mb-8">
          {preview.map((a, index) => (
            <li
              key={a.name}
              className="section-reveal flex items-center gap-3 rounded-xl border border-border/70 bg-card/85 backdrop-blur-sm px-4 py-3 text-base shadow-soft hover:shadow-medium transition-all duration-300"
              style={{ animationDelay: `${index * 0.06}s` }}
            >
              <span className="text-primary/80">{a.icon}</span>
              <span className="font-medium leading-tight">{a.name}</span>
            </li>
          ))}
        </ul>

        <div className="section-reveal section-reveal-delay-lg flex flex-wrap items-center gap-4 mb-14 rounded-2xl border border-border/70 bg-card/75 backdrop-blur-sm p-4 md:p-5">
          <Dialog>
            <DialogTrigger asChild>
              <Button variant="outline" size="lg" className="rounded-lg">
                Show all {total} amenities
              </Button>
            </DialogTrigger>
            <DialogContent className="max-w-4xl max-h-[85vh] overflow-y-auto border-border/70 bg-background/95 backdrop-blur">
              <DialogHeader>
                <DialogTitle className="text-2xl">All amenities</DialogTitle>
              </DialogHeader>
              <div className="space-y-10">
                {categories.map((cat) => (
                  <div key={cat} className="space-y-4">
                    <h3 className="text-lg font-semibold tracking-tight">
                      {cat}
                    </h3>
                    <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                      {grouped[cat].map((am) => (
                        <li
                          key={am.name}
                          className="flex items-start gap-3 rounded-lg border p-3 text-sm md:text-base bg-card/40"
                        >
                          <span className="mt-0.5 text-primary/70">
                            {am.icon}
                          </span>
                          <div className="flex-1 space-y-1">
                            <p className="font-medium leading-snug">
                              {am.name}
                            </p>
                            {am.note && (
                              <p className="text-xs md:text-[13px] text-muted-foreground leading-snug">
                                {am.note}
                              </p>
                            )}
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
                <div className="space-y-4">
                  <h3 className="text-lg font-semibold tracking-tight">
                    Not included
                  </h3>
                  <ul className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                    {notIncluded.map((am) => (
                      <li
                        key={am.name}
                        className="flex items-start gap-3 rounded-lg border p-3 text-sm md:text-base bg-muted/30 opacity-60 line-through"
                      >
                        <span className="mt-0.5 text-muted-foreground">
                          {am.icon}
                        </span>
                        <p className="font-medium leading-snug">{am.name}</p>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </DialogContent>
          </Dialog>
          <Button
            asChild
            size="lg"
            className="bg-primary text-primary-foreground px-6 py-3 rounded-lg font-medium hover:bg-primary-hover transition-colors"
          >
            <Link href={airbnbUrl} target="_blank" rel="noopener noreferrer">
              Reserve now
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}
