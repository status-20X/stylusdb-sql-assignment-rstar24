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

        return conditions.map(condition => {
            const [field, operator, value] = condition.split(/\s+/);
                if(operator == '^'){
                    throw new Error('XOR Not Allowed');
                }
            return { field, operator, value };
        });
    }
    catch (err) {
        console.log("I am error from step 6",err);
    }
    finally{
        console.log("I will always be their");
    }
}

module.exports = parseQuery;