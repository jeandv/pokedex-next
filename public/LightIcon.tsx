import * as React from 'react';
import { SVGProps } from 'react';

const LightIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        height={20}
        viewBox='0 0 24 24'
        width={20}
        className='theme-selector-icon'
        {...props}
    >
        <g fill='currentColor'>
            <path d='M19 12a7 7 0 1 1-7-7 7 7 0 0 1 7 7zM12 22.96a.969.969 0 0 1-1-.96v-.08a1 1 0 0 1 2 0 1.038 1.038 0 0 1-1 1.04zm7.14-2.82a1.024 1.024 0 0 1-.71-.29l-.13-.13a1 1 0 0 1 1.41-1.41l.13.13a1 1 0 0 1 0 1.41.984.984 0 0 1-.7.29zm-14.28 0a1.024 1.024 0 0 1-.71-.29 1 1 0 0 1 0-1.41l.13-.13a1 1 0 0 1 1.41 1.41l-.13.13a1 1 0 0 1-.7.29zM22 13h-.08a1 1 0 0 1 0-2 1.038 1.038 0 0 1 1.04 1 .969.969 0 0 1-.96 1zM2.08 13H2a1 1 0 0 1 0-2 1.038 1.038 0 0 1 1.04 1 .969.969 0 0 1-.96 1zm16.93-7.01a1.024 1.024 0 0 1-.71-.29 1 1 0 0 1 0-1.41l.13-.13a1 1 0 0 1 1.41 1.41l-.13.13a.984.984 0 0 1-.7.29zm-14.02 0a1.024 1.024 0 0 1-.71-.29l-.13-.14a1 1 0 0 1 1.41-1.41l.13.13a1 1 0 0 1 0 1.41.97.97 0 0 1-.7.3zM12 3.04a.969.969 0 0 1-1-.96V2a1 1 0 0 1 2 0 1.038 1.038 0 0 1-1 1.04z' />
        </g>
    </svg>
)

export default LightIcon;