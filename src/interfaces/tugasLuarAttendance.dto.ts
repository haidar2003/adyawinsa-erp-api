import { extractObject } from './utils';

export interface TugasLuarAttendanceDTO {
	id: string;
	employeeId: string;
	timestamp: Date;
	timestampReceived: Date;
	documentId: string;
	geolocation: string;
	documentPublicUrl: string;
}

export const extractTugasLuarAttendanceDTO = extractObject<TugasLuarAttendanceDTO>({
	id: true,
	employeeId: true,
	timestamp: true,
	timestampReceived: true,
	documentId: true,
	geolocation: true,
	documentPublicUrl: true
});