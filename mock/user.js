const user = {
    studentID: 'H00000000'
}


export default [
    // User Login
    // If User Name equals to H00000000, then send Success response
    {
        url: '/user/login',
        type: 'post',
        response: req => {
            let request = JSON.parse(req.body)
            let studentID = request.studentID
            if (user.studentID === studentID) {
                return {
                    isLogin: "success"
                }
            } else {
                return {
                    isLogin: "fail"
                }
            }
        }
    },
    // User Sign In
    {
        url: '/user/signIn',
        type: 'post',
        response: req => {
            const {
                studentID,
                department,
                grade,
                email,
                name,
                password,
                position
            } = req.body

            if (studentID && department && grade && email && name && password && position) {
                return {
                    "create": "Create success!"
                }
            }else {
                return {
                    "create": "Create fail!"
                }
            }
        }
    }
]