// Uses Node's built-in --env-file flag (no dotenv package needed, Node 20.6+)
console.log('DATABASE_URL:', process.env.DATABASE_URL);
console.log('API_KEY:', process.env.API_KEY);
