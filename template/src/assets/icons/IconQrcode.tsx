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

let IconQrcode: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M224 416.096V224l192-0.096 0.096 192.096L224 416.096zM416.096 160H223.904A64 64 0 0 0 160 223.904v192.192A64 64 0 0 0 223.904 480h192.192A64 64 0 0 0 480 416.096V223.904A64 64 0 0 0 416.096 160zM224 800.096V608l192-0.096 0.096 192.096L224 800.096zM416.096 544H223.904A64 64 0 0 0 160 607.904v192.192A64 64 0 0 0 223.904 864h192.192A64 64 0 0 0 480 800.096v-192.192A64 64 0 0 0 416.096 544zM608 416.096V224l192-0.096 0.096 192.096-192.096 0.096zM800.096 160h-192.192A64 64 0 0 0 544 223.904v192.192A64 64 0 0 0 607.904 480h192.192A64 64 0 0 0 864 416.096V223.904A64 64 0 0 0 800.096 160zM704 608a32 32 0 0 0-32 32v192a32 32 0 0 0 64 0v-192a32 32 0 0 0-32-32M576 608a32 32 0 0 0-32 32v192a32 32 0 0 0 64 0v-192a32 32 0 0 0-32-32M832 544a32 32 0 0 0-32 32v256a32 32 0 0 0 64 0v-256a32 32 0 0 0-32-32"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconQrcode.defaultProps = {
  size: 18,
};

IconQrcode = React.memo ? React.memo(IconQrcode) : IconQrcode;

export default IconQrcode;
