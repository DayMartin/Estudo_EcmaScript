import { getEndereco, saudacao } from "./import/lib.mjs";

saudacao()
getEndereco("18120000").then(response => console.log(response))