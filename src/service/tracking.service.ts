import { prisma } from '../../prisma/client';

export const createTrackIdObject = async (trackIdObjectDTO: any) => {
	try {
		const existingDraft = await prisma.track_id_object.findUnique({
			where: {
				track_id: trackIdObjectDTO.track_id
			}
		});

		if (existingDraft) {
			throw new Error('Record already exists');
		}

		return await prisma.track_id_object.create({
			data: trackIdObjectDTO,
		});
	} catch (error) {
		console.error('Error:', error);
		throw error;
	}
};

export const getAllTrackIdObjects = async () => {
	return await prisma.track_id_object.findMany();
};

export const updateTrackIdObject = async (trackIdObjectDTO: any) => {
	return prisma.track_id_object.update({
		where: {
			track_id: trackIdObjectDTO.track_id,
		},
		data: {
			...trackIdObjectDTO
		}
	});
};


export const getTrackIdHistory = async (trackId: string) => {
	return prisma.track_id_history.findMany({
		where: {
			track_id: trackId
		}
	});
};

export const createTrackIdHistoryObject = async (trackIdHistoryObjectDTO: any) => {
	const inputData = {
		...trackIdHistoryObjectDTO
	};

	if (inputData.update_date_time !== undefined) {
		delete inputData['update_date_time'];
	}

	try {
		return await prisma.track_id_history.create({
			data: inputData,
		});
	} catch (error) {
		console.error('Error:', error);
		throw error;
	}
};

export const createManyTrackIdHistory = async (
	locatorFromId: string,
	locatorToId: string,
	productTrackQuantityDict: ProductTrackQuantityDict
) => {
	const createBulkTransactionArray: any[] = [];

	for (const productId of Object.keys(productTrackQuantityDict)) {
		for (const trackId of Object.keys(productTrackQuantityDict[productId].trackIdAndQuantityDict)) {
			if (locatorFromId) {
				createBulkTransactionArray.push({
					locator_id: locatorFromId,
					key23: productId + '-' + trackId,
					product_id: productId,
					track_id: trackId,
					quantity: 0,
					data: {}
				});
			}
			if (locatorToId) {
				createBulkTransactionArray.push({
					locator_id: locatorToId,
					key23: productId + '-' + trackId,
					product_id: productId,
					track_id: trackId,
					quantity: 0,
					data: {}
				});
			}
		}
	}

	const createMany = await prisma.track_id_stock.createMany({
		data: createBulkTransactionArray,
		skipDuplicates: true, // Skip duplicates (If it already exists, we don't create it)
	});

	return createMany;
};

export interface ProductTrackQuantityDict {
	[key:string]: {
		trackIdAndQuantityDict: {
			[key:string]: {
				trackIdList: {
					quantity: number
				}[]
			}
		}
	}
}

// Need to make faster + atomic (using transactions)
export const getTransferItems = (
	locatorFromId: string,
	locatorToId: string,
	productTrackQuantityDict: ProductTrackQuantityDict
) => {
	const transactionArray: any[] = [];

	for (const productId of Object.keys(productTrackQuantityDict)) {
		for (const trackId of Object.keys(productTrackQuantityDict[productId].trackIdAndQuantityDict)) {
			const currentQuantity = productTrackQuantityDict[productId].trackIdAndQuantityDict[trackId].trackIdList
				.reduce((n: any, {quantity}: {quantity: number}) => n + quantity, 0);

			transactionArray.push(prisma.track_id_stock.update({
				where: {
					locator_id_key23: {
						locator_id: locatorToId,
						key23: productId + '-' + trackId
					}
				},
				data: {
					quantity: {
						increment: currentQuantity
					}
				}
			}));
			transactionArray.push(prisma.track_id_stock.update({
				where: {
					locator_id_key23: {
						locator_id: locatorFromId,
						key23: productId + '-' + trackId
					}
				},
				data: {
					quantity: {
						increment: -1 * currentQuantity
					}
				}
			}));
		}
	}

	return transactionArray;
};

export const getTrackIdStock = async (locatorId: string) => {
	return prisma.track_id_stock.findMany({
		where: {
			locator_id: locatorId
		}
	});
};

export const setTrackIdStock = async (
	locatorId: string, 
	productId: string,
	trackId: string,
	newQuantity: number
) => {
	const existingDraft = await prisma.track_id_stock.findUnique({
		where: {
			locator_id_key23: {
				locator_id: locatorId,
				key23: productId + '-' + trackId
			}
		}
	});

	if (!existingDraft) {
		await prisma.track_id_stock.create({
			data: {
				locator_id: locatorId,
				key23: productId + '-' + trackId,
				product_id: productId,
				track_id: trackId,
				quantity: 0,
				data: {}
			},
		});
	}

	return prisma.track_id_stock.update({
		where: {
			locator_id_key23: {
				locator_id: locatorId,
				key23: productId + '-' + trackId
			}
		},
		data: {
			quantity: newQuantity
		}
	});
};
