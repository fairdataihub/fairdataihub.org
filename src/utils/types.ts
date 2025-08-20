// utils/types.ts

export interface ImageProps {
  id: number;
  width: number;
  height: number;
  uuid: string;
  description?: string;
  date?: string;
  blurDataUrl?: string;
}

export interface SharedModalProps {
  index: number;
  images?: ImageProps[];
  currentPhoto?: ImageProps;
  changePhotoId: (newVal: number) => void;
  closeModal: () => void;
  navigation: boolean;
  direction?: number;
}
