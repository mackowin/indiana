import config  from "../config/config";

export const userService = {
    login,
    logout,
    register,
    uploadImage,
    getProfile,
    updateNameInfo,
    updateLinksInfo,
    updateEducationInfo,
    updateBio,
    updateSubjectsInfo,
    updateRates,
    updateTerms,
    updateYoutube,
    updateProblemCards,
    requestPasswordReset,
    resetPassword,
    updateBasicInfo,
    getUsers,
    getLeads,
    updatePaymentBooking,
    updateColor,
    updateTestimonials,
    apply
};

function login(email, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json'},
        body: JSON.stringify({ email, password })
    };

    return fetch(`${config.apiUrl}/auth`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // login successful if there's a jwt token in the response
            if (user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user));
                localStorage.setItem('token', user.token);
            }

            return user;
        });
}

function apply(data) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(data)
    };

    return fetch(`${config.apiUrl}/contact/apply`, requestOptions)
}


function logout() {
    // remove user from local storage to log user out
    localStorage.removeItem('user');
}

function register(user) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(user)
    };

    return fetch(`${config.apiUrl}/users`, requestOptions)
        .then(handleResponse)
        .then(user => {
            // login successful if there's a jwt token in the response
            if (user.token) {
                // store user details and jwt token in local storage to keep user logged in between page refreshes
                localStorage.setItem('user', JSON.stringify(user[0]));
                localStorage.setItem('token', user.token);
            }

            return user;
        });

}

function updateBasicInfo(data) {
    const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
        body: JSON.stringify(data)
    };

    return fetch(`${config.apiUrl}/users`, requestOptions).then(handleResponse).then(user => {
        // login successful if there's a jwt token in the response
        if (user.id) {
            localStorage.setItem('user', JSON.stringify(user));
        }
        return user;
    });
}

function getProfile(userId, token) {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json',  }
    };
    let params;
    if(userId) params= `userId=${userId}`;
    else params = `token=${token}`;
    return fetch(`${config.apiUrl}/tutors?${params}`, requestOptions).then(handleResponse);
}

function uploadImage(photo, sex) {
    const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
        body: JSON.stringify({
            photo: photo,
            sex: sex
        })
    };

    return fetch(`${config.apiUrl}/tutors/photo`, requestOptions).then(handleResponse)
}

function updateNameInfo(firstName, lastName, shortBio) {
    const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
        body: JSON.stringify({
            firstName: firstName,
            lastName: lastName,
            shortBio: shortBio
        })
    };

    return fetch(`${config.apiUrl}/tutors/name-info`, requestOptions).then(handleResponse)
}

function updateLinksInfo(instagram, youtube, linkedin, facebook) {
    const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
        body: JSON.stringify({
            facebookLink: facebook,
            youtubeLink: youtube,
            instagramLink: instagram,
            linkedInLink: linkedin
        })
    };

    return fetch(`${config.apiUrl}/tutors/links-info`, requestOptions).then(handleResponse)
}

function updateColor(color) {
    const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
        body: JSON.stringify({
            color: color
        })
    };

    return fetch(`${config.apiUrl}/tutors/color`, requestOptions).then(handleResponse)
}

function updateEducationInfo(educationInfo) {
    const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
        body: JSON.stringify(educationInfo)
    };

    return fetch(`${config.apiUrl}/tutors/education-info`, requestOptions).then(handleResponse)
}

function updateSubjectsInfo(subjectsInfo) {
    const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
        body: JSON.stringify(subjectsInfo)
    };

    return fetch(`${config.apiUrl}/tutors/categories`, requestOptions).then(handleResponse)
}

function updateBio(bio) {
    const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
        body: JSON.stringify({
            bio: bio
        })
    };

    return fetch(`${config.apiUrl}/tutors/bio`, requestOptions).then(handleResponse)
}


function updatePaymentBooking(paymentBookingData) {
    const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
        body: JSON.stringify(paymentBookingData)
    };

    return fetch(`${config.apiUrl}/tutors/booking-payment`, requestOptions).then(handleResponse)
}

function updateRates(rates) {
    const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
        body: JSON.stringify(rates)
    };

    return fetch(`${config.apiUrl}/tutors/rates`, requestOptions).then(handleResponse)
}

function updateTerms(terms) {
    const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
        body: JSON.stringify(terms)
    };

    return fetch(`${config.apiUrl}/tutors/terms`, requestOptions).then(handleResponse)
}

function updateYoutube(youtube) {
    const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
        body: JSON.stringify(youtube)
    };

    return fetch(`${config.apiUrl}/tutors/youtube`, requestOptions).then(handleResponse)
}

function updateProblemCards(data) {
    const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
        body: JSON.stringify(data)
    };

    return fetch(`${config.apiUrl}/tutors/problem-cards`, requestOptions).then(handleResponse)
}

function updateTestimonials(data) {
    const requestOptions = {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
        body: JSON.stringify(data)
    };

    return fetch(`${config.apiUrl}/tutors/testimonials`, requestOptions).then(handleResponse)
}

function requestPasswordReset(data) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
        body: JSON.stringify({email: data})
    };

    return fetch(`${config.apiUrl}/users/request-password-reset`, requestOptions).then(handleResponse)
}

function resetPassword(email, code, password) {
    const requestOptions = {
        method: 'POST',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}` },
        body: JSON.stringify({
            email: email,
            code: code,
            newPassword: password
        })
    };

    return fetch(`${config.apiUrl}/users/password-reset`, requestOptions).then(handleResponse)
}

function getUsers() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}`}
    };

    return fetch(`${config.apiUrl}/users/admin`, requestOptions).then(handleResponse);
}

function getLeads() {
    const requestOptions = {
        method: 'GET',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${localStorage.getItem('token')}`}
    };
    return fetch(`${config.apiUrl}/lead/admin`, requestOptions).then(handleResponse);
}

function handleResponse(response) {
    return response.text().then(text => {
        const data = text && JSON.parse(text);
        if (!response.ok) {
            if (response.status === 401) {
                // auto logout if 401 response returned from api
                logout();
                location.reload(true);
            }

            const error = (data && data.message) || response.statusText;
            return Promise.reject(error);
        } else {
            const token = response.headers.get('Authorization')
            if(token) {
                data.token = token.replace('Bearer ','');
            }

            return data;
        }

    });
}
