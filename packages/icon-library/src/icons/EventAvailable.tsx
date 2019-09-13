import React, { SVGProps } from 'react'

const SvgEventAvailable = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="event-available_svg__a"
        d="M11.02 7.373l-.707-.706L7.06 9.92 5.647 8.507l-.707.706 2.12 2.12 3.96-3.96zM12.667 2H12V.667h-1.333V2H5.333V.667H4V2h-.667c-.74 0-1.326.6-1.326 1.333L2 12.667C2 13.4 2.593 14 3.333 14h9.334C13.4 14 14 13.4 14 12.667V3.333C14 2.6 13.4 2 12.667 2zm0 10.667H3.333V5.333h9.334v7.334z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="event-available_svg__b" fill="#fff">
        <use xlinkHref="#event-available_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#event-available_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgEventAvailable
