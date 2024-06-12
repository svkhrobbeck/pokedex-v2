import { createBrowserRouter } from "react-router-dom";

const router = createBrowserRouter([
  {
    index: true,
    lazy: async () => {
      const { Home } = await import("@/pages/home");
      return { Component: Home };
    },
  },
  {
    path: "/:id",
    lazy: async () => {
      const { Pokemon } = await import("@/pages/pokemon");
      return { Component: Pokemon };
    },
  },
  {
    path: "search/:query",
    lazy: async () => {
      const { Search } = await import("@/pages/search");
      return { Component: Search };
    },
  },
]);

export default router;
