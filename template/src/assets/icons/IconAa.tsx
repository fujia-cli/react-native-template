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

let IconAa: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M704 896H602.496l-72.512-210.24H233.856L165.376 896H64l270.848-768h98.24L704 896zM501.44 598.976L394.048 279.68c-3.392-10.176-7.04-28.096-11.008-53.504h-2.304c-3.392 23.168-7.232 40.96-11.456 53.504L262.72 598.976h238.72z m233.6 5.504C766.72 585.472 803.328 576 844.736 576c76.8 0 115.2 38.656 115.2 116.032v196.736h-55.872v-47.232h-1.408c-22.08 36.352-54.592 54.464-97.6 54.464-30.976 0-55.488-8-73.728-24.064-18.24-16-27.392-37.696-27.392-64.896 0-57.216 35.264-90.368 105.664-99.84l94.464-12.672c0-49.92-21.504-74.88-64.512-74.88-38.208 0-73.024 12.288-104.512 36.992v-52.16z m94.464 140.672c-26.112 3.328-44.096 9.536-54.016 18.816-9.92 9.216-14.784 22.08-14.784 38.656 0 14.528 5.376 26.368 16.128 35.648 10.752 9.216 24.96 13.824 42.56 13.824 24.64 0 44.864-8.32 60.8-24.896 15.872-16.576 23.872-37.376 23.872-62.464v-29.312l-74.56 9.728z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconAa.defaultProps = {
  size: 18,
};

IconAa = React.memo ? React.memo(IconAa) : IconAa;

export default IconAa;
