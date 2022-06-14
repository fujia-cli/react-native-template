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

let IconCreatetask: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M544 800.128l-320 0.16-0.064-96.32-0.064-160-0.032-64-0.096-160-0.032-96h576.128L800 223.776 800.256 800 544 800.128zM799.84 160H223.712A63.808 63.808 0 0 0 160 223.744v576.544c0 35.136 28.608 63.68 63.744 63.68h576.512A63.808 63.808 0 0 0 864 800.32V223.744A64 64 0 0 0 799.84 160z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M680.608 320h-224a32 32 0 0 0 0 64h224a32 32 0 0 0 0-64M680.608 480h-224a32 32 0 0 0 0 64h224a32 32 0 0 0 0-64M680.608 640h-224a32 32 0 0 0 0 64h224a32 32 0 0 0 0-64M352 320a32 32 0 1 0 0 64 32 32 0 0 0 0-64M352 480a32 32 0 1 0 0 64 32 32 0 0 0 0-64M352 640a32 32 0 1 0 0 64 32 32 0 0 0 0-64"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconCreatetask.defaultProps = {
  size: 18,
};

IconCreatetask = React.memo ? React.memo(IconCreatetask) : IconCreatetask;

export default IconCreatetask;
