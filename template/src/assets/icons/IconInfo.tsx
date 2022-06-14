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

let IconInfo: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M512 85.333333c235.637333 0 426.666667 191.029333 426.666667 426.666667 0 78.293333-21.152 153.568-60.586667 219.274667a32 32 0 0 1-54.88-32.938667A360.789333 360.789333 0 0 0 874.666667 512c0-200.298667-162.368-362.666667-362.666667-362.666667S149.333333 311.701333 149.333333 512s162.368 362.666667 362.666667 362.666667a360.789333 360.789333 0 0 0 186.314667-51.445334 32 32 0 0 1 32.928 54.88A424.778667 424.778667 0 0 1 512 938.666667C276.362667 938.666667 85.333333 747.637333 85.333333 512S276.362667 85.333333 512 85.333333z m0 565.333334a42.666667 42.666667 0 1 1 0 85.333333 42.666667 42.666667 0 0 1 0-85.333333z m0-362.666667a42.666667 42.666667 0 0 1 42.666667 42.666667v234.666666a42.666667 42.666667 0 1 1-85.333334 0V330.666667a42.666667 42.666667 0 0 1 42.666667-42.666667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconInfo.defaultProps = {
  size: 18,
};

IconInfo = React.memo ? React.memo(IconInfo) : IconInfo;

export default IconInfo;
