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

let IconWeixin: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1025 1024" width={size} height={size} {...rest}>
      <Path
        d="M858.231467 1023.744 166.075733 1023.744C74.427733 1023.744 0.136533 949.248 0.136533 857.378133L0.136533 166.587733C0.136533 74.717867 74.427733 0.238933 166.075733 0.238933L858.231467 0.238933C949.879467 0.238933 1024.170667 74.717867 1024.170667 166.587733L1024.170667 857.378133C1024.170667 949.248 949.879467 1023.744 858.231467 1023.744ZM384.426667 158.139733C213.76 158.139733 73.949867 274.363733 73.949867 421.973333 73.949867 507.204267 120.456533 577.143467 198.1952 631.415467L167.133867 724.753067 275.6608 670.3616C314.504533 678.0416 345.668267 685.943467 384.426667 685.943467 394.171733 685.943467 403.831467 685.4656 413.405867 684.714667 407.330133 663.978667 403.831467 642.2528 403.831467 619.707733 403.831467 484.164267 520.2944 374.186667 667.784533 374.186667 677.8368 374.186667 687.786667 374.903467 697.668267 376.0128 670.805333 251.016533 537.070933 158.139733 384.426667 158.139733ZM687.4112 390.843733C539.6992 390.843733 423.355733 491.946667 423.355733 615.970133 423.355733 740.215467 539.6992 841.1136 687.4112 841.1136 718.336 841.1136 749.5168 833.314133 780.578133 825.531733L865.7408 872.1408 842.3936 794.624C904.704 747.895467 951.125333 685.943467 951.125333 615.970133 951.125333 491.946667 826.9312 390.843733 687.4112 390.843733ZM775.2704 580.2496C756.6336 580.2496 741.512533 565.1456 741.512533 546.5088 741.512533 527.889067 756.6336 512.785067 775.2704 512.785067 793.924267 512.785067 809.045333 527.889067 809.045333 546.5088 809.045333 565.1456 793.924267 580.2496 775.2704 580.2496ZM606.1056 580.2496C587.451733 580.2496 572.330667 565.1456 572.330667 546.5088 572.330667 527.889067 587.451733 512.785067 606.1056 512.785067 624.7424 512.785067 639.863467 527.889067 639.863467 546.5088 639.863467 565.1456 624.7424 580.2496 606.1056 580.2496ZM499.5584 366.7456C475.7504 366.7456 456.430933 347.4432 456.430933 323.652267 456.430933 299.844267 475.7504 280.558933 499.5584 280.558933 523.383467 280.558933 542.685867 299.844267 542.685867 323.652267 542.685867 347.460267 523.383467 366.7456 499.5584 366.7456ZM279.569067 366.7456C255.744 366.7456 236.424533 347.4432 236.424533 323.652267 236.424533 299.844267 255.744 280.558933 279.569067 280.558933 303.377067 280.558933 322.696533 299.844267 322.696533 323.652267 322.696533 347.460267 303.377067 366.7456 279.569067 366.7456Z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconWeixin.defaultProps = {
  size: 18,
};

IconWeixin = React.memo ? React.memo(IconWeixin) : IconWeixin;

export default IconWeixin;