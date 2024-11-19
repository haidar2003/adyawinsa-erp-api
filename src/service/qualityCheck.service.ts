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
			data: qualityCheckObjectDTO,
		});
	} catch (error) {
		console.error('Error:', error);
		throw error;
	}
};

export const getAllQualityCheckObjects = async () => {
	return await prisma.quality_check.findMany();
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