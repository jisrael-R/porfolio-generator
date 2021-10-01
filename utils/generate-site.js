const { rejects } = require('assert');
const fs = require('fs');

const { resolve } = require('path');
const writeFile = fileContent => {
    return new Promise((resolve,rejects)=> {
        fs.writeFile('./dist/index.html', fileContent, err =>{
            if (err){
                rejects(err);
                return;
            }
            resolve({
                ok: true,
                message: 'File created!'
            });
        });
    });
};
const copyFile = () =>{
    return new Promise((resolve, rejects) => {
        fs.copyFile('./dist/index.html', err =>{
        if (err){
            rejects(err);
            return;
        }
        resolve({
            ok: true,
            message:'Copied file!'
        });
        });
    });
};