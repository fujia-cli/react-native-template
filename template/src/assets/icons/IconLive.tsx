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

let IconLive: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M725.333333 364.32l105.386667-52.458667A74.666667 74.666667 0 0 1 938.666667 378.698667v270.186666a74.666667 74.666667 0 0 1-109.194667 66.197334L725.333333 660.778667V704c0 64.8-52.533333 117.333333-117.333333 117.333333H202.666667c-64.8 0-117.333333-52.533333-117.333334-117.333333V320c0-64.8 52.533333-117.333333 117.333334-117.333333h405.333333c64.8 0 117.333333 52.533333 117.333333 117.333333v44.32z m0 71.498667V588.586667l133.738667 69.738666A10.666667 10.666667 0 0 0 874.666667 648.874667V378.698667a10.666667 10.666667 0 0 0-15.424-9.546667L725.333333 435.818667zM661.333333 704V320a53.333333 53.333333 0 0 0-53.333333-53.333333H202.666667a53.333333 53.333333 0 0 0-53.333334 53.333333v384a53.333333 53.333333 0 0 0 53.333334 53.333333h405.333333a53.333333 53.333333 0 0 0 53.333333-53.333333zM288 469.333333a64 64 0 1 1 0-128 64 64 0 0 1 0 128z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconLive.defaultProps = {
  size: 18,
};

IconLive = React.memo ? React.memo(IconLive) : IconLive;

export default IconLive;
