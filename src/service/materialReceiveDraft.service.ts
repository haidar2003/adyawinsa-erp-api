import { prisma } from '../../prisma/client';

export const createMaterialReceiveDraft = async (material_receiveDTO: any) => {
	try {
		const existingDraft = await prisma.material_receive_draft.findUnique({
			where: {
				org_id_creation_date_time: {
					org_id: material_receiveDTO.org_id,
					creation_date_time: material_receiveDTO.creation_date_time,
				},
			},
		});

		if (existingDraft) {
			throw new Error('Record already exists');
		}

		return await prisma.material_receive_draft.create({
			data: {
				org_id: material_receiveDTO.org_id,
				creation_date_time: material_receiveDTO.creation_date_time,
				erp_id: material_receiveDTO.erp_id,
				data: material_receiveDTO.data,
			},
		});
	} catch (error) {
		console.error('Error:', error);
		throw error;
	}
};


export const getAllMaterialReceiveDrafts = async () => {
	return await prisma.material_receive_draft.findMany();
};


// export const getMaterialReceiveDraftByOrgIdAndCreationDateTime = async (org_id: number, creation_date_time: Date) => {
//    return prisma.material_receive_draft.findUnique({
//        where: {
//            org_id_creation_date_time: {
//                org_id,
//                creation_date_time
//            }
//        }
//    });
// };

export const getMaterialReceiveDraftByMovementId = async (erp_id: number) => {
	return prisma.material_receive_draft.findUnique({
		where: {
			erp_id
		}
	});
};

// export const updateMaterialReceiveDraft = async (
//    org_id: number, 
//    creation_date_time: Date, 
//    data: Partial<Pick<material_receiveDTO, 'data'>>
// ) => {
//    return prisma.material_receive_draft.update({
//        where: {
//            org_id_creation_date_time: {
//                org_id,
//                creation_date_time
//            }
//        },
//        data: {
//            data: data.data
//        }
//    });
// };

export const updateMaterialReceiveDraftByMovementId = async (
	erpId: number,
	data: any,
	additionalTransactData: any[] | undefined,
): Promise<any> => {
	try {
		const existingDraft = await prisma.material_receive_draft.findUnique({
			where: { erp_id: erpId },
		});

		if (!existingDraft) {
			throw new Error(`MaterialReceiveDraft with erp_id ${erpId} not found.`);
		}

		if (additionalTransactData?.length) {
			return prisma.$transaction(additionalTransactData.concat([
				prisma.material_receive_draft.update({
					where: { erp_id: erpId },
					data: { data: data },
				})
			]));
		} else {
			return prisma.material_receive_draft.update({
				where: { erp_id: erpId },
				data: { data: data },
			});
		}
	} catch (error) {
		console.error(`Error updating MaterialReceiveDraft with erp_id ${erpId}:`, error);
		throw error;
	}
};


export const deleteMaterialReceiveDraft = async (org_id: number, creation_date_time: Date) => {
	return prisma.material_receive_draft.delete({
		where: {
			org_id_creation_date_time: {
				org_id,
				creation_date_time
			}
		}
	});
};


export const getMaterialReceiveDraftsByDateRange = async (startDate: Date, endDate: Date) => {
	return prisma.material_receive_draft.findMany({
		where: {
			creation_date_time: {
				gte: startDate,
				lte: endDate
			}
		}
	});
};


export const getMaterialReceiveDraftsByOrgId = async (org_id: number) => {
	return prisma.material_receive_draft.findMany({
		where: {
			org_id: org_id
		}
	});
};