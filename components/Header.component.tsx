import Image from 'next/image';
import { useRouter } from 'next/router';
import React from 'react';
import { Grid } from 'semantic-ui-react';

export function Header(): JSX.Element {
  const router = useRouter();
  return (
    <Grid centered>
      <Grid.Column width={8}>
        <Image
          width={854}
          height={160}
          src="/images/logo.svg"
          alt="Come On Group Logo"
          onClick={() => router.push("/")}
        />
      </Grid.Column>
    </Grid>
  )
}