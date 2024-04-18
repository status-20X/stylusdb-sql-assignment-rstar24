function parseQuery(query) {
    const selectRegex = /SELECT (.+?) FROM (.+?)(?: WHERE (.*))?$/i;
    const match = query.match(selectRegex);

    if (match) {
        const [, fields, table, whereString] = match;
        const whereClauses = whereString ? parseWhereClause(whereString) : [];
        return {
            fields: fields.split(',').map(field => field.trim()),
            table: table.trim(),
            whereClauses
        };
    } else {
        throw new Error('Invalid query format');
    }
}

function parseWhereClause(whereString) {
    try{
        const conditions = whereString.split(/ AND | OR /i);
        // XOR check
        if (whereString.includes('^')){
            throw new Error('XOR not Allowed');
        }
        // const cd1 = whereString.split(/ AND | OR /i);
        // console.log(cd1);
        // for(let i = 0; i < cd1[0].length(); i++){
        //     if(cd1[0][i] === '^'){
        //         throw new Error('XOR not Allowed');
        //     }
        // }
        // XOR check
        return conditions.map(condition => {
            const [field, operator, value] = condition.split(/\s+/);
            return { field, operator, value };
        });

    }
    // catch (err) {
    //     console.log("Not To use the xor ",err);
    // }
    finally{
        console.log("I will always be their");
    }
}

module.exports = parseQuery;