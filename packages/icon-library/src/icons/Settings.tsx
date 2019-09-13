import React, { SVGProps } from 'react'

const SvgSettings = (props: SVGProps<SVGSVGElement>) => (
  <svg width={16} height={16} {...props}>
    <defs>
      <path
        id="settings_svg__a"
        d="M12.953 8.653C12.98 8.44 13 8.227 13 8c0-.227-.02-.44-.047-.653l1.407-1.1c.127-.1.16-.28.08-.427l-1.333-2.307a.335.335 0 00-.407-.146l-1.66.666a4.87 4.87 0 00-1.127-.653L9.66 1.613a.325.325 0 00-.327-.28H6.667a.325.325 0 00-.327.28L6.087 3.38c-.407.167-.78.393-1.127.653L3.3 3.367a.325.325 0 00-.407.146L1.56 5.82a.329.329 0 00.08.427l1.407 1.1A5.287 5.287 0 003 8c0 .22.02.44.047.653l-1.407 1.1c-.127.1-.16.28-.08.427l1.333 2.307c.08.146.26.2.407.146l1.66-.666c.347.266.72.486 1.127.653l.253 1.767c.02.16.16.28.327.28h2.666c.167 0 .307-.12.327-.28l.253-1.767c.407-.167.78-.393 1.127-.653l1.66.666c.153.06.327 0 .407-.146l1.333-2.307a.336.336 0 00-.08-.427l-1.407-1.1zM8 10.333A2.336 2.336 0 015.667 8 2.336 2.336 0 018 5.667 2.336 2.336 0 0110.333 8 2.336 2.336 0 018 10.333z"
      />
    </defs>
    <g fill="none" fillRule="evenodd">
      <mask id="settings_svg__b" fill="#fff">
        <use xlinkHref="#settings_svg__a" />
      </mask>
      <g fill="CurrentColor" mask="url(#settings_svg__b)">
        <path d="M0 0h16v16H0z" />
      </g>
    </g>
  </svg>
)

export default SvgSettings
