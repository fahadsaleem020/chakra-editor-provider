import { useRetapDisclosure, useNodeMeta } from "@retap/hooks";
import {
  YoutubeNodeAttibutes,
  VideoNodeAttibutes,
  ImageNodeAttibutes,
  IRetapContext,
} from "@retap/types";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  FC,
} from "react";

const RetapContext = createContext<IRetapContext>({} as any);

const RetapProvider: FC<PropsWithChildren> = ({ children }) => {
  const youtube = useNodeMeta<YoutubeNodeAttibutes>();
  const image = useNodeMeta<ImageNodeAttibutes>();
  const video = useNodeMeta<VideoNodeAttibutes>();
  const retapDrawer = useRetapDisclosure();
  const retapModal = useRetapDisclosure();

  const value: IRetapContext = useMemo(
    () => ({
      retapDrawer,
      retapModal,
      youtube,
      image,
      video,
    }),
    [image, youtube, video, retapModal, retapDrawer]
  );

  return (
    <RetapContext.Provider value={value}>{children}</RetapContext.Provider>
  );
};

const useRetap = () => useContext(RetapContext);

export { RetapContext, RetapProvider, useRetap };
