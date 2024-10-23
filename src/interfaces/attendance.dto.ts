import { extractObject } from './utils';

export interface AttendanceDTO {
	employeeId: string;
	timestamp: Date;
	timestampReceived: Date;
	source: string;
}

export interface GeneralAttendanceDTO {
	attendanceId: string;
	timestamp: Date;
	timestampReceived: Date;
	source: string;
}

export interface EmployeeMachinePinDTO {
	employeeMachinePin: string;
	employeeId: string;
}

export const extractAttendanceDTO = extractObject<AttendanceDTO>({
	employeeId: true,
	timestamp: true,
	timestampReceived: true,
	source: true,
});

export const extractGeneralAttendanceDTO = extractObject<GeneralAttendanceDTO>({
	attendanceId: true,
	timestamp: true,
	timestampReceived: true,
	source: true,
});

export const extractEmployeeMachinePinDTO = extractObject<EmployeeMachinePinDTO>({
	employeeMachinePin: true,
	employeeId: true,
});