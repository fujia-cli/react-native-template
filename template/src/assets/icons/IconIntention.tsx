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

let IconIntention: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 185.493333C567.786667 138.176 608.213333 117.333333 667.786667 117.333333c126.229333 0 212.714667 76.736 248.341333 202.848a32 32 0 0 1-61.589333 17.386667C826.208 237.312 763.125333 181.333333 667.786667 181.333333c-41.514667 0-70.357333 15.253333-117.077334 55.253334-2.165333 1.856-14.4 12.416-17.952 15.434666a32 32 0 0 1-41.514666 0c-3.552-3.018667-15.786667-13.578667-17.952-15.434666-46.72-40-75.562667-55.253333-117.077334-55.253334C230.112 181.333333 149.333333 282.368 149.333333 428.096c0 110.965333 113.269333 248.885333 343.573334 408.8a32.522667 32.522667 0 0 0 37.205333-0.16c47.445333-33.536 78.997333-56.426667 94.282667-68.373333a32 32 0 1 1 39.413333 50.432c-16.362667 12.778667-48.48 36.085333-96.746667 70.208a96.522667 96.522667 0 0 1-110.666666 0.458666C210.272 718.56 85.333333 566.432 85.333333 428.096 85.333333 249.770667 191.221333 117.333333 356.213333 117.333333 415.786667 117.333333 456.213333 138.176 512 185.493333zM821.333333 554.666667h85.333334a32 32 0 0 1 0 64h-85.333334v85.333333a32 32 0 0 1-64 0v-85.333333h-85.333333a32 32 0 0 1 0-64h85.333333v-85.333334a32 32 0 0 1 64 0v85.333334z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconIntention.defaultProps = {
  size: 18,
};

IconIntention = React.memo ? React.memo(IconIntention) : IconIntention;

export default IconIntention;
