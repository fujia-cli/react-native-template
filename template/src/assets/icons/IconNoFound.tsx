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

let IconNoFound: FunctionComponent<Props> = ({ size, color, ...rest }) => {
  return (
    <Svg viewBox="0 0 1024 1024" width={size} height={size} {...rest}>
      <Path
        d="M600.240174 905.742029c-135.006874 100.730194-275.721335 20.250719-275.721335 20.25072s147.468855 126.694732 473.630058 73.961858c43.816326-7.084636 88.025204-26.051772 147.381621-126.925279 19.658775-33.39811 31.111336-65.755644 36.314214-95.54601-208.974963-5.439655-381.604558 128.258711-381.604558 128.258711"
        fill={getIconColor(color, 0, '#6DBBFF')}
      />
      <Path
        d="M913.646539 621.708553c-97.920017-10.38083-198.650212-3.115495-601.58345 146.42828 0 0-77.631912 38.68199-113.97728-20.506191 0 0 71.39469-74.908969-4.411542-157.077042 0 0-60.234986 42.059187-33.753276 126.694732 0 0-69.581472-30.114378-126.694732 36.351599 0 0 58.671008 60.752158 140.197289 14.536902 0 0 87.233869 113.715579 151.101522 157.855916 0 0 140.714461 80.479475 275.721335-20.25072 0 0 172.629595-133.692135 381.610788-128.258711h0.037386c-0.006231 0 29.665746-145.387704-68.24804-155.774765z m-219.717191 200.563126a31.341883 31.341883 0 1 1 0-62.696228 31.341883 31.341883 0 1 1 0 62.696228z"
        fill={getIconColor(color, 1, '#3088FE')}
      />
      <Path
        d="M693.929348 790.923565m-13.215931 0a13.215931 13.215931 0 1 0 26.431862 0 13.215931 13.215931 0 1 0-26.431862 0Z"
        fill={getIconColor(color, 2, '#333333')}
      />
      <Path
        d="M655.334593 645.174464c-1.663674-10.704842-13.110004-20.076252 1.046806-28.058151 14.163042-7.98813 29.703132 10.225056 15.646017 14.069577-14.050884 3.83829-16.692824 13.988574-16.692823 13.988574zM549.912462 557.977981s-25.640526-19.465615-66.846067-2.043765c-41.193079 17.428081-38.295668-55.997913 11.010161-63.643338 49.318291-7.645425 39.492018 36.700535 55.835906 65.687103z m64.453367 77.768994s-14.275199-10.841924-37.211476-1.140271c-22.942507 9.701652-21.334912-31.173646 6.118833-35.435644 27.459976-4.255767 21.989166 20.431418 31.092643 36.575915z m20.306799-74.734501c-3.451969-22.20102-27.167119-41.610555 2.168384-58.153836 29.360428-16.54328 61.555956 21.191599 32.419845 29.154805-29.129881 7.963206-34.588229 28.99903-34.588229 28.999031z"
        fill={getIconColor(color, 3, '#3088FE')}
      />
      <Path
        d="M120.815294 29.004264c-13.184776 15.870333-31.877748 48.695192-20.724275 75.183133 11.153473 26.487941 3.078109 67.649865-2.95972 82.286462-6.03783 14.642828-26.450555 69.039376 9.520953 94.580207 35.971509 25.547062 59.350186-7.539499 78.554099-23.303905 19.210144-15.764406 50.333942-30.968023 63.02647-25.808763 12.70499 5.153029 16.013646 25.883535 15.857871 37.959194-0.155775 12.07566-7.907127 52.3964 6.118833 70.746668 14.019729 18.344036 44.040642 19.802088 74.827966 2.735405s18.393884-48.788656 4.143609-74.491493c-14.244045-25.702836-39.50448-46.776047-45.305533-55.723749-5.813514-8.947703 33.52896-16.169421 57.767514-22.250868 24.251015-6.087678 49.654764-37.292479 27.453745-61.281792-22.194789-23.989314-48.483338-7.215487-55.935603 0.996958-7.458496 8.206215-27.478669 37.124242-52.764029 22.425335s-16.879754-56.938792-43.199457-50.533333c-26.325935 6.405458-22.655882 32.563157-14.511978 57.262803s-9.134632 41.566938-19.309839 47.212216c-10.18767 5.645277-30.625319 12.542984-44.227572-11.994657-13.608483-24.537641 0.990728-49.424218 22.350564-83.445426 21.353605-34.014978 41.429857-82.747555 8.542688-103.727301s-56.04153 5.308804-69.226306 21.172906zM618.353663 344.261234c2.374007-16.262885 12.592832-32.288993 3.919293-55.312503-8.667308-23.02351-40.588673-35.934123-60.241217-32.507078-19.665006 3.420814-24.120165 1.084192-41.01238 10.985236-16.879754 9.901044-25.777608 22.363025-31.971213 45.561003s-2.155923 47.218447 0 56.402927 2.479934 30.438389 19.833243 41.242927c17.353309 10.810769 54.539861 19.964094 81.26458 12.536753 26.724719-7.433572 32.812397-36.239441 32.126987-47.953703-0.666716-11.714262-6.293301-14.686445-3.919293-30.955562z m-39.685179 10.530374c-0.06231 3.813366-2.274312 10.87931-7.73889 13.01654s-14.518208 0-18.487349 0-10.979005-7.527037-13.446478-14.636597c-2.467472-7.103329 0.903494-15.970029 2.467472-19.895553 1.582672-3.931755 4.261998-14.966839 10.979006-17.465467 6.717008-2.492396 12.243897-5.003485 18.487349-4.050144 6.255915 0.947111 11.732955 2.666864 12.935536 12.524291s-4.505006 11.595874-5.258956 16.861061 0.12462 9.832503 0.06231 13.645869zM845.97175 115.801964c-15.490243 1.981455-42.813136 10.511681-50.32148 30.943099-7.495882 20.437649-33.236104 39.068311-44.140337 44.053104s-50.32148 24.581258-43.592011 57.312651c6.741932 32.731394 36.775307 26.48171 55.567975 27.671829 18.780206 1.190119 43.872405 8.841776 48.240329 18.263034 4.380386 9.421258-4.505006 22.612265-10.817 29.217115-6.330686 6.611081-31.44781 24.948886-33.161332 42.352043-1.713522 17.409388 14.175504 33.722121 40.040346 40.171197 25.871073 6.449075 35.392027-17.521546 40.781833-39.118159 5.377345-21.602844 2.274312-46.327415 3.688747-54.27816 1.401973-7.956975 26.917879 8.36822 43.492314 17.521546s46.769816 4.991023 46.863281-19.770933c0.099696-24.755726-23.135668-29.042647-31.497658-28.344777-8.374451 0.697871-34.401299 6.368072-40.819219-14.829757-6.411689-21.204061 20.070021-40.264661 2.180846-50.309018-17.889174-10.050588-29.379121 6.336917-37.628952 24.226091-8.23737 17.889174-26.531558 18.312881-35.086708 16.181883-8.55515-2.13723-23.440987-8.872931-18.306651-29.491279 5.146798-20.618348 26.095389-26.868032 55.493203-34.681694s65.693334-24.437945 58.315841-53.050654c-7.383724-28.606478-33.790662-26.020617-49.293367-24.039161z"
        fill={getIconColor(color, 4, '#6DBBFF')}
      />
    </Svg>
  );
};

IconNoFound.defaultProps = {
  size: 18,
};

IconNoFound = React.memo ? React.memo(IconNoFound) : IconNoFound;

export default IconNoFound;
