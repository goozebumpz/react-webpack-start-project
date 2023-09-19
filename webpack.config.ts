import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildPaths } from "./config/build/types/config";
import path from "path";

const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.ts"),
    html: path.resolve(__dirname, path.resolve(__dirname, "public", "index.html")),
    build: path.resolve(__dirname, path.resolve(__dirname, "build"))
}

const mode = 'development'
const isDev = mode === 'development'

const config = buildWebpackConfig({
    mode,
    paths,
    isDev
})

export default config