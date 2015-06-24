var booklib_local = process.env.MONGOLAB_URI || "mongodb://localhost:27017/booklib_local";
var booklib_staging = process.env.MONGOLAB_URI || "mongodb://localhost:27017/booklib_staging";
var booklib_prod =  process.env.MONGOLAB_URI || "mongodb://localhost:27017/booklib_prod";

var config = {
	local: {
		mode: 'local',
		port: 3000,
		mongoURL: booklib_local
	},
	staging: {
		mode: 'staging',
		port: 3005,
		mongoURL: booklib_staging
	},
	prod: {
		mode: 'prod',
		port: process.env.PORT || 3010,
		mongoURL: booklib_prod
	},
}

module.exports = function(mode){
	return config[mode || process.argv[2] || 'local'] || config.local;
}