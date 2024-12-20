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

export const getTrackIdObject = async (trackId: string) => {
	return await prisma.track_id_object.findUnique({
		where: {
			track_id: trackId
		}
	});
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

export const createManyTrackIdStock = async (
	locatorFromId: string,
	locatorToId: string,
	productTrackQuantityDict: ProductTrackQuantityDict
) => {
	const createBulkTransactionArray: any[] = [];

	for (const productId of Object.keys(productTrackQuantityDict)) {
		for (const trackId of Object.keys(productTrackQuantityDict[productId].trackIdAndQuantityDict)) {
			if (String(locatorFromId)) {
				createBulkTransactionArray.push({
					locator_id: String(locatorFromId),
					key23: productId + '-' + trackId,
					product_id: productId,
					track_id: trackId,
					quantity: 0,
					data: {}
				});
			}
			if (String(locatorToId)) {
				createBulkTransactionArray.push({
					locator_id: String(locatorToId),
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
	productTrackQuantityDict: ProductTrackQuantityDict,
	isReverse: boolean,
) => {
	const transactionArray: any[] = [];

	for (const productId of Object.keys(productTrackQuantityDict)) {
		for (const trackId of Object.keys(productTrackQuantityDict[productId].trackIdAndQuantityDict)) {
			const currentQuantity = productTrackQuantityDict[productId].trackIdAndQuantityDict[trackId].trackIdList
				.reduce((n: any, {quantity}: {quantity: number}) => n + quantity, 0);

			if (String(locatorToId)) {
				transactionArray.push(prisma.track_id_stock.update({
					where: {
						locator_id_key23: {
							locator_id: String(locatorToId),
							key23: productId + '-' + trackId
						}
					},
					data: {
						quantity: {
							increment: currentQuantity * (isReverse ? -1 : 1)
						}
					}
				}));
			}

			if (String(locatorFromId)) {
				transactionArray.push(prisma.track_id_stock.update({
					where: {
						locator_id_key23: {
							locator_id: String(locatorFromId),
							key23: productId + '-' + trackId
						}
					},
					data: {
						quantity: {
							increment: currentQuantity * (isReverse ? 1 : -1)
						}
					}
				}));
			}
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
