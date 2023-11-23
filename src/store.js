import { reactive } from "vue";

export const store = reactive({
  // apiUrl: "https://api.themoviedb.org/3/",
  // endPoint: "discover/movie",
  // params: {
  //   api_key: "3d1d44f45c31beb4fa420771967796c4",
  //   with_genres: "27",
  // },
  movies: [
    {
      title: "Quisqure Auctor Movie In Strack",
      categoty: "Coming Soon",
      views: 1060,
      trailer: "https://www.youtube.com/embed/BP0k4SdquG0",
      release: "February 12, 2016",
      genres: ["Drama", "Action Releas"],
      image: "/images/2.jpg",
      rating: 4,
      id: 1,
    },
    {
      title: "New Movie Quisque in Strack",
      categoty: "Latest Movie",
      views: 772,
      trailer: "https://www.youtube.com/embed/BP0k4SdquG0",
      release: "February 12, 2016",
      genres: ["Drama", "Action Releas"],
      image: "/images/5.jpg",
      rating: 0,
      id: 2,
    },
    {
      title: "Movie Action Garila English",
      categoty: "Top Rating",
      views: 385,
      trailer: "https://www.youtube.com/embed/BP0k4SdquG0",
      release: "February 12, 2016",
      genres: ["Drama", "Action Releas"],
      image: "/images/3.jpg",
      rating: 1,
      id: 3,
    },
    {
      title: "Action Garila English Movie",
      categoty: "TV Series",
      views: 312,
      trailer: "https://www.youtube.com/embed/BP0k4SdquG0",
      release: "February 12, 2016",
      genres: ["Drama", "Action Releas"],
      image: "/images/3-1.jpg",
      rating: 0,
      id: 4,
    },
    {
      title: "Donec English Action movie",
      categoty: "Coming Soon",
      views: 501,
      trailer: "https://www.youtube.com/embed/BP0k4SdquG0",
      release: "February 12, 2016",
      genres: ["Drama", "Action Releas"],
      image: "/images/2-1 (1).jpg",
      rating: 10,
      id: 5,
    },
    {
      title: "English Action movie in Strack",
      categoty: "Latest Movie",
      views: 286,
      trailer: "https://www.youtube.com/embed/BP0k4SdquG0",
      release: "February 12, 2016",
      genres: ["Drama", "Action Releas"],
      image: "/images/4-1.jpg",
      rating: 0,
      id: 6,
    },
    {
      title: "Movie Auctor Quisque in Strack",
      categoty: "Top Rating",
      views: 311,
      trailer: "https://www.youtube.com/embed/BP0k4SdquG0",
      release: "February 12, 2016",
      genres: ["Drama", "Action Releas"],
      image: "/images/6.jpg",
      rating: 0,
      id: 7,
    },
    {
      title: "Auctor  Movie Quisque in Strack",
      categoty: "TV Series",
      views: 359,
      trailer: "https://www.youtube.com/embed/BP0k4SdquG0",
      release: "February 12, 2016",
      genres: ["Drama", "Action Releas"],
      image: "/images/5.jpg",
      rating: 1,
      id: 8,
    },
    {
      title: "Donec Movie Quisque in Strack",
      categoty: "Coming Soon",
      views: 386,
      trailer: "https://www.youtube.com/embed/BP0k4SdquG0",
      release: "February 12, 2016",
      genres: ["Drama", "Action Releas"],
      image: "/images/1-2.jpg",
      rating: 1,
      id: 9,
    },
  ],
  posts: [
    {
      title: "Actor The Concept Movie High Concept",
      text: `It has survived not only five centuries, but also the leap into electronic. Lorem Ipsum is simply dummied text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s when an
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      Lorem Ipsum is simply dummy text of the printing and typesetting industry
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.`,
      image: "/images/blog-570x570.jpg",
      date: "April 14, 2020",
      author: "Moviestar",
      comments: [],
      id: 1,
    },
    {
      title: "Consequat Nam Lectus Nibh Aucibus It Has Turpis",
      text: `It has survived not only five centuries, but also the leap into electronic. Lorem Ipsum is simply dummied text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s when an
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      Lorem Ipsum is simply dummy text of the printing and typesetting industry
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.`,
      image: "/images/blog2-570x570.jpg",
      date: "April 14, 2020",
      author: "Moviestar",
      comments: [],
      id: 2,
    },
    {
      title: "Nam Lectus Nibh Consequat Aucibus Turpis It Has Survived.",
      text: `It has survived not only five centuries, but also the leap into electronic. Lorem Ipsum is simply dummied text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s when an
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      Lorem Ipsum is simply dummy text of the printing and typesetting industry
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.`,
      image: "/images/blog3-570x570.jpg",
      date: "April 14, 2020",
      author: "Moviestar",
      comments: [],
      id: 3,
    },
    {
      title: "Bring Me The Head Of Alfredo Garcia Best Movie In",
      text: `It has survived not only five centuries, but also the leap into electronic. Lorem Ipsum is simply dummied text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s when an
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      Lorem Ipsum is simply dummy text of the printing and typesetting industry
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.`,
      image: "/images/blog4-570x570.jpg",
      date: "April 14, 2020",
      author: "Moviestar",
      comments: [],
      id: 4,
    },
    {
      title: "Pump Action Interaction English Action Movie (2020)",
      text: `It has survived not only five centuries, but also the leap into electronic. Lorem Ipsum is simply dummied text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s when an
      Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry’s standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.
      It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
      Lorem Ipsum is simply dummy text of the printing and typesetting industry
      It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using ‘Content here, content here’, making it look like readable English.`,
      image: "/images/blog5-570x570.jpg",
      date: "April 14, 2020",
      author: "Moviestar",
      comments: [],
      id: 5,
    },
  ],
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
  searchedOptions: "",
  selectedCategory: "All Movie Category",
  searchedMovies: [],

  page: "home",
});
