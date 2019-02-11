import $ from 'cafy';
import IServerConfig from "./IServerConfig";

export default (config: IServerConfig): void => {

	// verify server config
	const verificationServerConfig = $.obj({
		httpPort: $.num.optional.nullable,
		enableApi: $.bool,
		enableWebApp: $.bool
	});
	if (verificationServerConfig.nok(config)) {
		throw new Error('invalid server config');
	}

};
