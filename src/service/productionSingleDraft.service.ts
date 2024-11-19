import { prisma } from '../../prisma/client';

export const createProductionSingleDraft = async (productionSingleDTO: any) => {
	try {
		const existingDraft = await prisma.production_single_product_draft.findUnique({
			where: {
				org_id_creation_date_time: {
					org_id: productionSingleDTO.org_id,
					creation_date_time: productionSingleDTO.creation_date_time,
				},
			},
		});

		if (existingDraft) {
			throw new Error('Record already exists');
		}

		return await prisma.production_single_product_draft.create({
			data: {
				org_id: productionSingleDTO.org_id,
				creation_date_time: productionSingleDTO.creation_date_time,
				erp_id: productionSingleDTO.erp_id,
				data: productionSingleDTO.data,

				// TODO NEEDS TO BE WORKED ON.
				total_ok: 0,
				total_ng_repair: 0,
				total_ng_scrap: 0,
				track_id_object: {

				}
			},
		});
	} catch (error) {
		console.error('Error:', error);
		throw error;
	}
};


export const getAllProductionSingleDrafts = async () => {
	return await prisma.production_single_product_draft.findMany();
};


// export const getProductionSingleDraftByOrgIdAndCreationDateTime = async (org_id: number, creation_date_time: Date) => {
//    return prisma.production_single_product_draft.findUnique({
//        where: {
//            org_id_creation_date_time: {
//                org_id,
//                creation_date_time
//            }
//        }
//    });
// };

export const getProductionSingleDraftByMovementId = async (erp_id: number) => {
	return prisma.production_single_product_draft.findUnique({
		where: {
			erp_id
		}
	});
};

// export const updateProductionSingleDraft = async (
//    org_id: number, 
//    creation_date_time: Date, 
//    data: Partial<Pick<productionSingleDTO, 'data'>>
// ) => {
//    return prisma.production_single_product_draft.update({
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

export const updateProductionSingleDraftByMovementId = async (
	erpId: number,
	data: any,
	additionalTransactData: any[] | undefined,
): Promise<any> => {
	try {
		const existingDraft = await prisma.production_single_product_draft.findUnique({
			where: { erp_id: erpId },
		});

		if (!existingDraft) {
			throw new Error(`ProductionSingleDraft with erp_id ${erpId} not found.`);
		}

		if (additionalTransactData?.length) {
			return prisma.$transaction(additionalTransactData.concat([
				prisma.production_single_product_draft.update({
					where: { erp_id: erpId },
					data: { data: data },
				})
			]));
		} else {
			return prisma.production_single_product_draft.update({
				where: { erp_id: erpId },
				data: { data: data },
			});
		}
	} catch (error) {
		console.error(`Error updating ProductionSingleDraft with erp_id ${erpId}:`, error);
		throw error;
	}
};


export const deleteProductionSingleDraft = async (org_id: number, creation_date_time: Date) => {
	return prisma.production_single_product_draft.delete({
		where: {
			org_id_creation_date_time: {
				org_id,
				creation_date_time
			}
		}
	});
};


export const getProductionSingleDraftsByDateRange = async (startDate: Date, endDate: Date) => {
	return prisma.production_single_product_draft.findMany({
		where: {
			creation_date_time: {
				gte: startDate,
				lte: endDate
			}
		}
	});
};


export const getProductionSingleDraftsByOrgId = async (org_id: number) => {
	return prisma.production_single_product_draft.findMany({
		where: {
			org_id: org_id
		}
	});
};