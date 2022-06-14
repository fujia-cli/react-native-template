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

let IconSearch: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M460.8 137.6C278.4 137.6 128 288 128 470.4s150.4 332.8 332.8 332.8 332.8-150.4 332.8-332.8S646.4 137.6 460.8 137.6z m0 592c-144 0-259.2-115.2-259.2-259.2s115.2-259.2 259.2-259.2 259.2 115.2 259.2 259.2-115.2 259.2-259.2 259.2zM819.2 908.8L710.4 800c-19.2-19.2-19.2-48 0-64 19.2-19.2 48-19.2 64 0l108.8 108.8c19.2 19.2 19.2 48 0 64s-48 16-64 0z"
        fill={getIconColor(color, 0, '#606060')}
      />
    </Svg>
  );
};

IconSearch.defaultProps = {
  size: 18,
};

IconSearch = React.memo ? React.memo(IconSearch) : IconSearch;

export default IconSearch;
