import webpack from "webpack";
import path from "path";

import buildLoaders from "./buildLoaders";
import buildResolvers from "./buildResolvers";
import buildPlugins from "./buildPlugins";

import { BuildOptions } from "./types/config";


export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
	const {mode, paths: {entry, build, html}} = options
	return {
		mode: mode,
		entry: entry,
		output: {
			filename: "bundle-[contenthash].js",
			path: build,
			clean: true
		},
		module: {
			rules: buildLoaders()
		},
		resolve: buildResolvers(),
		plugins: buildPlugins(options)
	}
}