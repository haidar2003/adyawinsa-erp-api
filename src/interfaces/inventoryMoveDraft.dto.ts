import { extractObject } from './utils';

export interface InventoryMoveDraftDTO {
    org_id: number;
    creation_date_time: Date;
    movement_id: number;
    data?: any;  // Using any for JSON
}

export const extractInventoryMoveDraftDTO = extractObject<InventoryMoveDraftDTO>({
    org_id: true,
    creation_date_time: true,
    movement_id: true,
    data: true
});