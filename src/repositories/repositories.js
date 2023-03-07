import db from "../configs/database.config.js";

export async function selectEmail (email){
    return db.query(`SELECT * FROM users WHERE email = $1;`, [email])
}

export async function insertUser (name, email, password, url){
    db.query(`INSERT INTO users (name, email, password, url) VALUES ($1, $2, $3, $4);`, [name, email, password, url])
    return "ok"
}

export async function startSession (token, id){
    db.query(`INSERT INTO sessions (token, user_id) VALUES ($1, $2);`, [token, id])
    return "ok"
}

