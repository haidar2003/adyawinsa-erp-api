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

		return await prisma.repair_job.create({
			data: {
				org_id: repairJobObjectDTO.org_id,
				creation_date_time: repairJobObjectDTO.creation_date_time,

				// Create new track_id_object
				track_id_object: {
					create: {
						track_id: 'track-rpr-' + repairJobObjectDTO.creation_date_time,
						productId: repairJobObjectDTO.productId,
						productName: repairJobObjectDTO.productName,
						track_type: 'REPAIR',
						source_data: {
							source_list: repairJobObjectDTO.sourceList
						},
						object_data: {},
					}
				},

				starting_locator_id: repairJobObjectDTO.startingLocatorId,
				repair_status: 'CREATED',
				quantity: repairJobObjectDTO.quantity,
				description: repairJobObjectDTO.description,

				quality_check_src: repairJobObjectDTO.quality_check_src ? {
					connect: repairJobObjectDTO.quality_check_src
				} : undefined,
				production_single_src: repairJobObjectDTO.production_single_src ? {
					connect: repairJobObjectDTO.production_single_src
				} : undefined
			},
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