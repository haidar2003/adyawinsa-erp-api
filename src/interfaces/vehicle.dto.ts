import { extractObject } from './utils';

export interface VehicleDTO {
	id: string;
	name: string;
	description: string;
	vehicleYear: string;
	vehicleModel: string;
	vehicleColor: string;
	vehiclePlateNumber: string;
	vehicleBpkbNumber: string;
	vehicleNoMesin: string;
	vehicleNoRangka: string;
	entitas: string;
	lastServiceKm: number;
	platNomorExpiryDateTime: Date;
	stnkExpiryDateTime: Date;
	kirExpiryDateTime: Date;
	isActive: boolean;
}

export const extractVehicleDTO = extractObject<VehicleDTO>({
	id: true,
	name: true,
	description: true,
	vehicleYear: true,
	vehicleModel: true,
	vehicleColor: true,
	vehiclePlateNumber: true,
	vehicleBpkbNumber: true,
	vehicleNoMesin: true,
	vehicleNoRangka: true,
	entitas: true,
	lastServiceKm: true,
	platNomorExpiryDateTime: true,
	stnkExpiryDateTime: true,
	kirExpiryDateTime: true,
	isActive: true
});