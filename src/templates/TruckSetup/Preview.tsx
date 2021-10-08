import React from 'react';
import Image from 'next/image';
import { Control, useWatch } from 'react-hook-form';

import Tag from 'components/Tag';
import * as S from './styles';
import { FormData } from './';

const Preview = ({ control }: { control: Control<FormData> }) => {
  const cuisines = useWatch({
    control,
    name: 'cuisines',
    defaultValue: [],
  });
  const truckName = useWatch({
    control,
    name: 'name',
    defaultValue: '',
  });

  return (
    <aside>
      <div className="px-6">
        <S.ProfileImage>
          <Image
            src="https://res.cloudinary.com/danarocha/image/upload/v1633350908/truckeria/truckeria-icon-bck_gtmtri.jpg"
            alt="Truckeria"
            width={100}
            height={100}
            objectFit="fill"
            quality={100}
          />
        </S.ProfileImage>

        <h3 className="mt-4 text-xl font-medium">
          {truckName ? truckName : 'Your food truck name'}
        </h3>
      </div>

      <S.About>
        <div className="px-6 flex space-x-4">
          {cuisines.length > 0 ? (
            cuisines.map((cuisine, i) => <Tag key={i} label={cuisine.value} />)
          ) : (
            <>
              <Tag label="food type" isEmpty />
              <Tag label="food type" isEmpty />
              <Tag label="food type" isEmpty />
            </>
          )}
        </div>
      </S.About>
    </aside>
  );
};

export default Preview;
