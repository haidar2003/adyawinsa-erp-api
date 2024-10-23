import { RequestStatus } from '../../prisma/child-db/generated';

import { extractObject } from './utils';

export interface SplDTO {
	id: string;
	requestCreator: string;
	fromDate: Date;
	toDate: Date;
	karyawanList: string;
	supervisorEmployeeIds: string;
	currentPercentApproved: number;
	description: string;
	status: RequestStatus;
}

export const extractSplDTO = extractObject<SplDTO>({
	id: true,
	requestCreator: true,
	fromDate: true,
	toDate: true,
	karyawanList: true,
	supervisorEmployeeIds: true,
	currentPercentApproved: true,
	description: true,
	status: true
});