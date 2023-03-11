import { useEditorDisclosure, useNodeMeta } from "@chakra-editor/hooks";
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

const EditorContext = createContext<ProviderContext>({} as any);

const EditorProvider: FC<PropsWithChildren> = ({ children }) => {
  const youtube = useNodeMeta<YoutubeNodeAttibutes>();
  const image = useNodeMeta<ImageNodeAttibutes>();
  const video = useNodeMeta<VideoNodeAttibutes>();
  const drawer = useEditorDisclosure();
  const modal = useEditorDisclosure();

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
    <EditorContext.Provider value={value}>{children}</EditorContext.Provider>
  );
};

const useEditor = () => useContext(EditorContext);

export { EditorProvider, useEditor };
