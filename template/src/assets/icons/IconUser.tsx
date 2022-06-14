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

let IconUser: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M507.642553 518.53617m-501.106383 0a501.106383 501.106383 0 1 0 1002.212766 0 501.106383 501.106383 0 1 0-1002.212766 0Z"
        fill={getIconColor(color, 0, '#333333')}
      />
      <Path
        d="M513.089362 262.53617c68.629787 0 125.276596 55.557447 125.276595 123.097873 0 67.540426-55.557447 123.097872-125.276595 123.097872-68.629787 0-125.276596-55.557447-125.276596-123.097872 1.089362-68.629787 56.646809-123.097872 125.276596-123.097873z m0 0c68.629787 0 125.276596 55.557447 125.276595 123.097873 0 67.540426-55.557447 123.097872-125.276595 123.097872-68.629787 0-125.276596-55.557447-125.276596-123.097872 1.089362-68.629787 56.646809-123.097872 125.276596-123.097873z m-46.842553 286.502128h104.578723c89.32766 0 161.225532 70.808511 161.225532 159.046808v9.804256c0 34.859574-71.897872 35.948936-161.225532 35.948936h-104.578723c-89.32766 0-161.225532 0-161.225532-35.948936V708.085106c0-88.238298 72.987234-159.046809 161.225532-159.046808z"
        fill={getIconColor(color, 1, '#ffffff')}
      />
    </Svg>
  );
};

IconUser.defaultProps = {
  size: 18,
};

IconUser = React.memo ? React.memo(IconUser) : IconUser;

export default IconUser;
