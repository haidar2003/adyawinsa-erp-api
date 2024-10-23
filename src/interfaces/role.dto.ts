import { extractObject } from './utils';

export interface RoleDTO {
	id: string;
	name: string;
	description: string;
	izinSakitApprovalPercent: number;
	izinCutiApprovalPercent: number;
	izinTidakMasukApprovalPercent: number;
	izinFingerprintApprovalPercent: number;
	izinSplApprovalPercent: number;
	izinTugasLuarApprovalPercent: number;
}

export const extractRoleDTO = extractObject<RoleDTO>({
	id: true,
	name: true,
	description: true,
	izinSakitApprovalPercent: true,
	izinCutiApprovalPercent: true,
	izinTidakMasukApprovalPercent: true,
	izinFingerprintApprovalPercent: true,
	izinSplApprovalPercent: true,
	izinTugasLuarApprovalPercent: true
});