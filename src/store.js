import { reactive } from "vue";

export const store = reactive({
  apiUrl: "https://api.themoviedb.org/3/",
  endPoint: "discover/movie",
  params: {
    api_key: "3d1d44f45c31beb4fa420771967796c4",
    with_genres: "27",
  },
  movies: [],
  moviesCategories: [
    "All Movie Category",
    "Coming Soon",
    "Latest Movies",
    "Top Rating",
    "TV Series",
  ],
  socials: [
    {
      class: "fa-brands fa-facebook-f",
      link: "https://www.facebook.com/",
      color: "#235998",
    },
    {
      class: "fa-brands fa-twitter",
      link: "https://twitter.com/",
      color: "#00acee",
    },
    {
      class: "fa-brands fa-linkedin-in",
      link: "https://www.linkedin.com/",
      color: "#0e76a8",
    },
    {
      class: "fa-brands fa-instagram",
      link: "https://www.instagram.com/",
      color: "#bc1d20",
    },
    {
      class: "fa-brands fa-google-plus-g",
      link: "https://plus.google.com/",
      color: "#db4a39",
    },
  ],
  headerNav: [
    {
      name: "Home",
      elements: ["Home", "Home1", "Home2", "Home3", "Home4", "Home5", "Home6"],
    },
    {
      name: "Celebrity",
      elements: ["Celebrity", "Celebrity Single"],
    },
    {
      name: "Movie",
      elements: [
        "Movie Post",
        "Top Rated Movie",
        "Movie Category",
        "Single Movie",
      ],
    },
    {
      name: "Page",
      elements: [
        "Pricing Table",
        "Call To Action",
        "My Account",
        "Cart",
        "Checkout",
        "Wishlist",
      ],
    },
  ],
  headerNavDouble: [
    {
      name: "Shop",
      elements: [
        {
          name: "Shop Sidebar",
          subElements: ["Grid View", "List View"],
        },
        {
          name: "No Sidebar",
          subElements: ["Grid View", "List View"],
        },
      ],
    },
  ],
  headerNavSingle: ["Blog", "Contact Us"],

  cart: [],
});
