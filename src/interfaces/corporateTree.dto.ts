import { extractObject } from './utils';

export interface CorporateTreeDTO {
	nodeId: string;
	parentNodeId: string;
	roleId: string;
	description: string;
	isRoot: boolean;
	positionName: string;
	entity: string;
	employeeId: string;
	canCreateSpl: boolean;
}

export const extractCorporateTreeDTO = extractObject<CorporateTreeDTO>({
	nodeId: true,
	parentNodeId: true,
	roleId: true,
	description: true,
	isRoot: true,
	positionName: true,
	entity: true,
	employeeId: true,
	canCreateSpl: true,
});