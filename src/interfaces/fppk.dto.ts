import { RequestStatus } from '../../prisma/child-db/generated';

import { extractObject } from './utils';

export interface FppkDTO {
	id: string;
	supervisorId: string;
	creationDate: Date;
	job: string;
	description: string;
	candidateCount: number;
	status: RequestStatus;
}

export const extractFppkDTO = extractObject<FppkDTO>({
	id: true,
	supervisorId: true,
	creationDate: true,
	job: true,
	description: true,
	candidateCount: true,
	status: true
});