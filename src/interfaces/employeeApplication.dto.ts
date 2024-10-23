import { extractObject } from './utils';

export interface EmployeeApplicationDTO {
	id: string;
	name: string;
	email: string;
	NIK: string;
	telepon: string;
	alamat: string;
	pendidikanTerakhir: string;
	tempatTanggalLahir: string;
	password: string;
	passwordHash: string;
	source: string;
	applyDate: Date;
	applicationStatus: string;
	rejectByDate: Date;
}

export const extractEmployeeApplicationDTO = extractObject<EmployeeApplicationDTO>({
	id: true,
	name: true,
	email: true,
	NIK: true,
	telepon: true,
	alamat: true,
	pendidikanTerakhir: true,
	tempatTanggalLahir: true,
	password: true,
	passwordHash: true,
	source: true,
	applyDate: true,
	applicationStatus: true,
	rejectByDate: true,
});

export interface OpenPositionDTO {
	id: string;
	entity: string;
	positionName: string;
	lokasiPenempatan: string;
	description: string;
	creationDateTime: Date;
	isActive: boolean;
}

export const extractOpenPositionDTO = extractObject<OpenPositionDTO>({
	id: true,
	entity: true,
	positionName: true,
	lokasiPenempatan: true,
	description: true,
	creationDateTime: true,
	isActive: true
});