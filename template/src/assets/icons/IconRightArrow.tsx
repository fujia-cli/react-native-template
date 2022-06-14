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

let IconRightArrow: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M290.3 945c17.5 17.5 45.8 17.5 63.3 0l370.2-370.2c35-35 35-91.7 0-126.6l-372.9-373c-17.3-17.3-45.3-17.5-62.8-0.5-17.9 17.4-18.1 46.1-0.5 63.8l341.3 341.3c17.5 17.5 17.5 45.8 0 63.3L290.3 881.7c-17.5 17.5-17.5 45.8 0 63.3z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconRightArrow.defaultProps = {
  size: 18,
};

IconRightArrow = React.memo ? React.memo(IconRightArrow) : IconRightArrow;

export default IconRightArrow;
