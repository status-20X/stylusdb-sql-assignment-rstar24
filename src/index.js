const parseQuery = require('./queryParser');
const readCSV = require('./csvReader');

async function executeSELECTQuery(query) {
    const { fields, table, whereClause } = parseQuery(query);
    const data = await readCSV(`${table}.csv`);
    
    // Filtering based on WHERE clause 
    const fileteredData = whereClause 
        ? data.filter(row => {
            const [field, value] = whereClause.split('=').
            map(s => s.trim());
            return row[field] === value;
        })
        : data;

    // selecting the specified fields
    return fileteredData.map(row => {
        const selectedRow = {};
        fields.forEach(field => selectedRow[field] = row[field]);
        return selectedRow;
    });
}

module.exports = executeSELECTQuery;