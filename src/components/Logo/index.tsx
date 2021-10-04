import * as React from 'react';

import * as S from './styles';

export type LogoProps = {
  symbolOnly?: boolean;
  size?: 'md' | 'lg';
  className?: string;
};

const Logo = ({ symbolOnly = false, size, className, ...props }: LogoProps) => (
  <>
    {!symbolOnly ? (
      <S.Container size={size} className={className} {...props}>
        <svg
          width="171"
          height="82"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
          aria-label="Truckeria"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M101.37 26.365c.249-.297.607-.723 1.163-1.397 1.837-2.228 3.484-5.01 4.087-6.484 1.551-3.092 1.158-9.845-5.485-11.126-2.282-.264-7.072.607-7.982 6.197-.618 3.797 2.52 8.412 4.881 11.51.72.945 1.099 1.307 1.534 1.724.239.229.494.473.833.84.397-.584.451-.648.969-1.264Zm-4.536-14.772a.705.705 0 0 1 .99.125 69.464 69.464 0 0 1 2.554 3.548c1.071-1.416 1.992-2.716 2.419-3.52a.705.705 0 0 1 1.245.66c-.528.994-1.654 2.553-2.844 4.11.874 1.37 1.68 2.777 2.151 3.926a.705.705 0 0 1-1.305.534c-.384-.939-1.03-2.096-1.764-3.274-.976 1.246-1.936 2.435-2.626 3.288l-.168.208a.705.705 0 0 1-1.096-.886l.166-.206c.763-.943 1.847-2.285 2.916-3.66a68.492 68.492 0 0 0-2.763-3.864.704.704 0 0 1 .125-.989ZM7.268 29.232c-.137-1.374 1.355-3.883 2.887-4.854.961-.61 2.373-.806 4.356-.608.715.072 4.526.837 8.469 1.7 3.943.863 8.138 1.726 9.323 1.917l2.153.348.858-1.076c1.784-2.235 4.18-4.155 6.29-5.039 1.385-.58 4.034-.82 5.639-.512 1.43.275 2.715 1.093 3.113 1.978.852 1.9-.437 4.405-3.103 6.035-2.447 1.496-5.11 2.28-8.68 2.554l-2.216.17-.648 1.568c-3.504 8.472-6.59 24.726-5.973 31.467l.18 1.976-.521.436c-.683.57-2.514.792-3.56.433-2.07-.71-2.842-2.688-2.514-6.43.765-8.723 4.349-21.176 8.277-28.758.341-.659.578-1.232.525-1.275-.14-.113-5.4-.912-8.066-1.226-6.069-.712-10.21-.593-13.81.397-1.104.303-2.067.523-2.14.488-.276-.133-.786-1.16-.839-1.69Zm37.5-2.154c2.49-1.085 3-2.461 1.099-2.968-.282-.075-1.11-.107-1.842-.072-1.476.072-2.22.334-3.259 1.152-.68.535-2.295 2.45-2.27 2.693.05.495 4.638-.094 6.271-.805Z"
            fill="currentColor"
          />
          <path
            d="M133.224 20.82c-.333.169-.761.494-.952.722-.512.613-.754 1.77-.521 2.498.26.812 1.523 1.795 2.374 1.848 1.778.11 3.144-1.266 2.934-2.955-.23-1.855-2.205-2.944-3.835-2.114ZM85.747 27.659c.19-.722.285-.838.873-1.056.98-.364 3.197-.519 3.928-.275 1.349.45 1.823 2.032 1.31 4.363-.244 1.101-1.45 5.567-2.43 8.989-.402 1.407-.455 1.776-.252 1.75.762-1.202 7.384-9.085 8.606-8.242.512.353.6.51.689 1.222.274 2.209-1.638 4.92-4.284 6.076l-.668.292.55.2c.943.342 1.334.9 1.446 2.058a7.834 7.834 0 0 1-.18 2.294c.14 6.335 5.814 9.238 7.965 9.217 2.168-.02 1.763 2.984-4.748 2.189-4.368-.534-7.206-4.888-8.052-7.86-.36-.807-.378-1.86-.056-3.166.262-1.065.212-1.602-.188-2.043-.356-.393-1.196-.354-1.677.079-.405.362-1.295 3.548-1.202 4.298.013.103.021.2.03.29.154 1.766 1.109 3.806-2.936 3.172-.836-.13-1.6-.755-1.81-1.48-.098-.336-.21-.606-.25-.601-.04.005-.288.219-.552.475-.67.653-2.3 1.642-3.526 2.141-.763.31-1.665.5-3.426.719-2.238.278-2.452.277-3.364-.02-1.19-.386-2.24-1.174-2.796-2.1l-.418-.694-.736 1.008c-1.447 1.98-3.342 3.206-5.325 3.444-1.673.2-2.812-.239-3.377-1.302l-.235-.442-.58.585c-2.269 2.292-6.078 3.01-7.37 1.389-.22-.277-.417-.633-.437-.79-.02-.159-.07-.283-.112-.278-.042.005-.605.47-1.252 1.034-1.41 1.228-2.499 1.759-3.976 1.94-.816.101-1.3.064-1.872-.144-1.098-.398-1.51-.9-1.736-2.12-.22-1.183-.1-1.833 1.179-6.398.46-1.642.6-4.608.552-4.645-.048-.038-.278.033-.512.155-.233.123-4.232 1.302-4.667 1.356-1.417.174-1.808-.24-1.577-1.992-.166-1.34 5.531-1.943 8.761-2.285.468-.05.884-.094 1.223-.134 1.16-.137 2.288-.046 2.298.035.018.14-1.855 9.586-2.24 10.8-.232.732-.187 1.044.197 1.373.649.558 2.17-.088 3.15-1.337.605-.773 1.037-2.033 2.272-6.624.605-2.25.796-3.232.685-3.519-.154-.395-.718-.638-1.494-.642l-.384-.002.349-.957c.407-1.117.544-1.195 2.583-1.47 2.625-.352 3.624.271 3.727 2.328.057 1.137-.134 1.998-1.684 7.6-.703 2.539-.78 3.317-.364 3.64.56.435 2.281-.285 2.99-1.25.184-.25.68-1.715 1.104-3.257.423-1.542 1.205-4.375 1.737-6.295l.967-3.492 2.439-.3c1.341-.165 2.443-.262 2.449-.217.006.046-.455 1.733-1.025 3.749l-.536 1.896c-1.931 6.835-2.135 7.557-1.867 7.847.031.034.07.063.112.094.031.023.065.048.1.078.785.675 2.757-.408 3.578-1.964.197-.375.4-1.177.45-1.785.308-3.655 2.74-8.095 5.46-9.964 1.5-1.03 2.574-1.457 4.165-1.652 1.536-.19 2.1-.1 2.86.45 2.004 1.448 1.946 5.205-.126 8.159-.393.86-4.126-.477-3.013-2.386.198-.572.545-1.045.873-1.492.566-.771 1.075-1.466.67-2.461-.224-.551-.68-.507-.68-.507-.717.096-1.624.82-2.49 1.988-1.078 1.452-1.692 2.805-2.323 5.114-.459 1.68-.477 1.89-.295 3.379.165 1.344.256 1.651.592 2.009 1.992 2.117 7.214.28 9.236-3.247.408-.712.55-1.206 3.805-13.195.975-3.592.921-4.062-.473-4.123-.37-.017-.656-.081-.636-.144.02-.063.132-.48.249-.925Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m100.205 46.293.273.443c.541.88 1.553 1.66 2.675 2.062 2.786.999 6.785-.338 9.157-1.83 1.271-.799 2.87-2.572 3.192-3.538.195-.585.186-.632-.207-1.12l-.411-.51-.924 1.18c-1.331 1.697-3.102 2.812-5.003 3.147-1.599.282-2.554.128-3.386-.547-.628-.509-1.098-1.625-1.088-2.585l.007-.7 2.048-.352c2.998-.515 4.082-1.04 5.41-2.622.96-1.144 1.44-2.093 1.702-3.367.474-2.299-.397-4.233-2.152-4.78-.88-.273-3.118-.042-4.343.45-3.823 1.533-6.768 5.784-7.48 10.792-.024 1.113.083 2.639.53 3.877Zm7.925-7.047c1.122-1.317 2.076-4.756 1.634-5.893-.133-.342-.264-.419-.635-.373-.986.121-2.506 2.473-3.707 5.737-.646 1.757-.568 1.877.995 1.514.966-.225 1.161-.337 1.713-.985ZM116.55 33.606c-.15-.106-.267-.189-.442-.19-3.631-3.046 10.065-3.793 10.189-2.791.027.22-.441 1.965-2.016 7.516-.601 2.118-1.08 3.953-1.064 4.077.04.329.752.654 1.287.589.698-.086 1.902-.97 2.456-1.8.505-.76.684-1.31 2.044-6.295.763-2.794.855-3.434.55-3.786-.229-.264-.875-.458-1.336-.401l-.425.052.368-1.022c.426-1.18.571-1.261 2.731-1.521 2.358-.284 3.322.297 3.55 2.138.139 1.115-.008 1.855-1.336 6.713-1.042 3.813-1.136 4.43-.722 4.752.341.265 1.298.079 2.036-.397.782-.502 1.939-2.075 1.994-2.709.076-.887.485-2.527.969-3.888 1.746-4.907 4.638-7.746 8.585-8.431 1.482-.257 1.547-.253 2.418.148.856.393.898.397.942.07.043-.322.178-.357 2.499-.642 1.35-.166 2.459-.26 2.466-.21.006.05-.772 2.893-1.73 6.315-.958 3.423-1.764 6.406-1.792 6.63-.069.558.472.994 1.133.912.851-.104 2.098-1.044 2.661-2.006.278-.474.562-.874.63-.887.069-.014.274.206.455.49.313.487.315.555.05 1.284-.438 1.202-1.919 2.926-3.276 3.814-.986.646-1.396.812-2.488 1.011-1.941.353-3.193-.043-3.808-1.204l-.227-.43-1.165.979c-1.484 1.248-2.536 1.706-4.13 1.8-.947.055-1.369-.007-1.922-.28-.731-.362-1.557-1.304-1.857-2.117l-.171-.464-.676.883c-1.395 1.823-3.26 2.985-5.167 3.22-.634.078-1.405.072-1.714-.014-.683-.19-1.762-1.114-1.817-1.556-.053-.429-.088-.414-.912.393-.391.383-1.161.98-1.712 1.325-1.924 1.208-4.662 1.322-5.589.233-.531-.623-.811-1.6-.75-2.615.044-.728.911-3.942 2.362-8.98.185-.642.181-.664-.091-.513-2.942.58-3.621.1-4.04-.195Zm31.915-5.07c-.031-.028-.069-.05-.112-.075-.51-.294-1.88-.073-2.643.427-1.765 1.157-4.086 6.078-4.544 9.634-.17 1.318-.077 1.866.418 2.475.433.531 1.698.313 2.848-.491 1.013-.709 1.399-1.185 1.561-1.925.061-.283.458-1.756.882-3.274l.005-.016c1.636-5.857 1.823-6.527 1.585-6.754Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m74.927 23.387 2.267-.325c1.301-.186 2.684.639 2.901 2.159.22 1.537-.568 3.488-3.319 3.882l-2.303.33.454-6.046Zm.883 4.733 1.037-.148c1.416-.203 2.126-1.318 1.959-2.486-.122-.852-.822-1.416-1.692-1.291l-1.02.146-.284 3.78Z"
            fill="#FF8D4D"
          />
          <path
            d="m70.254 30.036 1.204-.172.454-6.046-1.249.179-.313 4.143-2.403-3.754-1.283.183-.453 6.046 1.248-.179.32-4.287 2.475 3.887ZM63.188 31.047l-1.248.18.453-6.046 1.248-.179-.453 6.046ZM56.307 32.032l-1.248.179.454-6.046 4.148-.593-.092 1.107-2.892.414-.09 1.313 2.83-.405-.084 1.105-2.839.407-.187 2.52Z"
            fill="#FF8D4D"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="m141.809 51.646 2.268-.325c1.301-.186 2.683.639 2.901 2.159.22 1.537-.568 3.488-3.319 3.882l-2.303.33.453-6.046Zm.884 4.733 1.037-.148c1.415-.203 2.126-1.318 1.958-2.486-.122-.852-.821-1.416-1.691-1.291l-1.02.146-.284 3.78ZM132.696 56.357c.231 1.608 1.633 2.448 3.259 2.215 1.934-.277 3.183-2.016 2.909-3.931-.229-1.6-1.632-2.439-3.249-2.207-1.934.277-3.193 2.008-2.919 3.923Zm4.88-1.442c.179 1.256-.584 2.379-1.709 2.54-.94.134-1.739-.37-1.881-1.363-.18-1.256.574-2.377 1.708-2.54.941-.134 1.741.379 1.882 1.363ZM127.375 59.8c-1.626.233-3.028-.607-3.259-2.215-.274-1.915.985-3.647 2.919-3.923 1.617-.232 3.02.608 3.249 2.207.274 1.915-.975 3.654-2.909 3.93Zm-.088-1.117c1.125-.161 1.888-1.284 1.709-2.54-.141-.984-.941-1.498-1.882-1.363-1.133.162-1.888 1.284-1.708 2.54.142.993.941 1.497 1.881 1.363Z"
            fill="#FF8D4D"
          />
          <path
            d="m118.564 60.953-1.248.179.453-6.046 4.149-.593-.093 1.107-2.892.414-.09 1.313 2.83-.405-.084 1.106-2.839.406-.186 2.52Z"
            fill="#FF8D4D"
          />
          <path
            d="M48.693 68.091a.354.354 0 0 1 .308-.394l7.026-.869a.354.354 0 0 1 .087.702l-7.026.87a.354.354 0 0 1-.395-.309ZM62.042 66.44a.354.354 0 0 1 .308-.394l7.728-.956a.354.354 0 1 1 .087.703l-7.729.955a.354.354 0 0 1-.394-.307ZM75.698 64.395a.354.354 0 1 0 .087.703l7.026-.87a.354.354 0 1 0-.087-.702l-7.026.87Z"
            fill="currentColor"
          />
        </svg>
      </S.Container>
    ) : (
      <S.Container
        size={size}
        className={`${symbolOnly && 'sm:block'} ${className}`}
      >
        <svg
          width="58"
          height="58"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          role="img"
        >
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M29 56.052c14.94 0 27.052-12.111 27.052-27.052C56.052 14.06 43.941 1.948 29 1.948 14.06 1.948 1.948 14.059 1.948 29c0 14.94 12.111 27.052 27.052 27.052ZM29 58c16.016 0 29-12.984 29-29S45.016 0 29 0 0 12.984 0 29s12.984 29 29 29Z"
            fill="currentColor"
          />
          <path
            fillRule="evenodd"
            clipRule="evenodd"
            d="M32.325 36.647c-.9.955-1.478 1.557-1.881 1.978-.837.873-.925.964-1.574 1.794a26.504 26.504 0 0 0-1.238-1.274c-.649-.635-1.212-1.185-2.27-2.609-3.467-4.666-8.047-11.593-6.866-17.114 1.739-8.126 9.2-9.13 12.713-8.617 10.2 2.248 10.405 12.149 7.823 16.585-1.02 2.122-3.733 6.1-6.707 9.257ZM25.832 16.92a1.08 1.08 0 0 0-1.49-.242c-.48.337-.591.992-.248 1.464.969 1.33 2.494 3.544 3.96 5.91-1.698 1.985-3.419 3.92-4.629 5.28l-.264.297c-.388.437-.343 1.1.102 1.481.444.381 1.12.337 1.507-.1l.266-.299a399.643 399.643 0 0 0 4.17-4.745c1.043 1.796 1.954 3.555 2.482 4.974.202.544.815.824 1.37.626.554-.2.839-.802.636-1.346-.645-1.736-1.785-3.876-3.029-5.966 1.893-2.25 3.69-4.505 4.548-5.955a1.04 1.04 0 0 0-.387-1.434 1.079 1.079 0 0 0-1.46.38c-.694 1.172-2.165 3.055-3.87 5.101a103.37 103.37 0 0 0-3.664-5.426ZM42.932 41.334a.68.68 0 0 1 .017.958c-.465.485-.935.941-1.41 1.368a.67.67 0 0 1-.95-.053.68.68 0 0 1 .053-.957c.449-.404.895-.837 1.338-1.299a.67.67 0 0 1 .952-.017Zm-27.872.008a.67.67 0 0 1 .952 0c.439.442.892.865 1.358 1.267a.68.68 0 0 1 .074.955.67.67 0 0 1-.95.074 25.371 25.371 0 0 1-1.434-1.337.68.68 0 0 1 0-.959Zm4.378 3.676a.67.67 0 0 1 .924-.232 19.191 19.191 0 0 0 3.313 1.6c.35.127.53.516.402.868a.672.672 0 0 1-.863.405 20.527 20.527 0 0 1-3.545-1.71.68.68 0 0 1-.23-.93Zm19.19.08a.68.68 0 0 1-.218.934 18.612 18.612 0 0 1-3.548 1.734.672.672 0 0 1-.86-.41.679.679 0 0 1 .406-.866c1.1-.396 2.2-.928 3.292-1.61a.67.67 0 0 1 .927.219Zm-12.161 2.753a.674.674 0 0 1 .755-.584c1.198.159 2.415.18 3.64.047a.677.677 0 0 1 .144 1.347c-1.335.145-2.66.122-3.96-.05a.677.677 0 0 1-.58-.76Z"
            fill="#FF8D4D"
          />
        </svg>
      </S.Container>
    )}
  </>
);

export default Logo;
