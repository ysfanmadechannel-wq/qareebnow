/**
 * Official Qareeb service categories. Edit prices/descriptions here — used by
 * both the landing page preview cards and the /categories page.
 */

export type Category = { name: string; price?: string; desc?: string };
export type CategoryGroup = { title: string; note?: string; items: Category[] };

export const CATEGORY_GROUPS: CategoryGroup[] = [
  {
    title: "Base Rate — Helper Adjustment Allowed",
    note: "Rates can vary slightly based on location, skill level, and time of work.",
    items: [
      { name: "Gardening", price: "PKR 800–2,000", desc: "Lawn or garden cleaning, plant trimming, watering, or seasonal plantation." },
      { name: "Cleaning Services", price: "PKR 600–2,500/job", desc: "House cleaning, dishwashing, deep cleaning." },
      { name: "Water Tank Cleaning", price: "PKR 2,000–4,000", desc: "Deep cleaning of underground or rooftop water tanks." },
      { name: "Shifting / Moving Help", price: "PKR 1,500–5,000/job", desc: "Packing, loading/unloading." },
      { name: "Child Care", price: "PKR 800–2,500/shift", desc: "Babysitter, nanny for a few hours." },
      { name: "Elder Care", price: "PKR 1,200–3,500/shift", desc: "Patient attendant, companion care." },
      { name: "Errand Running", price: "PKR 300–1,000/errand", desc: "Grocery pickup, parcel delivery, bill payment." },
      { name: "Pet Care", price: "PKR 500–2,000/session", desc: "Walking, grooming, feeding." },
      { name: "Smartphone / Computer Quick Fix", price: "PKR 1,000–2,500", desc: "Quick repair for basic software or hardware issues." },
      { name: "Decor & Setup Helpers", price: "PKR 1,200–3,500", desc: "Assistance for events, parties, or furniture setup." },
      { name: "AC / Fridge Gas Filling", price: "PKR 1,500–4,000", desc: "Gas refill and minor maintenance for cooling appliances." },
      { name: "Festival / Seasonal Installations", price: "PKR 1,200–3,500", desc: "Decoration and lighting setup for Eid, Christmas, weddings, or cultural events." },
      { name: "Plumbing", price: "PKR 1,000–3,500", desc: "Fixing leakages, tap fittings, pipe repairs, or bathroom installations." },
      { name: "Electrician", price: "PKR 800–3,000", desc: "Wiring repairs, new fittings, or small-scale installations." },
      { name: "Cooking Assistance", price: "PKR 500–1,500", desc: "Help in home cooking, chopping, dish preparation, or tandoor assistance." },
      { name: "Tutoring", price: "PKR 500–1,500", desc: "Subject-based tuition on an hourly basis for school/college students." },
    ],
  },
  {
    title: "Fixed Price Only",
    note: "Rates are fixed and cannot be changed by Helpers.",
    items: [
      { name: "Ironing Clothes", price: "PKR 100 per cloth", desc: "Pressing only; delivery includes extra charges." },
      { name: "Laundry Pickup / Drop", price: "PKR 600", desc: "Pickup or delivery service for nearby laundry shops." },
      { name: "Water Delivery", price: "PKR 500 per 19L can", desc: "Home delivery of drinking water bottles from nearby water supply." },
      { name: "Line Waiting Service", price: "PKR 500/hour", desc: "Waiting in queues at banks, hospitals, offices, etc. on behalf of clients." },
    ],
  },
  {
    title: "Beauty & Grooming Services",
    items: [
      { name: "Mehndi (Henna) Design", price: "PKR 500", desc: "Per side of a hand, simple design." },
      { name: "Bridal / Full-Hand Mehndi", price: "PKR 3,000", desc: "Per side of hand." },
      { name: "Basic Party Makeup", price: "PKR 1,500–4,000", desc: "Depending on the quality of products used." },
      { name: "Bridal Makeup", price: "PKR 7,000–20,000", desc: "Includes full face, hair setting, and touch-up kit." },
      { name: "Hairstyling", price: "PKR 500", desc: "Simple styles." },
      { name: "Bridal / Complex Party Hairstyles", price: "PKR 3,000–7,000", desc: "Based on style, design and products used." },
      { name: "Manicure", price: "PKR 800" },
      { name: "Pedicure", price: "PKR 1,000" },
      { name: "Facial (Basic Glow)", price: "PKR 2,000" },
      { name: "Waxing — Half Arms", price: "PKR 700" },
      { name: "Waxing — Full Arms", price: "PKR 1,200" },
      { name: "Waxing — Legs", price: "PKR 1,500" },
      { name: "Haircut — Female barber for females", price: "PKR 1,500" },
      { name: "Haircut — Male barber for males", price: "PKR 800" },
      { name: "Beard Trim / Shave", price: "PKR 500" },
    ],
  },
  {
    title: "Other Category",
    items: [
      { name: "Other category", desc: "Price will be adjusted by the Helper, specifically according to the user's requested service." },
    ],
  },
];
