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

let IconGift: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M224 832.192V320l576-0.224L800.256 832 224 832.192zM512 160c52.928 0 96 43.04 96 96h-192c0-52.96 43.072-96 96-96z m288.256 96H672c0-88.224-71.776-160-160-160s-160 71.776-160 160H223.744A63.84 63.84 0 0 0 160 319.776v512.416C160 867.392 188.608 896 223.744 896h576.512A63.872 63.872 0 0 0 864 832.192V319.776A63.84 63.84 0 0 0 800.256 256z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M700.64 612.288a32 32 0 0 0-43.712 11.68A160.608 160.608 0 0 1 518.304 704a160.576 160.576 0 0 1-138.592-80 32 32 0 0 0-55.424 32.032 224.896 224.896 0 0 0 194.016 112 224.768 224.768 0 0 0 194.016-112 32 32 0 0 0-11.68-43.744"
        fill={getIconColor(color, 1, '#333333')}
      />
    </Svg>
  );
};

IconGift.defaultProps = {
  size: 18,
};

IconGift = React.memo ? React.memo(IconGift) : IconGift;

export default IconGift;
