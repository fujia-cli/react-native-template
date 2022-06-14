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

let IconMute: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M257.493333 322.4l215.573334-133.056c24.981333-15.413333 57.877333-7.914667 73.493333 16.746667 5.301333 8.373333 8.106667 18.048 8.106667 27.914666v555.989334C554.666667 819.093333 530.784 842.666667 501.333333 842.666667c-9.994667 0-19.786667-2.773333-28.266666-8L257.493333 701.6H160c-41.237333 0-74.666667-33.013333-74.666667-73.738667V396.138667c0-40.725333 33.429333-73.738667 74.666667-73.738667h97.493333z m26.133334 58.4a32.298667 32.298667 0 0 1-16.96 4.8H160c-5.888 0-10.666667 4.714667-10.666667 10.538667v231.733333c0 5.813333 4.778667 10.538667 10.666667 10.538667h106.666667c5.994667 0 11.872 1.664 16.96 4.8L490.666667 770.986667V253.013333L283.626667 380.8zM832.565333 518.4l86.474667 86.474667a30.570667 30.570667 0 1 1-43.232 43.242666L789.333333 561.653333l-86.474666 86.474667a30.570667 30.570667 0 1 1-43.232-43.242667l86.474666-86.474666-86.474666-86.474667a30.570667 30.570667 0 1 1 43.232-43.232L789.333333 475.178667l86.474667-86.474667a30.570667 30.570667 0 1 1 43.232 43.232l-86.474667 86.474667z"
        fill={getIconColor(color, 0, '#333333')}
      />
    </Svg>
  );
};

IconMute.defaultProps = {
  size: 18,
};

IconMute = React.memo ? React.memo(IconMute) : IconMute;

export default IconMute;
