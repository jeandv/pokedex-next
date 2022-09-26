import * as React from 'react';
import { SVGProps } from 'react';

const DarkIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        height={20}
        viewBox='0 0 24 24'
        width={20}
        className='theme-selector-icon'
        {...props}
    >
        <path
            d='M21.53 15.93c-.16-.27-.61-.69-1.73-.49a8.46 8.46 0 0 1-1.88.13 8.409 8.409 0 0 1-5.91-2.82 8.068 8.068 0 0 1-1.44-8.66c.44-1.01.13-1.54-.09-1.76s-.77-.55-1.83-.11a10.318 10.318 0 0 0-6.32 10.21 10.475 10.475 0 0 0 7.04 8.99 10 10 0 0 0 2.89.55c.16.01.32.02.48.02a10.5 10.5 0 0 0 8.47-4.27c.67-.93.49-1.519.32-1.79z'
            fill='currentColor'
        />
    </svg>
)

export default DarkIcon;