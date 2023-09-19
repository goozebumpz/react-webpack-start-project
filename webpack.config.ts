import { buildWebpackConfig } from "./config/build/buildWebpackConfig";
import { BuildEnvI, BuildPaths } from "./config/build/types/config";
import path from "path";

const paths: BuildPaths = {
    entry: path.resolve(__dirname, "src", "index.ts"),
    html: path.resolve(__dirname, path.resolve(__dirname, "public", "index.html")),
    build: path.resolve(__dirname, path.resolve(__dirname, "build"))
}

export default (env: BuildEnvI) => {
    const mode = env.mode || 'development'
    const isDev = mode === 'development'
    const port = env.port || 8000

    return buildWebpackConfig({
        mode,
        paths,
        isDev,
        port
    })
}