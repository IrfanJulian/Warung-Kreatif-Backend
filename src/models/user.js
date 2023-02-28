const pool = require('../configs/db')

const getData = () =>{
    return pool.query(`SELECT * FROM userkreatif`)
}

const findByEmail = (email) =>{
    return pool.query(`SELECT * FROM userkreatif WHERE email='${email}'`)
}

const getDataById = (id) => {
    return pool.query(`SELECT * FROM userkreatif WHERE id='${id}'`)
}

const insertData = (data) =>{
    const { id, name, email, password, phone, otp} = data
    return pool.query(`INSERT INTO userkreatif(id, name, email, password, phone, otp)VALUES('${id}', '${name}', '${email}', '${password}', '${phone}', '${otp}')`)
}

const verify = (data) => {
    const { email, otp } = data
    return pool.query(`UPDATE userkreatif SET status_activation = 'actived', otp = '${otp}' WHERE email = '${email}'`)
}

const verifStatus = (email) => {
    return pool.query(`UPDATE userkreatif SET status_activation = true WHERE email = '${email}'`)
}

const forgotPassword = (otp, email) => {
    return pool.query(`UPDATE userkreatif SET otp = ${otp} WHERE email = '${email}'`)
}

const changePassword = (email, password) => {
    return pool.query(`UPDATE userkreatif SET password = '${password}' WHERE email = '${email}'`)
}

const updateData = (id, data) =>{
    const { name, email, birth, phone_number, photo, store_description, store_name } = data
    return pool.query(`UPDATE userkreatif SET name='${name}', email='${email}', birth='${birth}', phone_number='${phone_number}', photo='${photo}', store_description='${store_description}', store_name='${store_name}' WHERE id='${id}'`)
}

const deleteData = (id) =>{
    return pool.query(`DELETE FROM userkreatif WHERE id='${id}'`)
}

module.exports = {
    getData,
    insertData,
    updateData,
    verify,
    verifStatus,
    deleteData,
    findByEmail,
    getDataById,
    forgotPassword,
    changePassword
}