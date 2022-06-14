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

let IconSelect: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M516.988866 103.920864c-226.207691 0-409.621675 183.450109-409.621675 409.625288 0 226.214916 183.413984 409.589162 409.621675 409.589162 226.214916 0 409.592775-183.377859 409.592775-409.589162C926.578029 287.370973 743.203782 103.920864 516.988866 103.920864zM793.016581 404.990447l-292.395964 326.931489-0.354025 0.281775c-15.168899 16.650025-40.99468 17.780738-57.576067 2.539589l-207.863402-190.440302c-16.617512-15.168899-17.780738-41.030805-2.575714-57.648317 15.205024-16.581387 40.99468-17.744613 57.60858-2.539589l177.453355 162.562619 264.879532-296.095167c14.959373-16.790912 40.781542-18.203401 57.576067-3.211515C806.563466 362.406265 807.972342 388.195922 793.016581 404.990447z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconSelect.defaultProps = {
  size: 18,
};

IconSelect = React.memo ? React.memo(IconSelect) : IconSelect;

export default IconSelect;
