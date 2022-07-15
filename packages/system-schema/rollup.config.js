import babel from "@rollup/plugin-babel";
import typescript from "@rollup/plugin-typescript";
import commonjs from "@rollup/plugin-commonjs";
import { nodeResolve } from "@rollup/plugin-node-resolve";
import peerDepsExternal from "rollup-plugin-peer-deps-external";
import buble from "@rollup/plugin-buble";
import size from "rollup-plugin-size";
import replace from "@rollup/plugin-replace";
import image from "@rollup/plugin-image";
import json from "@rollup/plugin-json";

const packageJson = require("./package.json");

const isProd = process.env.NODE_ENV === "production";

const extensions = [".ts"];
const exclusions = [];

export default [
  {
    input: "src/index.ts",
    plugins: [
      peerDepsExternal(),
      typescript({
        tsconfig: "./tsconfig.json",
        outDir: ".",
        sourceMap: false,
        declaration: true,
        declarationDir: ".",
        declarationMap: true,
        outputToFilesystem: true,
        exclude: [...exclusions],
      }),
      json(),
      commonjs(),
      babel({
        extensions: [...extensions],
        babelHelpers: "bundled",
        include: ["src"],
        exclude: [...exclusions],
      }),
      nodeResolve(),
      buble({ transforms: { forOf: false } }),
      size(),
      image(),
      replace({
        "process.env.NODE_ENV": JSON.stringify("production"),
        __buildDate__: () => JSON.stringify(new Date()),
        __buildVersion: 17,
        preventAssignment: true,
      }),
    ],
    output: [
      //unbundled esm
      {
        name: "@molitio/system-schema",
        file: packageJson.module,
        format: "esm",
        exports: "named",
      },
      //bundled esm
      {
        name: "@molitio/system-schema",
        file: packageJson.bundle.esm,
        format: "esm",
        exports: "named",
      },
      //unbundled cjs
      {
        name: "@molitio/system-schema",
        file: packageJson.main,
        format: "cjs",
      },
      //bundled umd
      {
        name: "@molitio/system-schema",
        file: packageJson.bundle.umd,
        format: "umd",
      },
    ],
  },
];
