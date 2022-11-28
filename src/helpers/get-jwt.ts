import jsonwebtoken from "jsonwebtoken";

export const generateJwt = (uid = '') => {
    return new Promise((resolve, reject) => {
        const payload = { uid };
        const secret: jsonwebtoken.Secret = process.env.SECRET_KEY as string;

        jsonwebtoken.sign(payload, secret, (err, token) => {
            if (err) {
                console.log(err);
                reject('Cannot generate token')
            } else (
                resolve(token)
            )
        });
    })
};