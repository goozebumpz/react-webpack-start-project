import webpack from "webpack";

import buildLoaders from "./buildLoaders";
import buildResolvers from "./buildResolvers";
import buildPlugins from "./buildPlugins";

import { BuildOptions } from "./types/config";
import buildDevServer from "./buildDevServer";


export function buildWebpackConfig(options: BuildOptions): webpack.Configuration {
	const {mode, paths: {entry, build, html}} = options

	return {
		mode: mode,
		entry: entry,
		output: {
			filename: `bundle-[contenthash]-${mode}.js`,
			path: build,
			clean: true
		},
		module: {
			rules: buildLoaders()
		},
		resolve: buildResolvers(),
		plugins: buildPlugins(options),
		devtool: options.isDev ? 'inline-source-map' : undefined,
		devServer:options.isDev ?  buildDevServer(options) : undefined
	}
}