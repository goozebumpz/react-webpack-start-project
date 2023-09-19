import { BuildOptions } from "./types/config";
import { type Configuration as DevServerConfiguration } from 'webpack-dev-server'

function buildDevServer(options: BuildOptions): DevServerConfiguration {
	return {
		port: options.port,
		open: true
	}
}

export default buildDevServer