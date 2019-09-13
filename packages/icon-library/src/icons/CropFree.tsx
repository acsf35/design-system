import React, { SVGProps } from 'react'

const SvgCropFree = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="crop-free_svg__a"
        d="M2 3.333V6h1.333V3.333H6V2H3.333C2.6 2 2 2.6 2 3.333zM3.333 10H2v2.667C2 13.4 2.6 14 3.333 14H6v-1.333H3.333V10zm9.334 2.667H10V14h2.667C13.4 14 14 13.4 14 12.667V10h-1.333v2.667zm0-10.667H10v1.333h2.667V6H14V3.333C14 2.6 13.4 2 12.667 2z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="crop-free_svg__b" fill="#fff">
        <use xlinkHref="#crop-free_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#crop-free_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgCropFree
