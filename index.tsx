import { useRetapDisclosure, useNodeMeta } from "@chakra-editor/hooks";
import {
  YoutubeNodeAttibutes,
  VideoNodeAttibutes,
  ImageNodeAttibutes,
  ProviderContext,
} from "@chakra-editor/types";
import React, {
  PropsWithChildren,
  createContext,
  useContext,
  useMemo,
  FC,
} from "react";

const RetapContext = createContext<ProviderContext>({} as any);

const RetapProvider: FC<PropsWithChildren> = ({ children }) => {
  const youtube = useNodeMeta<YoutubeNodeAttibutes>();
  const image = useNodeMeta<ImageNodeAttibutes>();
  const video = useNodeMeta<VideoNodeAttibutes>();
  const drawer = useRetapDisclosure();
  const modal = useRetapDisclosure();

  const value: ProviderContext = useMemo(
    () => ({
      youtube,
      image,
      video,
      drawer,
      modal
    }),
    [image, youtube, video]
  );

  return (
    <RetapContext.Provider value={value}>{children}</RetapContext.Provider>
  );
};

const useRetap = () => useContext(RetapContext);

export { RetapContext, RetapProvider, useRetap };