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

let IconAddition: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 832c-176.448 0-320-143.552-320-320S335.552 192 512 192s320 143.552 320 320-143.552 320-320 320m0-704C300.256 128 128 300.256 128 512s172.256 384 384 384 384-172.256 384-384S723.744 128 512 128"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M683.936 470.944H544v-139.968a32 32 0 1 0-64 0v139.968h-139.936a32 32 0 0 0 0 64H480v139.968a32 32 0 0 0 64 0v-139.968h139.968a32 32 0 0 0 0-64"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconAddition.defaultProps = {
  size: 18,
};

IconAddition = React.memo ? React.memo(IconAddition) : IconAddition;

export default IconAddition;
