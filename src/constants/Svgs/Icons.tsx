import React from "react";

type Props = {
  className: string;
  fill: string;
  stroke: string;
};

export const Gradient: React.FC<Props> = ({
  className,
  fill,
  stroke,
}: Props) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="1396"
      height="1433"
      viewBox="0 0 1396 1433"
      fill={fill}
      stroke={stroke}
      className={className}
    >
      <g opacity="0.31" filter="url(#filter0_f_1_6411)">
        <path
          d="M945.29 979.743C1127.98 778.364 989.357 488.243 700.979 394.501C430.101 306.449 410.413 520.418 377.535 730.262C331.481 1024.2 786.883 1154.35 945.29 979.743Z"
          fill="url(#paint0_radial_1_6411)"
        />
        <path
          d="M945.29 979.743C1127.98 778.364 989.357 488.243 700.979 394.501C430.101 306.449 410.413 520.418 377.535 730.262C331.481 1024.2 786.883 1154.35 945.29 979.743Z"
          fill="url(#paint1_radial_1_6411)"
        />
        <path
          d="M945.29 979.743C1127.98 778.364 989.357 488.243 700.979 394.501C430.101 306.449 410.413 520.418 377.535 730.262C331.481 1024.2 786.883 1154.35 945.29 979.743Z"
          fill="url(#paint2_radial_1_6411)"
        />
        <path
          d="M945.29 979.743C1127.98 778.364 989.357 488.243 700.979 394.501C430.101 306.449 410.413 520.418 377.535 730.262C331.481 1024.2 786.883 1154.35 945.29 979.743Z"
          fill="url(#paint3_radial_1_6411)"
        />
      </g>
      <defs>
        <filter
          id="filter0_f_1_6411"
          x="0.280853"
          y="0.175659"
          width="1401.39"
          height="1432.29"
          filterUnits="userSpaceOnUse"
          color-interpolation-filters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="BackgroundImageFix"
            result="shape"
          />
          <feGaussianBlur
            stdDeviation="187"
            result="effect1_foregroundBlur_1_6411"
          />
        </filter>
        <radialGradient
          id="paint0_radial_1_6411"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(884.311 741.738) rotate(165.233) scale(461.826 433.316)"
        >
          <stop stop-color="#00FFFF" />
          <stop offset="1" stop-color="#00C4FF" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint1_radial_1_6411"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(630.565 589.473) rotate(42.4656) scale(487.696 393.03)"
        >
          <stop stop-color="#FF6666" />
          <stop offset="0.695057" stop-color="#FF00B8" stopOpacity="0.239583" />
          <stop offset="1" stop-color="#0052CD" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint2_radial_1_6411"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(740.074 1078.85) rotate(-86.5233) scale(412.077 388.595)"
        >
          <stop stop-color="#620CE1" />
          <stop offset="1" stop-color="#620CE1" stopOpacity="0" />
        </radialGradient>
        <radialGradient
          id="paint3_radial_1_6411"
          cx="0"
          cy="0"
          r="1"
          gradientUnits="userSpaceOnUse"
          gradientTransform="translate(563.809 213.123) rotate(66.8587) scale(542.218 588.662)"
        >
          <stop stop-color="#FF00E5" />
          <stop offset="0.228083" stop-color="#FF00E5" stopOpacity="0.771917" />
          <stop offset="1" stop-color="white" stopOpacity="0" />
        </radialGradient>
      </defs>
    </svg>
  );
};
