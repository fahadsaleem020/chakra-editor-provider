import { ProviderContext } from "@chakra-editor/types";
import { PropsWithChildren, FC } from "react";
declare const EditorProvider: FC<PropsWithChildren>;
declare const useEditor: () => ProviderContext;
export { EditorProvider, useEditor };
