export type Source = {
  media: string;
  srcSet: string;
};


export type BannerProps = {
  fallbackSrc: string;
  alt: string;
  sources: Source[];
};
