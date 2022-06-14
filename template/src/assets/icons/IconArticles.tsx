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

let IconArticles: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M672 1024H160A160 160 0 0 1 0 864V160A160 160 0 0 1 160 0h512a160 160 0 0 1 160 160v704a160 160 0 0 1-160 160zM160 64a96.192 96.192 0 0 0-96 96v704a96.192 96.192 0 0 0 96 96h512a96.192 96.192 0 0 0 96-96V160a96.192 96.192 0 0 0-96-96H160z m224 320H160V160h224v224z m-160-64h96v-96h-96v96z m448-96H480v-64h192v64z m0 160H480v-64h192v64z m0 160H160v-64h512v64z m0 160H160v-64h512v64z m0 160H160v-64h512v64z m256 160H704a32 32 0 0 1 0-64h224a32 32 0 0 0 32-32V416a32 32 0 0 0-32-32 32 32 0 0 1 0-64 96.192 96.192 0 0 1 96 96v512a96.192 96.192 0 0 1-96 96z"
        fill={getIconColor(color, 0, '#989898')}
      />
    </Svg>
  );
};

IconArticles.defaultProps = {
  size: 18,
};

IconArticles = React.memo ? React.memo(IconArticles) : IconArticles;

export default IconArticles;
