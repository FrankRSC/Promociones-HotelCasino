module.exports = {
    database: {
        user: process.env.USER || 'DB_A6DFF9_PROMOCIONES_admin',
        password: process.env.PASSWORD || 'promociones123',
        server: process.env.SERVER || 'SQL5052.site4now.net', 
        database: process.env.DATABASE || 'DB_A6DFF9_PROMOCIONES',
        options:{
            encrypt: false,
            enableArithAbort: true
        },
    }
}