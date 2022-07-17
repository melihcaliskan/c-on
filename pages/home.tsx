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
  const [filteredGameList, setFilteredGameList] = useState<undefined | IGame.IGameItem[]>(undefined);

  useEffect(() => {
    // Slowdown for skeleton
    setTimeout(() => {
      fetchGames();
      fetchCategories();
    }, 500);
  }, []);

  useEffect(() => {
    if (search?.length > 0) {
      handleFilter();
    } else {
      setFilteredGameList(games);
    }
  }, [search]);

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
      .then(res => setCategories(res))
      .catch(err => console.log(err));
  }

  function handleFilter() {
    // Convert input to lower for better comparison.
    const inputToLower = search.toLowerCase();

    // Search for name and description.
    const filteredGames = games?.filter(game => game.name.toLowerCase().includes(inputToLower)
      || game.description.toLowerCase().includes(inputToLower));

    setFilteredGameList(filteredGames);
  }

  return (
    <div className="casino">

      <div className="ui grid centered">
        <div className="twelve wide column">
          <div className="ui list">

            {/* <!-- player item template --> */}
            <div className="player item">
              {/* <Image className="ui avatar image" src="" alt="avatar" /> */}

              <div className="content">
                <div className="header"><b className="name"></b></div>
                <div className="description event"></div>
              </div>
            </div>
            {/* <!-- end player item template --> */}

          </div>

        </div>
      </div>
      <Grid>
        <Grid.Row>
          <Grid.Column width={12}>
            <UserCard />
          </Grid.Column>

          <Grid.Column width={4}>
            <Input
              placeholder="Search Game"
              icon="search"
              size="small"
              value={search}
              onChange={(e) => setSearch(e.target.value)} />
          </Grid.Column>
        </Grid.Row>

        <Grid.Row>
          <Grid.Column width={12}>
            <GameList games={filteredGameList} />
          </Grid.Column>

          <Grid.Column width={4}>
            <Sidebar categories={categories} />
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </div>
  )
}

export default Home;