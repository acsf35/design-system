import React, { SVGProps } from 'react'

const SvgOndemandVideo = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="ondemand-video_svg__a"
        d="M14 2H2C1.26 2 .667 2.593.667 3.333v8c0 .734.593 1.334 1.333 1.334h3.333V14h5.334v-1.333H14c.733 0 1.327-.6 1.327-1.334l.006-8c0-.74-.6-1.333-1.333-1.333zm0 9.333H2v-8h12v8zm-3.333-4L6 10V4.667l4.667 2.666z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="ondemand-video_svg__b" fill="#fff">
        <use xlinkHref="#ondemand-video_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#ondemand-video_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgOndemandVideo
