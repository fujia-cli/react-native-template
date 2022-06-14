/* tslint:disable */
/* eslint-disable */

import React, {FunctionComponent} from 'react';
import {ViewProps} from 'react-native';
import {Svg, GProps, Path} from 'react-native-svg';
import {getIconColor} from './helper';

interface Props extends GProps, ViewProps {
  size?: number;
  color?: string | string[];
}

let IconHeart: FunctionComponent<Props> = ({size, color, ...rest}) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M810.97269 561.152l-293.711449 288.308966-300.526344-285.554759 0.812137-0.459035c-48.269241-39.300414-79.483586-102.223448-79.483586-173.12662 0-119.137103 88.346483-215.710897 197.243586-215.710897 77.682759 0 144.913655 49.152 176.975449 120.620138 32.450207-70.656 99.328-119.172414 176.445793-119.172414 108.932414 0 197.208276 96.609103 197.208276 215.746207 0 68.678621-29.307586 129.800828-74.963862 169.348414z m0 0"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconHeart.defaultProps = {
  size: 18,
};

IconHeart = React.memo ? React.memo(IconHeart) : IconHeart;

export default IconHeart;
