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

let IconSubscribe: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M704 405.333333v-128a21.333333 21.333333 0 0 1 42.666667 0v128h128a21.333333 21.333333 0 0 1 0 42.666667h-128v128a21.333333 21.333333 0 0 1-42.666667 0v-128h-128a21.333333 21.333333 0 0 1 0-42.666667h128z m149.333333 173.717334a21.333333 21.333333 0 0 1 42.666667 0V881.493333a64 64 0 0 1-98.794667 53.696l-273.088-176.96a21.333333 21.333333 0 0 0-23.189333 0l-274.197333 177.152A64 64 0 0 1 128 881.642667V234.666667a149.333333 149.333333 0 0 1 149.333333-149.333334h469.333334a149.333333 149.333333 0 0 1 149.333333 149.333334v43.946666a21.333333 21.333333 0 0 1-42.666667 0V234.666667a106.666667 106.666667 0 0 0-106.666666-106.666667H277.333333a106.666667 106.666667 0 0 0-106.666666 106.666667v646.976a21.333333 21.333333 0 0 0 32.917333 17.92l274.197333-177.173334a64 64 0 0 1 69.546667 0.064l273.066667 176.96A21.333333 21.333333 0 0 0 853.333333 881.493333V579.072z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconSubscribe.defaultProps = {
  size: 18,
};

IconSubscribe = React.memo ? React.memo(IconSubscribe) : IconSubscribe;

export default IconSubscribe;
