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

let IconCreation: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M896 864a32 32 0 0 1 0 64H128a32 32 0 0 1 0-64z m-60.16-733.621333l15.093333 15.093333c45.866667 45.834667 45.866667 120.16 0 166.005333L418.794667 743.338667a160.192 160.192 0 0 1-78.122667 42.986666l-152.245333 34.197334c-23.84 5.365333-44.661333-16.853333-37.749334-40.288l43.338667-146.88a160.042667 160.042667 0 0 1 40.373333-67.925334l435.328-435.050666c45.866667-45.834667 120.245333-45.834667 166.112 0zM636.32 254.304L279.68 610.709333a96.021333 96.021333 0 0 0-24.213333 40.746667l-27.946667 94.656 99.093333-22.261333a96.117333 96.117333 0 0 0 46.869334-25.781334L726.933333 344.842667l-90.602666-90.538667z m78.698667-78.656l-33.397334 33.386667 90.602667 90.538666 33.386667-33.376a53.333333 53.333333 0 0 0 0-75.456l-15.093334-15.093333a53.408 53.408 0 0 0-75.498666 0z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconCreation.defaultProps = {
  size: 18,
};

IconCreation = React.memo ? React.memo(IconCreation) : IconCreation;

export default IconCreation;
