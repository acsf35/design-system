import React, { SVGProps } from 'react'

const SvgLabel = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="label_svg__a"
        d="M11.753 3.893a1.33 1.33 0 00-1.086-.56l-7.334.007C2.6 3.34 2 3.933 2 4.667v6.666c0 .734.6 1.327 1.333 1.327l7.334.007c.446 0 .846-.22 1.086-.56L14.667 8l-2.914-4.107z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="label_svg__b" fill="#fff">
        <use xlinkHref="#label_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#label_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgLabel
