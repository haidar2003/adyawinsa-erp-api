import { prisma } from '../../prisma/client';

export const createShipmentDraft = async (shipmentDTO: any) => {
	try {
		const existingDraft = await prisma.shipment_draft.findUnique({
			where: {
				org_id_creation_date_time: {
					org_id: shipmentDTO.org_id,
					creation_date_time: shipmentDTO.creation_date_time,
				},
			},
		});

		if (existingDraft) {
			throw new Error('Record already exists');
		}

		return await prisma.shipment_draft.create({
			data: {
				org_id: shipmentDTO.org_id,
				creation_date_time: shipmentDTO.creation_date_time,
				erp_id: shipmentDTO.erp_id,
				data: shipmentDTO.data,
				vendor_id: shipmentDTO.vendor_id
			},
		});
	} catch (error) {
		console.error('Error:', error);
		throw error;
	}
};


export const getAllShipmentDrafts = async () => {
	return await prisma.shipment_draft.findMany();
};

export const getFilteredShipmentDrafts = async (orgId: number, vendorId: number) => {
	return await prisma.shipment_draft.findMany({
		where: {
			org_id: orgId,
			vendor_id: vendorId,
		},
		orderBy: {
			creation_date_time: 'desc',
		},
	});
};

// export const getShipmentDraftByOrgIdAndCreationDateTime = async (org_id: number, creation_date_time: Date) => {
//    return prisma.shipment_draft.findUnique({
//        where: {
//            org_id_creation_date_time: {
//                org_id,
//                creation_date_time
//            }
//        }
//    });
// };

export const getShipmentDraftByMovementId = async (erp_id: number) => {
	return prisma.shipment_draft.findUnique({
		where: {
			erp_id
		}
	});
};

// export const updateShipmentDraft = async (
//    org_id: number, 
//    creation_date_time: Date, 
//    data: Partial<Pick<shipmentDTO, 'data'>>
// ) => {
//    return prisma.shipment_draft.update({
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

export const updateShipmentDraftByMovementId = async (
	erpId: number,
	data: any,
	additionalTransactData: any[] | undefined,
): Promise<any> => {
	try {
		const existingDraft = await prisma.shipment_draft.findUnique({
			where: { erp_id: erpId },
		});

		if (!existingDraft) {
			throw new Error(`ShipmentDraft with erp_id ${erpId} not found.`);
		}

		if (additionalTransactData?.length) {
			return prisma.$transaction(additionalTransactData.concat([
				prisma.shipment_draft.update({
					where: { erp_id: erpId },
					data: { data: data },
				})
			]));
		} else {
			return prisma.shipment_draft.update({
				where: { erp_id: erpId },
				data: { data: data },
			});
		}
	} catch (error) {
		console.error(`Error updating ShipmentDraft with erp_id ${erpId}:`, error);
		throw error;
	}
};


export const deleteShipmentDraft = async (org_id: number, creation_date_time: Date) => {
	return prisma.shipment_draft.delete({
		where: {
			org_id_creation_date_time: {
				org_id,
				creation_date_time
			}
		}
	});
};


export const getShipmentDraftsByDateRange = async (startDate: Date, endDate: Date) => {
	return prisma.shipment_draft.findMany({
		where: {
			creation_date_time: {
				gte: startDate,
				lte: endDate
			}
		}
	});
};


export const getShipmentDraftsByOrgId = async (org_id: number) => {
	return prisma.shipment_draft.findMany({
		where: {
			org_id: org_id
		}
	});
};