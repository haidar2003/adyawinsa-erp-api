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

export const incrementTrackIdStock = async (
	locatorId: string, 
	productId: string,
	trackId: string,
	quantityToChange: number
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
			quantity: {
				increment: quantityToChange
			}
		}
	});
};
