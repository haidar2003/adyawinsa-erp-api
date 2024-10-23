// eslint-disable-next-line @typescript-eslint/no-var-requires, no-undef
const swaggerAutogen = require('swagger-autogen')();

const outputFile = './swagger_output.json';
const endpointsFiles = [
	'./src/routes/index.ts',
];
const doc = {
	basePath: '/api'
};

swaggerAutogen(outputFile, endpointsFiles, doc);