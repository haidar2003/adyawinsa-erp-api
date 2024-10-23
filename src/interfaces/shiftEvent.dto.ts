import { extractObject } from './utils';

export interface ShiftEventDTO {
	id: string,
	timeIn: Date,
	timeOut: Date,
	filterIdentifier: string,
}

export const extractShiftEventDTO = extractObject<ShiftEventDTO>({
	id: true,
	timeIn: true,
	timeOut: true,
	filterIdentifier: true
});