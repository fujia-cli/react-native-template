/* tslint:disable */
/* eslint-disable */

import React, { FunctionComponent } from 'react';
import { ViewProps } from 'react-native';
import { Svg, GProps, Path } from 'react-native-svg';
import { getIconColor } from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconBook: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M513.6 57.6l-17.6-8L320 3.2C286.4-4.8 265.6 6.4 256 40l-209.6 870.4c-9.6 33.6 3.2 56 36.8 64l176 46.4c33.6 9.6 56-3.2 64-36.8l209.6-870.4c8-27.2 1.6-44.8-19.2-56z m-84.8 302.4c-1.6 8-6.4 14.4-12.8 20.8-6.4 4.8-11.2 6.4-17.6 4.8h-1.6l-160-43.2c-6.4-1.6-11.2-6.4-12.8-12.8-1.6-3.2-1.6-8-3.2-11.2 0-3.2 0-8 1.6-11.2 1.6-8 6.4-14.4 12.8-19.2 4.8-4.8 11.2-6.4 17.6-4.8l160 43.2h1.6c1.6 0 1.6 1.6 3.2 1.6 4.8 1.6 8 6.4 9.6 11.2 1.6 3.2 1.6 6.4 3.2 11.2 0 1.6 0 4.8-1.6 9.6z m27.2-105.6c0 1.6 0 4.8-1.6 6.4-1.6 6.4-4.8 11.2-8 14.4l-4.8 4.8c-1.6 1.6-3.2 1.6-4.8 3.2s-8 3.2-11.2 1.6h-1.6l-160-43.2c-6.4-1.6-11.2-6.4-14.4-14.4-1.6-4.8-1.6-11.2-1.6-16v-6.4c0-1.6 1.6-4.8 3.2-6.4s4.8-9.6 9.6-12.8c6.4-4.8 12.8-6.4 19.2-4.8l160 43.2c3.2 1.6 6.4 4.8 8 8 1.6 1.6 3.2 3.2 3.2 4.8 1.6 3.2 1.6 8 3.2 11.2s1.6 4.8 1.6 6.4zM633.6 48c-8-8-17.6-11.2-27.2-11.2-11.2 0-20.8 3.2-27.2 11.2-8 8-11.2 16-11.2 27.2v908.8c0 11.2 3.2 20.8 11.2 27.2 8 8 17.6 11.2 27.2 11.2 11.2 0 19.2-3.2 27.2-11.2s11.2-16 11.2-27.2V75.2c0-11.2-4.8-19.2-11.2-27.2zM971.2 48c-8-8-17.6-11.2-27.2-11.2-11.2 0-20.8 3.2-27.2 11.2-8 8-11.2 16-11.2 27.2v908.8c0 11.2 3.2 20.8 11.2 27.2 8 8 17.6 11.2 27.2 11.2 11.2 0 19.2-3.2 27.2-11.2s11.2-16 11.2-27.2V75.2c0-11.2-3.2-19.2-11.2-27.2zM809.6 48c-8 8-11.2 16-11.2 27.2v908.8c0 11.2 3.2 20.8 11.2 27.2 8 8 17.6 11.2 27.2 11.2 11.2 0 20.8-3.2 28.8-11.2s11.2-16 11.2-27.2V75.2c0-11.2-3.2-20.8-11.2-27.2-8-8-17.6-11.2-28.8-11.2-9.6 0-19.2 3.2-27.2 11.2zM683.2 998.4c-1.6 0-4.8-1.6-4.8-4.8V64c0-1.6 1.6-4.8 4.8-4.8 1.6 0 4.8 1.6 4.8 4.8v931.2c-1.6 1.6-3.2 3.2-4.8 3.2zM716.8 1001.6V68.8c0-4.8 3.2-8 8-8v932.8c0 3.2-3.2 8-8 8zM764.8 998.4c-4.8 0-8-3.2-8-8v-928c0-1.6 1.6-1.6 1.6-1.6 3.2 0 6.4 3.2 6.4 6.4v931.2z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M640 60.8s16-14.4 41.6 0c20.8 11.2 33.6 3.2 38.4 0 3.2-1.6 4.8-3.2 8-4.8 8-3.2 19.2-4.8 32 4.8 24 19.2 43.2-4.8 43.2-4.8"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconBook.defaultProps = {
  size: 18,
};

IconBook = React.memo ? React.memo(IconBook) : IconBook;

export default IconBook;