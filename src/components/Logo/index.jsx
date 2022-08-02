import * as React from 'react';

const Logo = (props) => (
  <svg
    width="1em"
    height="1em"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      d="m104.904 32.848-.12 1.44a13.907 13.907 0 0 0-1.2-.048c-.416 0-.768.008-1.056.024a60.423 60.423 0 0 0-.432 5.736h-1.68c-.096-.416-.144-.968-.144-1.656s.016-1.28.048-1.776c.048-.512.104-1.016.168-1.512.064-.496.096-.784.096-.864A30.443 30.443 0 0 0 99 34.168c-.832 0-1.408.016-1.728.048-1.856 2.496-3.568 4.392-5.136 5.688-1.568 1.28-3.136 1.92-4.704 1.92-.768 0-1.408-.232-1.92-.696-.528-.464-.792-1.08-.792-1.848 0-1.456 1.104-2.784 3.312-3.984 2.224-1.2 5.096-2.008 8.616-2.424.416-.64 1.192-1.624 2.328-2.952 1.136-1.344 2.256-2.512 3.36-3.504.48-1.12.856-1.896 1.128-2.328.288-.448.568-.672.84-.672s.496.104.672.312c.176.208.264.48.264.816 0 .32-.184.8-.552 1.44-.352.624-.72 1.6-1.104 2.928a23.555 23.555 0 0 0-.792 3.72c.832 0 1.536.072 2.112.216Zm-12.24 5.016c1.328-1.264 2.328-2.464 3-3.6-2.688.16-4.768.664-6.24 1.512-1.456.848-2.184 1.752-2.184 2.712 0 .416.136.744.408.984.288.24.664.36 1.128.36 1.248 0 2.544-.656 3.888-1.968Zm8.208-5.232c.112-.544.256-1.224.432-2.04.192-.832.304-1.32.336-1.464-.768.736-1.304 1.28-1.608 1.632-.304.336-.84.992-1.608 1.968.272-.016.6-.024.984-.024.4-.016.728-.032.984-.048s.416-.024.48-.024Zm9.073 5.064.504.408c-.544.848-1.016 1.464-1.416 1.848-.384.368-.816.552-1.296.552-.48 0-.872-.192-1.176-.576-.304-.384-.456-.864-.456-1.44 0-1.12.736-3.528 2.208-7.224 1.472-3.712 2.984-6.976 4.536-9.792l1.056.576a127.825 127.825 0 0 0-4.248 9.072c-1.264 2.992-1.896 5.144-1.896 6.456 0 .752.28 1.128.84 1.128.448 0 .896-.336 1.344-1.008Zm9.492-.528.552.432c-.496.688-1.176 1.264-2.04 1.728-.864.448-1.704.672-2.52.672-.816 0-1.472-.24-1.968-.72s-.744-1.112-.744-1.896c0-1.472.776-2.92 2.328-4.344 1.568-1.424 3.152-2.136 4.752-2.136 1.056 0 1.584.416 1.584 1.248 0 .864-.56 1.736-1.68 2.616-1.104.88-2.664 1.68-4.68 2.4.144.368.368.656.672.864.304.208.616.312.936.312.688 0 1.624-.392 2.808-1.176Zm-4.536-.72c1.296-.448 2.408-1.008 3.336-1.68.928-.672 1.392-1.288 1.392-1.848a.759.759 0 0 0-.24-.552.759.759 0 0 0-.552-.24c-.752 0-1.568.472-2.448 1.416-.864.928-1.36 1.896-1.488 2.904Zm11.444-.456c-.944.848-2.216 2.232-3.816 4.152l-.672-.552c.304-.736 1.608-2.272 3.912-4.608-.608-1.472-.944-2.68-1.008-3.624l1.584-.288c.08.112.392 1.08.936 2.904 2.016-1.44 3.448-2.36 4.296-2.76l.456.648c-.272.224-.752.568-1.44 1.032-1.84 1.248-2.808 1.92-2.904 2.016.864 1.84 1.896 3.424 3.096 4.752l-1.128.72c-1.312-.96-2.416-2.424-3.312-4.392Zm11.072-6.168c-.896 0-1.344-.36-1.344-1.08 0-.4.112-.736.336-1.008.224-.272.512-.408.864-.408s.64.104.864.312c.224.208.336.48.336.816 0 .336-.096.648-.288.936-.192.288-.448.432-.768.432Zm-.312 7.08.48.408a6.079 6.079 0 0 1-1.536 1.896c-.624.512-1.192.768-1.704.768-.896 0-1.344-.624-1.344-1.872 0-1.552.64-3.576 1.92-6.072.288-.544.456-.864.504-.96l1.032.624c-.336.608-.752 1.576-1.248 2.904-.48 1.328-.72 2.184-.72 2.568 0 .368.08.632.24.792.16.16.352.24.576.24.432 0 1.032-.432 1.8-1.296Zm9.686-6.288-.216.936a9.382 9.382 0 0 0-1.056-.048c-1.6 0-2.4.528-2.4 1.584 0 .224.32.88.96 1.968.656 1.088.984 1.816.984 2.184 0 .864-.296 1.544-.888 2.04-.576.48-1.352.72-2.328.72-1.344 0-2.424-.744-3.24-2.232l.912-.648c.224.176.464.392.72.648.256.24.448.408.576.504.304.272.64.408 1.008.408a1.355 1.355 0 0 0 1.368-1.368c0-.4-.352-1.136-1.056-2.208-.688-1.072-1.032-1.824-1.032-2.256 0-.784.328-1.384.984-1.8.672-.416 1.544-.624 2.616-.624 1.088 0 1.784.064 2.088.192ZM97.776 48.68l-3.432-.072c-3.504 0-5.256.768-5.256 2.304 0 .4.144.728.432.984.304.24.752.36 1.344.36.592 0 1.368-.272 2.328-.816l.36.624a5.747 5.747 0 0 1-1.68 1.248c-.624.304-1.248.456-1.872.456-.624 0-1.16-.208-1.608-.624a2.04 2.04 0 0 1-.672-1.56c0-1.264.68-2.368 2.04-3.312 1.376-.944 3.232-1.416 5.568-1.416.192 0 .88.032 2.064.096 1.184.064 2.12.096 2.808.096.688 0 1.32-.104 1.896-.312.224-.064.36-.096.408-.096.224 0 .336.144.336.432 0 .416-.368.792-1.104 1.128-.72.336-1.552.504-2.496.504-1.056 1.024-1.984 2.816-2.784 5.376-.784 2.544-1.728 4.488-2.832 5.832-1.088 1.328-2.384 1.992-3.888 1.992-.592 0-1.152-.192-1.68-.576l.552-.912c.192.096.408.184.648.264l.336.048c.08.016.2.024.36.024.8 0 1.512-.384 2.136-1.152.64-.768 1.304-2.216 1.992-4.344.704-2.144 1.248-3.56 1.632-4.248.4-.704 1.088-1.48 2.064-2.328Zm6.64 6.192c.416.688.624 1.448.624 2.28 0 1.296-.448 2.456-1.344 3.48-.896 1.008-1.952 1.512-3.168 1.512-.928 0-1.656-.264-2.184-.792-.512-.544-.768-1.288-.768-2.232 0-1.52.592-2.88 1.776-4.08 1.184-1.216 2.512-1.824 3.984-1.824.272 0 .464.008.576.024l.072.792c-1.28 0-2.344.368-3.192 1.104-.848.736-1.272 1.68-1.272 2.832 0 .688.168 1.248.504 1.68.336.416.824.624 1.464.624.656 0 1.176-.288 1.56-.864.384-.576.576-1.248.576-2.016 0-.784-.152-1.496-.456-2.136l1.248-.384Zm7.825-1.368c.4 0 .728.136.984.408.256.272.384.624.384 1.056 0 .864-.496 1.776-1.488 2.736l-.576-.456c.224-.496.336-.856.336-1.08 0-.432-.24-.648-.72-.648s-.936.304-1.368.912c-.432.608-.944 1.552-1.536 2.832-.576 1.264-1.016 2.16-1.32 2.688l-1.368-.6c.88-2 1.384-3.176 1.512-3.528.432-1.248.648-2.832.648-4.752l1.344-.36c-.048 1.04-.12 1.848-.216 2.424-.096.56-.328 1.48-.696 2.76 1.616-2.928 2.976-4.392 4.08-4.392Zm6.707-1.68c-.896 0-1.344-.36-1.344-1.08 0-.4.112-.736.336-1.008.224-.272.512-.408.864-.408s.64.104.864.312c.224.208.336.48.336.816 0 .336-.096.648-.288.936-.192.288-.448.432-.768.432Zm-.312 7.08.48.408a6.079 6.079 0 0 1-1.536 1.896c-.624.512-1.192.768-1.704.768-.896 0-1.344-.624-1.344-1.872 0-1.552.64-3.576 1.92-6.072.288-.544.456-.864.504-.96l1.032.624c-.336.608-.752 1.576-1.248 2.904-.48 1.328-.72 2.184-.72 2.568 0 .368.08.632.24.792.16.16.352.24.576.24.432 0 1.032-.432 1.8-1.296Zm6.062-3.504c.768-.784 1.44-1.32 2.016-1.608.592-.304 1.144-.456 1.656-.456.528 0 .96.184 1.296.552.352.352.528.816.528 1.392 0 1.488-.624 3.056-1.872 4.704-1.248 1.632-2.592 2.448-4.032 2.448-.432 0-.84-.08-1.224-.24l.576-1.056c.256.064.456.096.6.096.976 0 1.864-.544 2.664-1.632.8-1.088 1.2-2.16 1.2-3.216 0-.336-.112-.608-.336-.816-.208-.224-.48-.336-.816-.336-.736 0-1.6.592-2.592 1.776-.976 1.184-1.832 2.728-2.568 4.632l-1.464-.6c.48-2.448 1.44-5.432 2.88-8.952 1.44-3.52 2.64-6.008 3.6-7.464l1.224.432c-1.056 1.968-2.184 4.408-3.384 7.32-1.184 2.912-1.88 4.888-2.088 5.928.656-1.152 1.368-2.12 2.136-2.904Zm11.008-3.576c-.896 0-1.344-.36-1.344-1.08 0-.4.112-.736.336-1.008.224-.272.512-.408.864-.408s.64.104.864.312c.224.208.336.48.336.816 0 .336-.096.648-.288.936-.192.288-.448.432-.768.432Zm-.312 7.08.48.408a6.079 6.079 0 0 1-1.536 1.896c-.624.512-1.192.768-1.704.768-.896 0-1.344-.624-1.344-1.872 0-1.552.64-3.576 1.92-6.072.288-.544.456-.864.504-.96l1.032.624c-.336.608-.752 1.576-1.248 2.904-.48 1.328-.72 2.184-.72 2.568 0 .368.08.632.24.792.16.16.352.24.576.24.432 0 1.032-.432 1.8-1.296Zm8.678-4.032c.416.688.624 1.448.624 2.28 0 1.296-.448 2.456-1.344 3.48-.896 1.008-1.952 1.512-3.168 1.512-.928 0-1.656-.264-2.184-.792-.512-.544-.768-1.288-.768-2.232 0-1.52.592-2.88 1.776-4.08 1.184-1.216 2.512-1.824 3.984-1.824.272 0 .464.008.576.024l.072.792c-1.28 0-2.344.368-3.192 1.104-.848.736-1.272 1.68-1.272 2.832 0 .688.168 1.248.504 1.68.336.416.824.624 1.464.624.656 0 1.176-.288 1.56-.864.384-.576.576-1.248.576-2.016 0-.784-.152-1.496-.456-2.136l1.248-.384Z"
      fill="#192A56"
    />
    <g filter="url(#a)">
      <path
        d="M6.018 61.203c2.227 11.053 12.039 25.155 33.469-6.86L66.011 13.76 49.839 58.123c-4.694 11.163-7.699 27.814 17.841 5.119s-18.308-14.133-43.426-7.015c-4.21 1.255-9.936 1.77.854-6.204"
        stroke="#192A56"
        strokeWidth={4}
        strokeMiterlimit={3.999}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
    <defs>
      <filter
        id="a"
        x={0.018}
        y={11.76}
        width={81.392}
        height={72.788}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feColorMatrix
          in="SourceAlpha"
          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
          result="hardAlpha"
        />
        <feOffset dy={4} />
        <feGaussianBlur stdDeviation={2} />
        <feColorMatrix values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0" />
        <feBlend in2="BackgroundImageFix" result="effect1_dropShadow_127_20" />
        <feBlend
          in="SourceGraphic"
          in2="effect1_dropShadow_127_20"
          result="shape"
        />
      </filter>
    </defs>
  </svg>
);

export default Logo;
