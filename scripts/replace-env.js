// scripts/replace-env.js

const fs = require('fs');
const path = './src/environments/environment.prod.ts';

const fileContent = `
export const environment = {
    production: true,
    urlGetway: '${process.env.NG_APP_URL_GETWAY}',
    public_Key: '${process.env.NG_APP_PUBLIC_KEY}',
    hash: '${process.env.NG_APP_HASH}'
};
`;

fs.writeFileSync(path, fileContent);
console.log('✅ environment.prod.ts atualizado com variáveis de ambiente.');
