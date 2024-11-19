import { prisma } from '../../prisma/client';

export const createQualityCheckObject = async (qualityCheckObjectDTO: any) => {
	try {
		const existingDraft = await prisma.quality_check.findUnique({
			where: {
				org_id_creation_date_time: {
					org_id: qualityCheckObjectDTO.org_id,
					creation_date_time: qualityCheckObjectDTO.creation_date_time
				}
			}
		});

		if (existingDraft) {
			throw new Error('Record already exists');
		}

		return await prisma.quality_check.create({
			data: {
				org_id: qualityCheckObjectDTO.org_id,
				creation_date_time: qualityCheckObjectDTO.creation_date_time,
				locator_id: qualityCheckObjectDTO.locator_id ?? -1,

				// Assign existing track_id_object using track_id
				track_id: qualityCheckObjectDTO.track_id,

				checker_name: qualityCheckObjectDTO.checker_name ?? '',
				customer: qualityCheckObjectDTO.customer ?? '',

				total_ok: qualityCheckObjectDTO.total_ok ?? 0,
				scrap_reason: qualityCheckObjectDTO.scrap_reason ?? '',
				total_ng_scrap: qualityCheckObjectDTO.total_ng_scrap ?? 0,
				repair_reason: qualityCheckObjectDTO.repair_reason ?? '',
				total_ng_repair: qualityCheckObjectDTO.total_ng_repair ?? 0,
			},
		});
	} catch (error) {
		console.error('Error:', error);
		throw error;
	}
};

export const getAllQualityCheckObjects = async () => {
	return await prisma.quality_check.findMany({
		include: {
			track_id_object: true
		}
	});
};

export const getQualityCheckObject = async (qualityCheckOrgId: number, qualityCheckCDT: string) => {
	return await prisma.quality_check.findUnique({
		where: {
			org_id_creation_date_time: {
				org_id: qualityCheckOrgId,
				creation_date_time: qualityCheckCDT
			}
		}
	});
};

export const updateQualityCheckObject = async (qualityCheckObjectDTO: any) => {
	return prisma.quality_check.update({
		where: {
			org_id_creation_date_time: {
				org_id: qualityCheckObjectDTO.org_id,
				creation_date_time: qualityCheckObjectDTO.creation_date_time
			}
		},
		data: {
			...qualityCheckObjectDTO
		}
	});
};