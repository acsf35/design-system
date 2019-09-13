import React, { SVGProps } from 'react'

const SvgFileDownload = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="file-download_svg__a"
        d="M12.667 6H10V2H6v4H3.333L8 10.667 12.667 6zm-9.334 6v1.333h9.334V12H3.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="file-download_svg__b" fill="#fff">
        <use xlinkHref="#file-download_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#file-download_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgFileDownload
