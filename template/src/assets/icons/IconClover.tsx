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

let IconClover: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M859.867 448.403c136.9-63.175 54.44-193.784-98.066-152.726-84.072 22.603-158.738 111.715-218.313 145.103 33.388-59.575 122.469-134.255 145.104-218.281C729.65 69.96 599.041-12.468 535.881 124.402c-63.175-136.87-193.784-54.441-152.742 98.097 22.65 84.025 111.731 158.706 145.103 218.281-59.56-33.388-134.208-122.5-218.296-145.103-152.507-41.058-234.951 89.551-98.05 152.726-136.901 63.16-54.457 193.768 98.05 152.726 84.088-22.618 158.737-111.731 218.296-145.103-33.372 59.576-122.453 134.24-145.103 218.328-41.042 152.508 89.566 234.937 152.742 98.051 63.16 136.886 193.769 54.457 152.711-98.051-22.635-84.088-111.716-158.752-145.104-218.328 59.575 33.372 134.24 122.485 218.313 145.103 152.507 41.042 234.967-89.566 98.066-152.726z"
        fill={getIconColor(color, 0, '#007fff')}
      />
    </Svg>
  );
};

IconClover.defaultProps = {
  size: 18,
};

IconClover = React.memo ? React.memo(IconClover) : IconClover;

export default IconClover;
