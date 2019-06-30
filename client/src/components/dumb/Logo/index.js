import React from 'react';
import posed from 'react-pose';

const SVG = posed.svg({
    off: {
        y: -5,
        transition: {
            duration: 1000,
            ease: "circOut"
        }
    },
    on: {
        y: 5,
        transition: {
            y: { type: 'spring', stiffness: 1000, damping: 15 },
            default: { duration: 300 }
        }
          
    }
});

const Logo = props => {
    return(
        <SVG
            id="logo"
            viewBox="0 0 64 64"
            height="60%"
            pose={props.pose}
        >
            <g>
                <path class="logo-accent" d="M48.581,36.289c-0.741,8.498-7.875,15.16-16.566,15.16c-8.685,0-15.82-6.662-16.56-15.16H3.584   c0.139,1.512,0.63,2.665,2.951,3.143c3.872,0.79,6.592,7.168,4.655,10.309C10,51.677,9.772,53.14,11.553,54.85   c1.748,1.678,3.264,3.186,5.737,1.146c0.699-0.576,1.774-0.692,2.357-0.907c3.031,0.02,7.531,2.772,8.049,4.876   c0.512,2.111,1.321,3.471,3.86,3.367c2.363-0.104,4.241,0.013,4.966-3.127c0.913-3.912,7.085-6.45,10.348-4.488   c2.182,1.314,3.684,1.009,5.361-0.771c1.555-1.658,2.325-2.934,0.849-5.271c-2.221-3.522,0.026-9.195,4.034-10.192   c2.167-0.545,3.023-1.521,3.301-3.195H48.581z"
                    fill={props.logoAccent}/>
                <g>
                <g>
                    <path class="logo-main" d="M62.681,33.099v1.215H1.319v-1.215c0-0.094,0.005-0.188,0.014-0.28c0.141-1.568,1.458-2.795,3.063-2.795     h0.137c0.247-0.592,0.392-1.26,0.476-2.028c0.59-5.382,2.572-10.081,5.824-14.084c0,0,0.005-0.007,0.018-0.022     c0.224-0.254,2.478-2.777,5.741-5.179c0.002-0.002,0.005-0.004,0.009-0.005c0.13-0.096,0.263-0.189,0.395-0.285l0.004,0.005     c0.523,1.388,2.647,8.675,4.057,13.652l0.056,0.17c0.632,1.624,2.676,4.431,6.351,4.643l9.02,0.002l0.054-0.002     c3.674-0.213,5.719-3.019,6.351-4.643l0.056-0.17c1.409-4.977,3.534-12.265,4.057-13.652l0.013-0.016     c0.449,0.319,0.882,0.644,1.294,0.967c1.805,1.413,3.229,2.794,4.061,3.653c0.531,0.547,0.823,0.882,0.823,0.882l-0.038,0.043     c3.147,3.884,5.1,8.441,5.75,13.661c0.117,0.937,0.323,1.727,0.693,2.407h0.009c1.112,0,2.084,0.588,2.624,1.471     C62.515,31.962,62.681,32.512,62.681,33.099z" 
                        fill={props.logoMain}/>
                    <path class="logo-main" d="M22.655,9.551c0.922,3.149,1.828,7.419,2.014,8.069c0.168,0.365,1.047,2.041,2.963,2.178h8.735     c1.917-0.137,2.795-1.814,2.963-2.178c0.186-0.65,1.092-4.92,2.014-8.069c0.435-1.491,0.813-2.764,1.129-3.803     c-0.33-0.149-0.663-0.291-0.999-0.422c-0.37-0.235-0.839-0.41-1.42-0.527c-0.025-0.005-0.052-0.011-0.078-0.016     c-0.24-0.072-0.502-0.134-0.781-0.182c-0.106-0.02-0.213-0.04-0.319-0.058c-1.236-0.327-2.305-0.922-2.328-2.772     c-0.005-0.352-1.021-0.949-1.601-0.989c-0.168-0.013-0.336-0.023-0.505-0.032c-0.051-0.011-0.101-0.016-0.15-0.02     c-1.897-0.125-3.819-0.07-5.715,0.088c-0.579,0.049-1.588,0.662-1.588,1.014c0.004,1.971-1.2,2.536-2.534,2.869     c-0.004,0.002-0.009,0.002-0.013,0.002c-0.02,0.005-0.04,0.007-0.06,0.013c-0.191,0.036-0.374,0.078-0.547,0.126     c-0.002,0-0.004,0.002-0.005,0.002c-0.101,0.022-0.202,0.042-0.303,0.065c-0.668,0.144-1.184,0.363-1.572,0.659h-0.002     C21.81,5.63,21.67,5.696,21.528,5.76C21.844,6.797,22.221,8.066,22.655,9.551z" 
                    fill={props.logoMain}/>
                </g>
                </g>
            </g>
        </SVG>
    )
}

export default Logo;