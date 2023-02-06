import { IRetapContext } from "@retap/types";
import React, { PropsWithChildren, FC } from "react";
declare const RetapContext: React.Context<IRetapContext>;
declare const RetapProvider: FC<PropsWithChildren>;
declare const useRetap: () => IRetapContext;
export { RetapContext, RetapProvider, useRetap };
