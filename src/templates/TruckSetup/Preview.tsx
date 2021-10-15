import React from 'react';
import Image from 'next/image';
import { Control, useWatch } from 'react-hook-form';

import Tag from 'components/Tag';
import * as S from './styles';
import { FormData } from './';
import Skeleton from 'components/Skeleton';

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
  const description = useWatch({
    control,
    name: 'description',
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

        <h3
          className={`mt-4 text-xl font-medium ${
            truckName ? 'opacity-100' : 'opacity-30'
          }`}
        >
          {truckName ? truckName : 'Food truck name'}
        </h3>
      </div>

      <S.About>
        <div
          className={`px-6 flex space-x-4 ${
            cuisines.length === 0 ? 'opacity-20' : 'opacity-100'
          } `}
        >
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

      <p className={`px-6 mt-4 ${description ? 'opacity-100' : 'opacity-30'}`}>
        {description ? (
          description
        ) : (
          <div>
            <Skeleton height={10} width={350} animationOff />
            <Skeleton height={10} width={180} animationOff />
          </div>
        )}
      </p>
    </aside>
  );
};

export default Preview;
