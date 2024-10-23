import { ApprovalType, IzinType, RequestStatus } from '../../prisma/child-db/generated';

import { extractObject } from './utils';

export interface IzinDTO {
	id: string;
	employeeId: string;
	fromDate: Date;
	toDate: Date;
	supervisorEmployeeIds: string;
	currentPercentApproved: number;
	type: IzinType;
	approvalType: ApprovalType;
	description: string;
	status: RequestStatus;
}

export const extractIzinDTO = extractObject<IzinDTO>({
	id: true,
	employeeId: true,
	fromDate: true,
	toDate: true,
	supervisorEmployeeIds: true,
	currentPercentApproved: true,
	type: true,
	approvalType: true,
	description: true,
	status: true
});