const getUserInfo = (userId, userPw) => {
    const reqData = {
        'user_id': userId,
        'user_pw': userPw
    }

    return {
        'data': {
            'user_id': reqData.user_id,
            'user_token': 'user_test_token',
            'user_role': 'ADM'
        }
    }
}

export default {
    async doLogin(user_id, userPw) {
        try{
            const getUserInfoPromise = getUserInfo(userId, userPw)
            const [userInfoResponse] = await promise.all([getUserInfoPromise])
            if (userInfoResponse.data.length === 0 ){
                return 'notFound'
            } else {
                localStorage.setItem('user_token', userInfoResponse.data.user_token)
                localStorage.setItem('user_role', userInfoResponse.data.user_role)
                return userInfoResponse
            }
        } catch (err) {
            console.error(err)
        }
    }
}