import { NextPageContext } from 'next';
import { useRouter } from 'next/router';
import { Button } from 'semantic-ui-react';
import { games, gameSources } from '@/utilities/constants';
import { IGame } from '@/interfaces/IGame.interface';

export function Game(props: IGame.IGamePageProps) {
  const { game, gameSource } = props;
  const { name } = game;
  const router = useRouter();

  function onBack() {
    router.back();
  }

  return (
    <div className="ingame">
      <div className="ui grid centered">
        <div className="three wide column">
          <Button
            secondary
            inverted
            content='Back'
            icon='left chevron'
            onClick={onBack}
          />
        </div>

        <div className="ten wide column">
          <div id="game-launch">
            <iframe
              id="game"
              src={gameSource}
              scrolling="no"
              width={640}
              height={480}
              title={name} />
          </div>
        </div>
        <div className="three wide column"></div>
      </div>
    </div>
  )
}

export async function getServerSideProps(ctx: NextPageContext) {
  const { query } = ctx;
  const slug = query?.slug;
  const game = games.find(game => game.code === slug);

  if (!slug || !game) {
    return {
      redirect: {
        destination: '/home',
        permanent: false,
      },
    }
  }

  return {
    props: {
      game,
      gameSource: gameSources[slug as keyof typeof gameSources].src
    }
  }
}

export default Game;