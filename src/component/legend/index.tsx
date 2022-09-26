import React from 'react';
import css from './style.less';

interface Ipros {
  position: string;
  colors: string[];
  categorys: string[];
}

export default function ({ position, colors, categorys }: Ipros) {
  return (
    <div
      className={`${css.ct} ${
        ['left', 'right'].includes(position) && css.column
      }`}
    >
      {categorys.map((c: string, index: number) => {
        return (
          <div
            className={css.legend}
            data-item-index={index}
            data-item-type='legend'
            key={c}
          >
            {position === 'left' && <p>{c}</p>}
            <span
              className={css.color}
              style={{ backgroundColor: colors[index] }}
            />
            {position === 'right' && <p>{c}</p>}
            {['top', 'bottom'].includes(position) && <p>{c}</p>}
          </div>
        );
      })}
    </div>
  );
}
