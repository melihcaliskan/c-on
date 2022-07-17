import { NextPageContext } from 'next';
import { useRouter } from 'next/router';
import { Button, Grid } from 'semantic-ui-react';
import { gameSources } from '@/utilities/constants';
import { IGame } from '@/interfaces/IGame.interface';
import GameService from '@/services/Game.service';
import Head from 'next/head';

export function Game(props: IGame.IGamePageProps) {
  const { game, gameSource } = props;
  const { name } = game;
  const router = useRouter();

  function onBack() {
    router.back();
  }

  return (
    <>
      <Head>
        <title>{name}</title>
      </Head>
      <Grid>
        <Grid.Row>
          <Grid.Column width={3}>
            <Button
              secondary
              content='Back'
              icon='left chevron'
              onClick={onBack}
            />
          </Grid.Column>

          <Grid.Column width={10}>
            <div id="game-launch">
              <iframe
                id="game"
                src={gameSource}
                scrolling="no"
                width={640}
                height={480}
                title={name} />
            </div>
          </Grid.Column>
        </Grid.Row>
      </Grid>
    </>
  )
}

export async function getServerSideProps(ctx: NextPageContext) {
  const { query } = ctx;
  const slug = query?.slug?.toString() || "";
  const game = await GameService.GetDetail(slug);

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