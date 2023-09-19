import HTMLWebpackPlugin from "html-webpack-plugin";
import webpack from "webpack";
import {BuildOptions} from "./types/config";

function buildPlugins (options: BuildOptions): webpack.WebpackPluginInstance[] {
	return [
		new HTMLWebpackPlugin({template: options.paths.html}),
		new webpack.ProgressPlugin((percentage: number, message: string) => {
			console.info(`Percent: ${Math.floor(percentage * 100)}%;\nStep-${message}`,)
		})
	]
}

export default buildPlugins