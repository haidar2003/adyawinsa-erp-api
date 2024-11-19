import { prisma } from '../../prisma/client';

export const createRepairJobObject = async (repairJobObjectDTO: any) => {
	try {
		const existingDraft = await prisma.repair_job.findUnique({
			where: {
				org_id_creation_date_time: {
					org_id: repairJobObjectDTO.org_id,
					creation_date_time: repairJobObjectDTO.creation_date_time
				}
			}
		});

		if (existingDraft) {
			throw new Error('Record already exists');
		}

		return await prisma.quality_check.create({
			data: repairJobObjectDTO,
		});
	} catch (error) {
		console.error('Error:', error);
		throw error;
	}
};

export const getAllRepairJobObjects = async () => {
	return await prisma.repair_job.findMany();
};

export const getRepairJobObject = async (repairJobOrgId: number, repairJobCDT: string) => {
	return await prisma.repair_job.findUnique({
		where: {
			org_id_creation_date_time: {
				org_id: repairJobOrgId,
				creation_date_time: repairJobCDT
			}
		}
	});
};

export const updateRepairJobObject = async (repairJobObjectDTO: any) => {
	return prisma.repair_job.update({
		where: {
			org_id_creation_date_time: {
				org_id: repairJobObjectDTO.org_id,
				creation_date_time: repairJobObjectDTO.creation_date_time
			}
		},
		data: {
			...repairJobObjectDTO
		}
	});
};