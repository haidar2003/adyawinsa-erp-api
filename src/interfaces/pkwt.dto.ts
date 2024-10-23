import { extractObject } from './utils';

export interface PkwtDTO {
	id: string;
	signDate: Date;
	endDate: Date;
	employeeId: string;
	documentPublicUrl: string;
	documentId: string;
	supervisorEmployeeIds: string;
	extensionStatus: string;
}

export const extractPkwtDTO = extractObject<PkwtDTO>({
	id: true,
	signDate: true,
	endDate: true,
	employeeId: true,
	documentPublicUrl: true,
	documentId: true,
	supervisorEmployeeIds: true,
	extensionStatus: true
});