/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import { Grid, Input } from 'semantic-ui-react'
import { UserCard } from "@/components/UserCard.component";
import { GameList } from "@/components/GameList.component";
import { Sidebar } from "@/components/Sidebar.component";
import { IGame } from "@/interfaces/IGame.interface";
import { ISidebar } from "@/interfaces/ISidebar.interface";
import GameService from "@/services/Game.service";
import CategoryService from "@/services/Category.service";

export function Home() {
  const [search, setSearch] = useState("");
  const [categories, setCategories] = useState<undefined | ISidebar.ICategoryItem[]>(undefined);
  const [games, setGames] = useState<undefined | IGame.IGameItem[]>(undefined);
  
  // TODO: Create useFilter hook
  const [filteredGameList, setFilteredGameList] = useState<undefined | IGame.IGameItem[]>(undefined);
  const [filteredCategory, setFilteredCategory] = useState<undefined | ISidebar.ICategoryItem>(undefined);

  useEffect(() => {
    // Slowdown for skeleton
    setTimeout(() => {
      fetchGames();
      fetchCategories();
    }, 500);
  }, []);

  useEffect(() => {
    if (search?.length > 0) {
      handleFilterInput();
    } else {
      // Don't re-fetch, set last fetched data.
      setFilteredGameList(games);
    }
  }, [search]);

  useEffect(() => {
    if (filteredCategory) {
      handleFilterCategory();
    }
  }, [filteredCategory]);

  async function fetchGames() {
    GameService.GetAll()
      .then(res => {
        setGames(res);
        setFilteredGameList(res);
      })
      .catch(err => console.log(err));
  }

  async function fetchCategories() {
    CategoryService.GetAll()
      .then(res => {
        setCategories(res)
        setFilteredCategory(res[0]);
      })
      .catch(err => console.log(err));
  }

  // Filter for search input
  function handleFilterInput() {
    // Convert input to lower for better comparison.
    const inputToLower = search.toLowerCase();

    // Search for name and description.
    const filteredGames = games?.filter(game => game.name.toLowerCase().includes(inputToLower)
      || game.description.toLowerCase().includes(inputToLower));

    setFilteredGameList(filteredGames);
  }

  // Filter for category
  function handleFilterCategory() {
    // Check if game has selected category.
    const filteredGames = games?.filter(game => game.categoryIds.includes(filteredCategory!.id));
    setFilteredGameList(filteredGames);
  }

  function renderHeader() {
    return (
      <Grid>
        <Grid.Row>
          <Grid.Column
            mobile={16}
            computer={12}>
            <UserCard />
          </Grid.Column>

          <Grid.Column
            mobile={16}
            computer={4}>

            <Input
              fluid
              placeholder="Search Game"
              icon="search"
              size="small"
              value={search}
              onChange={(e) => setSearch(e.target.value)} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }

  function renderContent() {
    return (
      <Grid reversed="mobile vertically">
        <Grid.Column mobile={16} computer={12}>
          <GameList games={filteredGameList} />
        </Grid.Column>

        <Grid.Column mobile={16} computer={4}>
          <Sidebar
            categories={categories}
            filteredCategory={filteredCategory}
            setFilteredCategory={setFilteredCategory} />
        </Grid.Column>
      </Grid>
    )
  }

  return (
    <>
      {renderHeader()}
      {renderContent()}
    </>
  )
}

export default Home;