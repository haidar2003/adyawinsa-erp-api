import { extractObject } from './utils';

export interface EmployeeDTO {
	id: string;
	nama: string;
	telepon: string;
	email: string;
	password: string;
	passwordHash: string;
	nomorIndukKaryawan: string;
	nomorKtp: string;
	sedangAktif: boolean;
	tahunMasuk: Date;
	alamat: string;
	golDarah: string;
	catatan: string;
	employeeApplicationId: string;
	corporateTreeNodeId: string;
	entity: string;
	divison: string;
	department: string;
	section: string;
	group: string;
}

export const extractEmployeeDTO = extractObject<EmployeeDTO>({
	id: true,
	nama: true,
	telepon: true,
	email: true,
	password: true,
	passwordHash: true,
	nomorIndukKaryawan: true,
	nomorKtp: true,
	sedangAktif: true,
	tahunMasuk: true,
	alamat: true,
	golDarah: true,
	catatan: true,
	employeeApplicationId: true,
	corporateTreeNodeId: true,
	entity: true,
	divison: true,
	department: true,
	section: true,
	group: true
});