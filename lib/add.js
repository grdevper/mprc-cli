const fs = require('fs');
const path = require('path');
const { prompt } = require('inquirer');
const tplPath = path.resolve(__dirname, '../template.json');
const tplJson = require(tplPath);
const chalk = require('chalk');

const questions = [
    {
        type: 'input',
        name: 'name',
        message: '模板名称',
        validate: function(val) {
            if (!val) {
                return '模板名称不为空'
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'description',
        message: '模板描述',
        validate: function(val) {
            if (!val) {
                return '模板名称不为空'
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'remoteType',
        message: '远程地址类型 (ps:git npm)',
        validate: function(val) {
            if (!val) {
                return '远程仓库类型不能为空'
            } else {
                return true;
            }
        }
    },
    {
        type: 'input',
        name: 'url',
        message: '模板包名称，（ps: 创建项目使用的模版地址）',
        validate: function(val) {
            if (!val) {
                return '模板名称不为空'
            } else {
                return true;
            }
        }
    }
];

module.exports = function() {
    prompt(questions).then(function(data) {
        tplJson[data.name] = {};
        tplJson[data.name]['name'] = data.name;
        tplJson[data.name]['description'] = data.description;
        tplJson[data.name]['remoteType'] = data.remoteType;
        tplJson[data.name]['url'] = data.url;

        fs.writeFile(tplPath, JSON.stringify(tplJson), 'utf-8', function(err, data) {
            if (err) {
                console.log(chalk.red('模板添加失败'));
            }
            console.log(chalk.green('模板添加成功'));
        });
    });
};