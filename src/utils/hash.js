import bcrypt from "bcrypt"

export const generateHash = (password) => {
    const salt = bcrypt.genSaltSync(10)
    const hash = bcrypt.hashSync(password, salt)

    return hash
}

export const validatePassword = (password, dbpassword) => {
    return bcrypt.compare(password, dbpassword)
}