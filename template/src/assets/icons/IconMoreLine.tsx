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

let IconMoreLine: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M781 868.4H95c-16.6 0-30 13.4-30 30s13.4 30 30 30h686c16.6 0 30-13.4 30-30s-13.4-30-30-30zM861 106H95c-16.6 0-30 13.4-30 30s13.4 30 30 30h766c16.6 0 30-13.4 30-30s-13.4-30-30-30zM95 547.2h513.9c16.6 0 30-13.4 30-30s-13.4-30-30-30H95c-16.6 0-30 13.4-30 30s13.4 30 30 30z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconMoreLine.defaultProps = {
  size: 18,
};

IconMoreLine = React.memo ? React.memo(IconMoreLine) : IconMoreLine;

export default IconMoreLine;
