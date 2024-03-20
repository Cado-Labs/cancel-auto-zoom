import { babel } from "@rollup/plugin-babel"
import { nodeResolve } from "@rollup/plugin-node-resolve"

const shared = {
  input: "cancelAutoZoomInputs.js",
  plugins: [
    nodeResolve({
      moduleDirectories: ["node_modules"],
    }),
    babel({
      babelHelpers: "bundled",
      exclude: "node_modules/**",
    }),
  ],
}

const config = [
  ({ ...shared,
    ...{
      output: {
        ...shared.output,
        file: "dist/cancel-auto-zoom.cjs.js",
        format: "cjs",
      },
    } }),
  ({ ...shared,
    ...{
      output: {
        ...shared.output,
        file: "dist/cancel-auto-zoom.es.js",
        format: "es",
      },
    } }),
  ({ ...shared,
    ...{
      output: {
        ...shared.output,
        file: "dist/cancel-auto-zoom.iife.js",
        format: "iife",
        name: "T",
      },
    }
  }),
]

export default config