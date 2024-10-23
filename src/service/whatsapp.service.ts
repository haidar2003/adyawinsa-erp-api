import axios from 'axios';

const waToken = '9NW2B5ID9IXUMJ9Y';
const waNumberKey = 'rlDaZViB3nbIPD0I';
const targetUrl = 'https://api.watzap.id/v1/send_message';
const targetUrlGroup = 'https://api.watzap.id/v1/send_message_group';
const targetUrlVideo = 'https://api.watzap.id/v1/send_file_url';
const targetUrlVideoGroup = 'https://api.watzap.id/v1/send_file_group';
const targetUrlImage = 'https://api.watzap.id/v1/send_image_url';

// Group ID of Entities
export const hrGroupId: any  = {
	'tcf3': '120363217479206465@g.us',
	'tcf2': '120363318701895019@g.us',
	'tcf1': '120363316815892406@g.us'
};

export const gaGroupId: any  = {
	'tcf3': '120363198453201358@g.us',
	'tcf2': '120363316547510383@g.us',
	'tcf1': '120363317442567699@g.us'
};

export async function sendToMultipleNumbers(arraySend: { content: string, destination: string }[]) {
	const params: any = { 
		api_key: waToken,
		number_key: waNumberKey,
		message: '',
	};

	for (let i = 0; i < arraySend.length; i++) {
		const content = arraySend[i].content;
		const destination = arraySend[i].destination;
		params['message'] = content;
		params['phone_no'] = destination;
		await axios.post(targetUrl, params);
	} 
}

export async function sendToWhatsApp(content: string, destination: string, isGroup: boolean) {
	const params: any = { 
		api_key: waToken,
		number_key: waNumberKey,
		message: content,
	};
	
	if (isGroup) {
		console.log("WA Message for " + destination + ": for "+ process.env.ENTITY_STRING);
	}

	if (isGroup) {
		params['group_id'] = destination;
	} else {
		params['phone_no'] = destination;
	}

	const response = await axios.post(isGroup ? targetUrlGroup : targetUrl, params);

	if (isGroup) {
		console.log(destination + " (for " + process.env.ENTITY_STRING + ") : " + content + " " + response.data.message);
	}

}