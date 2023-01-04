import config  from "../config/config";

export const contactService = {
    sendContactMessage
};

function sendContactMessage(data) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
        body: JSON.stringify(data)
    };

    return fetch(`${config.apiUrl}/contact/account`, requestOptions).then(handleResponse)
}

function handleResponse(response) {
    return response.text().then(() => {
        if (!response.ok) {
            return Promise.reject();
        } else {
            return '';
        }
    });
}
