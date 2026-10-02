/**
 * Centralized image registry for Signature Elite Group.
 * Swap any URL here to update imagery site-wide without touching markup.
 * All sources are royalty-free (Unsplash) and requested at sane crop/quality
 * params to keep pages fast. Every entry below has been visually verified
 * to match its intended subject.
 */
const SE_IMG = {
  team: {
    ceo: {
      src: "assets/images/team/amila-silva-ceo.jpeg",
      alt: "Amila Silva, Founder and Chief Executive Officer of Signature Elite Group"
    }
  },
  home: {
    hero: {
      src: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=2000&q=80",
      alt: "Modern glass skyscrapers viewed from street level"
    },
    intro: {
      src: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&fit=crop&w=1400&q=80",
      alt: "Bright, minimal corporate office interior"
    }
  },
  about: {
    hero: {
      src: "https://images.unsplash.com/photo-1462899006636-339e08d1844e?auto=format&fit=crop&w=2000&q=80",
      alt: "Dramatic upward view of converging city skyscrapers"
    },
    story: {
      src: "https://images.unsplash.com/photo-1524758631624-e2822e304c36?auto=format&fit=crop&w=1400&q=80",
      alt: "Bright, minimal modern office lounge"
    },
    approach: {
      src: "https://images.unsplash.com/photo-1481253127861-534498168948?auto=format&fit=crop&w=1400&q=80",
      alt: "Detail of modern architectural structure against the sky"
    }
  },
  services: {
    hero: {
      src: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?auto=format&fit=crop&w=2000&q=80",
      alt: "Striking angular modern commercial building"
    },
    cleaning: {
      src: "assets/logo/cleaning-logo.png",
      alt: "Signature Elite Cleaning logo"
    },
    construction: {
      src: "assets/logo/construction-logo.png",
      alt: "Signature Elite Construction logo"
    }
  },
  contact: {
    hero: {
      src: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=2000&q=80",
      alt: "Dramatic angular modern building facade at dusk"
    },
    side: {
      src: "https://images.unsplash.com/photo-1554469384-e58fac16e23a?auto=format&fit=crop&w=1400&q=80",
      alt: "Modern glass office building viewed from below"
    }
  },
  stock: {
    "hero:cleaning": { src: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1800&h=900&q=75", alt: "Bright modern living room" },
    "hero:construction": { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1800&h=900&q=75", alt: "Modern home exterior at dusk" },
    "Residential Cleaning": { src: "https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?auto=format&fit=crop&w=800&h=560&q=75", alt: "Clean, bright family living room" },
    "Commercial Cleaning": { src: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=800&h=560&q=75", alt: "Clean modern commercial space" },
    "Strata Cleaning": { src: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=800&h=560&q=75", alt: "Apartment building exterior" },
    "Industrial Cleaning": { src: "https://images.unsplash.com/photo-1553413077-190dd305871c?auto=format&fit=crop&w=800&h=560&q=75", alt: "Large industrial warehouse aisle" },
    "End of Lease Cleaning": { src: "https://images.unsplash.com/photo-1560518883-ce09059eeffa?auto=format&fit=crop&w=800&h=560&q=75", alt: "House model with keys" },
    "Carpet & Upholstery": { src: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?auto=format&fit=crop&w=800&h=560&q=75", alt: "Vacuum cleaning a carpet" },
    "Window Cleaning": { src: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?auto=format&fit=crop&w=800&h=560&q=75", alt: "Person cleaning a window" },
    "Specialised Cleaning": { src: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?auto=format&fit=crop&w=800&h=560&q=75", alt: "Gloved hand holding a spray bottle" },
    "Franchise Opportunities": { src: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=800&h=560&q=75", alt: "Team meeting in a bright office" },
    "Property Investment": { src: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&h=560&q=75", alt: "Modern property with pool" },
    "Business Investment": { src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&h=560&q=75", alt: "Business paperwork and calculator" },
    "Land Development": { src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&h=560&q=75", alt: "Open land at sunrise" },
    "Passive Income Options": { src: "https://images.unsplash.com/photo-1579621970563-ebec7560ff3e?auto=format&fit=crop&w=800&h=560&q=75", alt: "Seedling growing from coins" },
    "New Homes & Custom Builds": { src: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&h=560&q=75", alt: "Custom home at dusk" },
    "Renovations & Extensions": { src: "https://images.unsplash.com/photo-1556911220-bff31c812dba?auto=format&fit=crop&w=800&h=560&q=75", alt: "Renovated modern kitchen" },
    "Commercial Construction": { src: "https://images.unsplash.com/photo-1486325212027-8081e485255e?auto=format&fit=crop&w=800&h=560&q=75", alt: "City towers at dusk" },
    "Project Management": { src: "https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&fit=crop&w=800&h=560&q=75", alt: "Blueprints on a table" },
    "Property Development": { src: "https://images.unsplash.com/photo-1494526585095-c41746248156?auto=format&fit=crop&w=800&h=560&q=75", alt: "New home with lit entrance" },
    "Fuel Station": { src: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=800&h=560&q=75", alt: "Construction crew on site" },
    "Childcare Business": { src: "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=800&h=560&q=75", alt: "Team collaborating" },
    "Other Business Investments": { src: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&w=800&h=560&q=75", alt: "Business paperwork and calculator" },
    "Land & Property Subdivision": { src: "https://images.unsplash.com/photo-1500382017468-9049fed747ef?auto=format&fit=crop&w=800&h=560&q=75", alt: "Open land at sunrise" }
  },
  modal: {
    cleaning: {
      main: {
        src: "assets/logo/cleaning-logo.png",
        alt: "Signature Elite Cleaning logo"
      }
    },
    construction: {
      main: {
        src: "assets/logo/construction-logo.png",
        alt: "Signature Elite Construction logo"
      }
    }
  }
};
