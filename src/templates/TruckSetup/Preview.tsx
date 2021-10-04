import React from 'react';
import Image from 'next/image';

import { ProfileImage } from './styles';

const Preview: React.FC = () => {
  return (
    <ProfileImage>
      <Image
        src="https://res.cloudinary.com/danarocha/image/upload/v1633350908/truckeria/truckeria-icon-bck_gtmtri.jpg"
        alt="Truckeria"
        width={100}
        height={100}
        objectFit="fill"
        quality={100}
      ></Image>
    </ProfileImage>
  );
};

export default Preview;
