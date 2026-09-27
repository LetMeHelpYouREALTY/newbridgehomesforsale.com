import type { CommunityAmenityConfig } from "./types";

/**
 * Newbridge — Richmond American Homes community, southwest Las Vegas (89139).
 * Center: sales office at 5509 Middleton Falls Ave (builder marketing address per MLS/listing data).
 */
export const NEWBRIDGE_AMENITY_CONFIG: CommunityAmenityConfig = {
  communityName: "Newbridge",
  communitySlug: "newbridge",
  city: "Las Vegas",
  state: "NV",
  center: {
    lat: 36.0401,
    lng: -115.2298,
    label: "Newbridge by Richmond American Homes",
    streetAddress: "5509 Middleton Falls Ave",
    postalCode: "89139",
  },
  coordinatesSource:
    "Sales office at 5509 Middleton Falls Ave, Las Vegas, NV 89139 per Richmond American Homes community page.",
  categoryOrder: [
    "grocery",
    "parks",
    "restaurants",
    "cafes",
    "golf",
    "healthcare",
    "pharmacies",
    "shopping",
    "fitness",
    "schools",
    "parking",
  ],
  curatedPlaces: [
    {
      name: "Newbridge Sales Center (Richmond American Homes)",
      address: "5509 Middleton Falls Ave, Las Vegas, NV 89139",
      category: "community",
      schemaType: "Place",
      sourceUrl:
        "https://www.richmondamerican.com/nevada/las-vegas-new-homes/las-vegas/newbridge/",
      note: "Builder sales office for the Newbridge community.",
    },
    {
      name: "Albertsons",
      address: "4800 Blue Diamond Rd, Las Vegas, NV 89139",
      category: "grocery",
      schemaType: "GroceryStore",
      sourceUrl: "https://local.albertsons.com/nv/las-vegas/4800-blue-diamond-rd.html",
    },
    {
      name: "Albertsons",
      address: "7975 Blue Diamond Rd, Las Vegas, NV 89178",
      category: "grocery",
      schemaType: "GroceryStore",
      sourceUrl: "https://local.albertsons.com/nv/las-vegas/7975-blue-diamond-rd.html",
    },
    {
      name: "Southern Hills Hospital & Medical Center",
      address: "9300 W Sunset Rd, Las Vegas, NV 89148",
      category: "healthcare",
      schemaType: "Hospital",
      sourceUrl:
        "https://www.sunrisehealthinfo.com/locations/southern-hills-hospital",
    },
    {
      name: "Dignity Health-St. Rose Dominican, San Martín Campus",
      address: "8280 W Warm Springs Rd, Las Vegas, NV 89113",
      category: "healthcare",
      schemaType: "Hospital",
      sourceUrl:
        "https://www.dignityhealth.org/las-vegas/st-rose-dominican-san-martin-general-hospital",
    },
    {
      name: "Rhodes Ranch Golf Club",
      address: "20 E Rhodes Ranch Pkwy, Las Vegas, NV 89148",
      category: "golf",
      schemaType: "GolfCourse",
      sourceUrl: "https://rhodesranchgolf.com/the-course/",
    },
    {
      name: "Exploration Peak Park",
      address: "9700 S Buffalo Dr, Las Vegas, NV 89178",
      category: "parks",
      schemaType: "Park",
      sourceUrl:
        "https://parkslocator.clarkcountynv.gov/Search/ParkDetail?parkId=62",
      note: "Clark County regional park (about 80 acres developed).",
    },
    {
      name: "Evelyn Stuckey Elementary School",
      address: "4905 Chartan Ave, Las Vegas, NV 89141",
      category: "schools",
      schemaType: "School",
      sourceUrl: "https://www.stuckeyelementary.org/apps/contact/",
    },
  ],
  writtenSections: [
    {
      id: "dining",
      title: "Dining near Newbridge",
      paragraphs: [
        "Newbridge sits along the Blue Diamond Road corridor in southwest Las Vegas, where national and local restaurants cluster within a short drive of the community. For everyday meals, many residents also head toward the Town Square Las Vegas and Silverado Ranch retail areas, which add additional chain and local choices without crossing the entire valley.",
        "When you tour Newbridge, plan a meal on Blue Diamond or nearby Jones Boulevard so you can see how quick the run is from Middleton Falls Avenue back to dinner — it is part of the lifestyle check buyers often want before they write an offer on new construction.",
      ],
    },
    {
      id: "grocery",
      title: "Grocery & errands",
      paragraphs: [
        "Albertsons operates a store at 4800 Blue Diamond Rd, Las Vegas, NV 89139, directly on the corridor that serves the 89139 zip code. A second Albertsons at 7975 Blue Diamond Rd serves the farther southwest valley. Most Newbridge buyers stock up on Blue Diamond or combine grocery runs with home-improvement and retail stops along the 215 Beltway access points.",
      ],
    },
    {
      id: "parks",
      title: "Parks & outdoor recreation",
      paragraphs: [
        "Exploration Peak Park at 9700 S Buffalo Dr is an 80-acre Clark County regional park in the southwest valley, with trails, picnic areas, and a playground. Newbridge marketing also highlights on-site community park space and golf-course adjacency within the Richmond American plan — confirm current HOA and builder amenities on your tour.",
        "Red Rock Canyon National Conservation Area is reached via Charleston Boulevard and the 215 Beltway from this part of the valley, making weekend hiking and scenic drives a realistic part of southwest Las Vegas living.",
      ],
    },
    {
      id: "golf",
      title: "Golf",
      paragraphs: [
        "Rhodes Ranch Golf Club on Rhodes Ranch Parkway is a public course a few miles south of the Blue Diamond corridor. Siena Golf Club and other southwest courses are within a typical 15–25 minute drive depending on traffic. Golf-forward buyers often compare Newbridge with other Richmond American and master-planned communities along the 215.",
      ],
    },
    {
      id: "healthcare",
      title: "Healthcare",
      paragraphs: [
        "Southern Hills Hospital on West Sunset Road and Dignity Health-St. Rose Dominican, San Martín Campus on West Warm Springs Road are major hospital campuses serving the southwest valley. Urgent care, primary care, and specialty offices continue to expand along Blue Diamond and the 215 corridor as the area grows.",
      ],
    },
    {
      id: "shopping",
      title: "Shopping",
      paragraphs: [
        "Day-to-day shopping runs on Blue Diamond Road and nearby centers toward Silverado Ranch and the 215 retail nodes. For larger fashion and big-box runs, many residents connect to the 215 Beltway toward Town Square Las Vegas, Downtown Summerlin, or the Las Vegas Strip resort corridor depending on the errand.",
      ],
    },
    {
      id: "schools",
      title: "Schools",
      paragraphs: [
        "Clark County School District serves the 89139 area. Which CCSD schools are assigned to Newbridge addresses? Verify with the CCSD Zoning Search before you close — boundaries can change with new construction.",
      ],
    },
    {
      id: "commute",
      title: "Commute & regional access",
      paragraphs: [
        "Newbridge is marketed with quick access to the 215 Beltway, which links southwest residents to Harry Reid International Airport, the Las Vegas Strip, Summerlin, and Henderson without surface-street cross-town traffic. Blue Diamond Road (SR 160) is the main east-west corridor at the community's doorstep.",
      ],
    },
  ],
  faqs: [
    {
      question: "What grocery stores are near Newbridge?",
      answer:
        "Albertsons at 4800 Blue Diamond Rd, Las Vegas, NV 89139 is on the same corridor as Newbridge, with another Albertsons at 7975 Blue Diamond Rd serving the broader southwest valley.",
    },
    {
      question: "How far is Newbridge from the Las Vegas Strip?",
      answer:
        "From Newbridge near Blue Diamond Road and Jones Boulevard, the Las Vegas Strip is roughly a 20–30 minute drive in typical off-peak traffic via the 215 Beltway and I-15; rush hour can add time.",
    },
    {
      question: "Are there hospitals near Newbridge?",
      answer:
        "Yes — Southern Hills Hospital (9300 W Sunset Rd) and Dignity Health-St. Rose Dominican, San Martín Campus (8280 W Warm Springs Rd) are major southwest valley hospital campuses within a short drive.",
    },
    {
      question: "What parks are close to Newbridge?",
      answer:
        "Exploration Peak Park at 9700 S Buffalo Dr is an 80-acre Clark County regional park in the southwest valley; the Newbridge community also advertises neighborhood park and recreation amenities within the Richmond American development.",
    },
    {
      question: "Is Newbridge close to the airport?",
      answer:
        "Harry Reid International Airport is typically about 20–30 minutes from southwest Las Vegas via the 215 Beltway and airport connectors, depending on traffic and your terminal.",
    },
    {
      question: "What schools serve the Newbridge area?",
      answer:
        "Which CCSD schools are assigned to Newbridge addresses? Verify with the CCSD Zoning Search. Evelyn Stuckey Elementary (4905 Chartan Ave, Las Vegas) is a CCSD elementary in the broader southwest valley — confirm your assigned schools before you buy.",
    },
    {
      question: "Who builds homes in Newbridge?",
      answer:
        "Newbridge is a Richmond American Homes community in southwest Las Vegas, with ranch-style and Modern Living floor plans marketed from the sales center at 5509 Middleton Falls Ave.",
    },
    {
      question: "How do I get directions to the Newbridge model homes?",
      answer:
        "From Blue Diamond Road (SR-160), head south on Jones Boulevard, turn left on Oleta Avenue, and follow signage to Middleton Falls Avenue — the sales center is at 5509 Middleton Falls Ave, Las Vegas, NV 89139.",
    },
  ],
  commuteNotes: [
    {
      destination: "Las Vegas Strip (approximate)",
      note: "About 20–30 minutes via 215 Beltway and I-15 in typical off-peak traffic.",
    },
    {
      destination: "Harry Reid International Airport (approximate)",
      note: "About 20–30 minutes via the 215 Beltway depending on traffic.",
    },
    {
      destination: "Downtown Summerlin (approximate)",
      note: "About 25–35 minutes via the 215 Beltway west.",
    },
    {
      destination: "Downtown Las Vegas (approximate)",
      note: "About 25–35 minutes via the 215 Beltway and I-15.",
    },
  ],
  pagePath: "/amenities",
  siteDomains: ["newbridgehomesforsale.com", "www.newbridgehomesforsale.com"],
};
