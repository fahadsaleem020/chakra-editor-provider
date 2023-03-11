import { ProviderContext } from "@chakra-editor/types";
import React, { PropsWithChildren, FC } from "react";
declare const RetapContext: React.Context<ProviderContext>;
declare const RetapProvider: FC<PropsWithChildren>;
declare const useRetap: () => ProviderContext;
export { RetapContext, RetapProvider, useRetap };
