import React from 'react';

type HeroProperties = {
  title: string;
  subtitle: string;
};

export const Hero: React.VFC<HeroProperties> = ({
  title,
  subtitle,
}: HeroProperties): JSX.Element => {
  return (
    <section className='hero is-small is-info'>
      <div className='hero-body has-text-centered'>
        <p className='title'>{title}</p>
        <p className='subtitle'>{subtitle}</p>
      </div>
    </section>
  );
};
