import Image from 'next/image';
import React from 'react';

export function Header(): JSX.Element {
  return (
    <div className="ui one column center aligned page grid">
      <div className="column twelve wide">
        <Image
          width={854}
          height={160}
          src="/images/logo.svg"
          alt="Come On Group Logo"
        />
      </div>
    </div>
  )
}