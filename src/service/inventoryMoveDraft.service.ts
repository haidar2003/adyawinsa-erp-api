import { prisma } from '../../prisma/client';

export const createInventoryMoveDraft = async (InventoryMoveDraftDTO: any) => {
	try {
		const existingDraft = await prisma.inventory_move_draft.findUnique({
			where: {
				org_id_creation_date_time: {
					org_id: InventoryMoveDraftDTO.org_id,
					creation_date_time: InventoryMoveDraftDTO.creation_date_time,
				},
			},
		});

		if (existingDraft) {
			throw new Error('Record already exists');
		}

		return await prisma.inventory_move_draft.create({
			data: {
				org_id: InventoryMoveDraftDTO.org_id,
				creation_date_time: InventoryMoveDraftDTO.creation_date_time,
				movement_id: InventoryMoveDraftDTO.movement_id,
				data: InventoryMoveDraftDTO.data,
			},
		});
	} catch (error) {
		console.error('Error:', error);
		throw error;
	}
};


export const getAllInventoryMoveDrafts = async () => {
	return await prisma.inventory_move_draft.findMany();
};


// export const getInventoryMoveDraftByOrgIdAndCreationDateTime = async (org_id: number, creation_date_time: Date) => {
//    return prisma.inventory_move_draft.findUnique({
//        where: {
//            org_id_creation_date_time: {
//                org_id,
//                creation_date_time
//            }
//        }
//    });
// };

export const getInventoryMoveDraftByMovementId = async (movement_id: number) => {
	return prisma.inventory_move_draft.findUnique({
		where: {
			movement_id
		}
	});
};

// export const updateInventoryMoveDraft = async (
//    org_id: number, 
//    creation_date_time: Date, 
//    data: Partial<Pick<InventoryMoveDraftDTO, 'data'>>
// ) => {
//    return prisma.inventory_move_draft.update({
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

export const updateInventoryMoveDraftByMovementId = async (
	movementId: number,
	data: Partial<any>,
	additionalTransactData: any[] | undefined,
): Promise<any> => {
	try {
		const existingDraft = await prisma.inventory_move_draft.findUnique({
			where: { movement_id: movementId },
		});

		if (!existingDraft) {
			throw new Error(`InventoryMoveDraft with movement_id ${movementId} not found.`);
		}

		if (additionalTransactData?.length) {
			return prisma.$transaction(additionalTransactData.concat([
				prisma.inventory_move_draft.update({
					where: { movement_id: movementId },
					data: { data: data },
				})
			]));
		} else {
			return prisma.inventory_move_draft.update({
				where: { movement_id: movementId },
				data: { data: data },
			});
		}
	} catch (error) {
		console.error(`Error updating InventoryMoveDraft with movement_id ${movementId}:`, error);
		throw error;
	}
};


export const deleteInventoryMoveDraft = async (org_id: number, creation_date_time: Date) => {
	return prisma.inventory_move_draft.delete({
		where: {
			org_id_creation_date_time: {
				org_id,
				creation_date_time
			}
		}
	});
};


export const getInventoryMoveDraftsByDateRange = async (startDate: Date, endDate: Date) => {
	return prisma.inventory_move_draft.findMany({
		where: {
			creation_date_time: {
				gte: startDate,
				lte: endDate
			}
		}
	});
};


export const getInventoryMoveDraftsByOrgId = async (org_id: number) => {
	return prisma.inventory_move_draft.findMany({
		where: {
			org_id: org_id
		}
	});
};