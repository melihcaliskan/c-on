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
import useFilter from "@/hooks/useFilter.hooks";

export function Home() {
  const [categories, setCategories] = useState<undefined | ISidebar.ICategoryItem[]>(undefined);
  const [games, setGames] = useState<undefined | IGame.IGameItem[]>(undefined);
  const { category, filteredGames, input, setCategory, setInput } = useFilter(games);

  useEffect(() => {
    // Slowdown for skeleton
    setTimeout(() => {
      fetchGames();
      fetchCategories();
    }, 500);
  }, []);

  async function fetchGames() {
    GameService.GetAll()
      .then(res => {
        setGames(res);
      })
      .catch(err => console.log(err));
  }

  async function fetchCategories() {
    CategoryService.GetAll()
      .then(res => {
        setCategories(res)
      })
      .catch(err => console.log(err));
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
              value={input}
              onChange={(e) => setInput(e.target.value)} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    )
  }

  function renderContent() {
    return (
      <Grid reversed="mobile vertically">
        <Grid.Column mobile={16} computer={12}>
          <GameList games={filteredGames} />
        </Grid.Column>

        <Grid.Column mobile={16} computer={4}>
          <Sidebar
            categories={categories}
            selectedCategory={category}
            setCategory={setCategory} />
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