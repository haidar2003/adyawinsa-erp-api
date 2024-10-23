export function extractObject<T>(properties: Record<keyof T, true>) {
	/* 
		Returns a function that extract a new object containing only the 
		specified properties from the input object, preserving their types
		and omitting any other properties
	*/
	return function <TActual extends T>(value: TActual) {
		const result = {} as T;
		for (const property of Object.keys(properties) as Array<keyof T>) {
			result[property] = value[property];
		}
		return result;
	};
}