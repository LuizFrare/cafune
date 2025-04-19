import * as S from './styles';
import Image from 'next/image';
import { BannerProps } from './types';

export const Banner = ({ fallbackSrc, alt, sources }: BannerProps) => {
  return (
    <S.Banner>
      {sources?.map((source, index) => (
        <source key={index} media={source.media} srcSet={source.srcSet} />
      ))}
      <Image
        src={fallbackSrc}
        alt={alt}
        layout="responsive"
        width={1920}
        height={1080}
        priority
      />
    </S.Banner>
  );
};