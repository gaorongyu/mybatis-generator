'use strict';

module.exports = function BaseColumns(tableDesc) {
    var array = tableDesc.rows.map(function (row) {
        return '\t' + row.field
    });

    var content = ['<sql id="baseColumns">\n', array.join(',\n'), '\n</sql>'].join('');

    return new Promise(function (res) {
        res(content);
    })

};