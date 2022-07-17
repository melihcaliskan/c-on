/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import { IGame } from "@/interfaces/IGame.interface";
import { ISidebar } from "@/interfaces/ISidebar.interface";

export function useFilter(games: IGame.IGameItem[] | undefined) {
  const [category, setCategory] = useState<ISidebar.ICategoryItem>({ id: 0, name: "ALL" });
  const [input, setInput] = useState("");
  const [filteredGames, setFilteredGames] = useState(games);

  function filterByInput() {
    // Convert input to lower for better comparison.
    const inputToLower = input.toLowerCase();

    // Search for name and description.
    const filteredGames = games?.filter(game => game.name.toLowerCase().includes(inputToLower)
      || game.description.toLowerCase().includes(inputToLower));

    return filteredGames || [];
  }

  function filterByCategory() {
    const filteredGames = games?.filter(game => game.categoryIds.includes(category!.id));
    return filteredGames || [];
  }

  useEffect(() => {
    const inputGames = filterByInput();
    const categoryGames = filterByCategory();
    const intersections = inputGames.filter(e => categoryGames.indexOf(e) !== -1);

    setFilteredGames(intersections);
  }, [category, input]);


  useEffect(() => {
    setFilteredGames(games);
  }, [games]);

  return { filteredGames, category, input, setInput, setCategory };
}

export default useFilter;