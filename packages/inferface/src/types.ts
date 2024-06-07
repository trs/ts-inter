import { CompilerOptions } from "typescript";

export interface InferfaceOptions {
  include: string[];
  outFile?: string;
  outDir?: string;
}

export type InferfaceCompilerOptions =
  & { inferface: InferfaceOptions }
  & CompilerOptions;

export interface InferfaceExport {
  fileName: string;
  exports: string[];
}
