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

let IconSwitch: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 320c23.616 0 44.032-12.96 55.136-32 5.472-9.44 8.864-20.288 8.864-32a64 64 0 1 0-128 0c0 11.712 3.392 22.56 8.864 32 11.104 19.04 31.52 32 55.136 32M512 448c-23.616 0-44.032 12.96-55.136 32A63.584 63.584 0 0 0 448 512c0 11.712 3.392 22.56 8.864 32 11.104 19.04 31.52 32 55.136 32 23.616 0 44.032-12.96 55.136-32 5.472-9.44 8.864-20.288 8.864-32s-3.392-22.56-8.864-32c-11.104-19.04-31.52-32-55.136-32M512 704c-23.616 0-44.032 12.96-55.136 32A63.584 63.584 0 0 0 448 768a64 64 0 1 0 128 0c0-11.712-3.392-22.56-8.864-32-11.104-19.04-31.52-32-55.136-32"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconSwitch.defaultProps = {
  size: 18,
};

IconSwitch = React.memo ? React.memo(IconSwitch) : IconSwitch;

export default IconSwitch;
