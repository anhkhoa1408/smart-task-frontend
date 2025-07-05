import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-loading',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
  template: `
    <div
      class="wrapper w-full h-full absolute inset-0 z-20 flex flex-col items-center justify-center"
    >
      <svg
        class="logo"
        xmlns="http://www.w3.org/2000/svg"
        width="100"
        height="100"
        viewBox="0 0 32 32"
        fill="none"
      >
        <rect opacity="0.01" width="32" height="32" fill="black" />
        <path
          id="logo-path"
          stroke="url(#paint0_linear_11395_124)"
          stroke-width="2"
          stroke-dasharray="1000"
          stroke-dashoffset="1000"
          d="M20.4002 3.10626L26.3202 9.77292C26.5424 10.0175 26.666 10.3358 26.6668 10.6663V25.9996C26.6563 26.8943 26.2907 27.7481 25.6506 28.3732C25.0105 28.9984 24.1482 29.3436 23.2535 29.3329H8.74683C7.85215 29.3436 6.98988 28.9984 6.34974 28.3732C5.7096 27.7481 5.34404 26.8943 5.3335 25.9996V5.99959C5.34404 5.10491 5.7096 4.25106 6.34974 3.62593C6.98988 3.00079 7.85215 2.65558 8.74683 2.66626H19.4135C19.7897 2.66715 20.1481 2.82695 20.4002 3.10626ZM16.0002 15.9996H12.0002C11.2638 15.9996 10.6668 16.5965 10.6668 17.3329C10.6668 18.0693 11.2638 18.6663 12.0002 18.6663H16.0002C16.7365 18.6663 17.3335 18.0693 17.3335 17.3329C17.3335 16.5965 16.7365 15.9996 16.0002 15.9996ZM20.0002 23.9996H12.0002C11.2638 23.9996 10.6668 23.4026 10.6668 22.6663C10.6668 21.9299 11.2638 21.3329 12.0002 21.3329H20.0002C20.7365 21.3329 21.3335 21.9299 21.3335 22.6663C21.3335 23.4026 20.7365 23.9996 20.0002 23.9996ZM18.6668 9.53292C18.6204 10.1057 19.0416 10.6099 19.6135 10.6663H23.6535L18.6668 5.33292V9.53292Z"
        />
        <defs>
          <linearGradient
            id="paint0_linear_11395_124"
            x1="32.5"
            y1="31"
            x2="4"
            y2="5.5"
            gradientUnits="userSpaceOnUse"
          >
            <stop offset="0.159727" stop-color="#0AA7DB" />
            <stop offset="1" stop-color="#AE68E4" />
          </linearGradient>
        </defs>
      </svg>
      <svg class="title">
        <text x="50%" y="50%" dy=".35em" text-anchor="middle">SMART TASK</text>
      </svg>
    </div>
  `,
  styles: [
    `
      @use 'sass:color';

      :host {
        .wrapper {
          background: rgba(255, 255, 255, 0.2);
          backdrop-filter: blur(5px);
          -webkit-backdrop-filter: blur(5px);
        }

        .logo {
          path {
            animation: DrawingLogo 6s infinite alternate;
            stroke-dasharray: 0 145;
            stroke-dashoffset: -145;
          }
        }

        .title {
          font-family: 'Russo One', sans-serif;
          width: 100%;

          text {
            animation: DrawingTitle 10s infinite alternate;
            stroke-width: 2;
            stroke: var(--color-primary);
            stroke-opacity: 1;
            font-size: 3rem;
          }
        }

        @keyframes DrawingLogo {
          0% {
            stroke-dasharray: 0 50%;
            stroke-dashoffset: -145;
          }
          60% {
            stroke-dashoffset: 0;
          }
          80%,
          100% {
            stroke-dasharray: 50% 0;
            stroke-dashoffset: 0;
          }
        }

        @keyframes DrawingTitle {
          0% {
            fill: rgba(72, 138, 204, 0);
            stroke: var(--color-primary);
            stroke-opacity: 0;
            stroke-dashoffset: 25%;
            stroke-dasharray: 0 50%;
            stroke-width: 2;
          }
          70% {
            fill: rgba(72, 138, 204, 0);
            stroke: var(--color-primary);
            stroke-opacity: 1;
          }
          80% {
            fill: rgba(72, 138, 204, 0);
            stroke: var(--color-primary);
            stroke-opacity: 1;
            stroke-width: 3;
          }
          100% {
            fill: var(--color-primary);
            stroke: var(--color-primary);
            stroke-opacity: 1;
            stroke-dashoffset: -25%;
            stroke-dasharray: 50% 0;
            stroke-width: 0;
          }
        }
      }
    `,
  ],
})
export class LoadingComponent {}
