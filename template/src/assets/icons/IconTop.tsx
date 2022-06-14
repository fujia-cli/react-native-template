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

let IconTop: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M820.394667 614.165333a21.333333 21.333333 0 0 0 30.165333-30.186666L528.853333 262.250667a21.333333 21.333333 0 0 0-30.186666 0L176.917333 583.978667a21.333333 21.333333 0 1 0 30.165334 30.186666L490.666667 330.581333v501.482667c0 11.882667 9.557333 21.269333 21.333333 21.269333 11.861333 0 21.333333-9.514667 21.333333-21.269333v-504.96l287.061334 287.061333zM170.666667 192c0-11.776 9.706667-21.333333 21.333333-21.333333h640c11.776 0 21.333333 9.472 21.333333 21.333333 0 11.776-9.706667 21.333333-21.333333 21.333333H192c-11.776 0-21.333333-9.472-21.333333-21.333333z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconTop.defaultProps = {
  size: 18,
};

IconTop = React.memo ? React.memo(IconTop) : IconTop;

export default IconTop;
