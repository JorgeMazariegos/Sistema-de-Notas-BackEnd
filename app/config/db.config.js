module.exports = {
    HOST: "ep-small-mode-adru3fk5-pooler.c-2.us-east-1.aws.neon.tech",
    USER : "neondb_owner",
    PASSWORD: "npg_5CZBvOo4MdyJ",
    DB: "neondb",
    dialect: "postgres",
    pool: {
        max : 5,
        min : 0,
        acquire: 30000,
        idle: 10000
    }
};