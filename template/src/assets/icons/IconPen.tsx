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

let IconPen: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M70.127236 973.153635S270.809762 263.177236 952.047717 0c0 0 11.343322 43.031637-30.411051 91.233153s-152.055255 152.055255-152.055255 152.055256-8.210984 43.670269 152.055255-30.411051c0 0-20.040883 154.913894-212.877358 182.466306 0 0-18.946085 19.219784 30.411052 30.411051 0 0 193.687984-44.734656 30.411051 91.233154 0 0-185.355356 95.004124-334.521562 121.644204-149.166206 26.640081-304.110511 364.932613-304.110511 364.932613s-56.71661 62.190599-60.822102-30.411051z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconPen.defaultProps = {
  size: 18,
};

IconPen = React.memo ? React.memo(IconPen) : IconPen;

export default IconPen;
