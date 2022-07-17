/* eslint-disable react-hooks/exhaustive-deps */

import { useEffect, useState } from "react";
import { Grid, Input } from 'semantic-ui-react'
import { UserCard } from "@/components/UserCard.component";
import { GameList } from "@/components/GameList.component";
import { Sidebar } from "@/components/Sidebar.component";
import { games } from "@/utilities/constants";

export function Home() {
  const [search, setSearch] = useState("");
  const [gameList, setGameList] = useState(games);

  useEffect(() => {
    if (search?.length > 0) {
      handleFilter();
    } else {
      setGameList(games);
    }
  }, [search]);


  function handleFilter() {
    // Convert input to lower for better comparison.
    const inputToLower = search.toLowerCase();

    // Search for name and description.
    const filteredGames = games.filter(game => game.name.toLowerCase().includes(inputToLower)
      || game.description.toLowerCase().includes(inputToLower));

    setGameList(filteredGames);
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
            <GameList games={gameList} />
          </Grid.Column>
        </Grid.Row>
      </Grid>

      <Grid>
        <Grid.Row>
          <Grid.Column width={4}>
            <Sidebar />
          </Grid.Column>
        </Grid.Row>
      </Grid>


      <div className="four wide column">
        <h3 className="ui dividing header">Categories</h3>

        <div className="ui selection animated list category items">

          {/* <!-- category item template --> */}
          <div className="category item">
            <div className="content">
              <div className="header"></div>
            </div>
          </div>
          {/* <!-- end category item template --> */}

        </div>
      </div>
    </div>
  )
}

export default Home;