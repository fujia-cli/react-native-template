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

let IconEmpty: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M590.208 454.176v210.496a32 32 0 1 0 64 0v-210.496a32 32 0 1 0-64 0M398.208 454.176v210.496a32 32 0 1 0 64 0v-210.496a32 32 0 1 0-64 0"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M377.664 259.584l-8.896-63.36 253.504-35.648 8.928 63.392-253.536 35.616z m443.616-62.336l-126.72 17.792-11.872-84.416a36.512 36.512 0 0 0-14.432-24.224c-16.416-12.384-41.28-11.072-54.752-9.216L359.68 132.864c-46.592 6.56-60.16 30.688-57.28 51.072l11.84 84.544-126.72 17.824a32 32 0 1 0 8.928 63.36l45.92-6.432a31.36 31.36 0 0 0-4.192 14.976v447.936c0 35.328 28.704 64.032 64 64.032h447.968a64.096 64.096 0 0 0 64-64.032V358.208a32 32 0 1 0-64 0v447.968l-448-0.032V358.208a31.744 31.744 0 0 0-8.992-22.112l537.056-75.488a32 32 0 0 0 27.2-36.16 31.648 31.648 0 0 0-36.16-27.2z"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconEmpty.defaultProps = {
  size: 18,
};

IconEmpty = React.memo ? React.memo(IconEmpty) : IconEmpty;

export default IconEmpty;
