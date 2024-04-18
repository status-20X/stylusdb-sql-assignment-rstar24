// From the tutorial 1
test("Basic Jest Test", () => {
  expect(1).toBe(1);
});

// From Tutorial 2
const readCSV = require("../src/csvReader");
test("Read CSV File", async () => {
  const data = await readCSV("./sample.csv");
  expect(data.length).toBeGreaterThan(0);
  expect(data.length).toBe(3);
  expect(data[0].name).toBe("John");
  expect(data[0].age).toBe("30");
});

// From Tutorial 3 
const parseQuery = require("../src/queryParser");
test("Parse SQL Query", () => {
  const query = "SELECT id, name FROM sample";
  const parsed = parseQuery(query);
  expect(parsed).toEqual({
    fields: ['id', 'name'],
    table: 'sample',
    whereClause : null,
  });
});


const executeSELECTQuery = require('../src/index');

test('Execute SQL Query with WHERE Clause', async () => {
    const query = 'SELECT id, name FROM sample WHERE age = 25';
    const result = await executeSELECTQuery(query);
    expect(result.length).toBe(1);
    expect(result[0]).toHaveProperty('id');
    expect(result[0]).toHaveProperty('name');
    expect(result[0].id).toBe('2');
    expect(result[0].name).not.toBe('john');
});

test('Parse SQL Query with Multiple WHERE Clauses', () => {
    const query = 'SELECT id, name FROM sample WHERE age = 30 AND name = John';
    const parsed = parseQuery(query);
    expect(parsed).toEqual({
        fields: ['id', 'name'],
        table: 'sample',
        whereClauses: [{
            "field": "age",
            "operator": "=",
            "value": "30",
        }, {
            "field": "name",
            "operator": "=",
            "value": "John",
        }]
    });

    expect(() = {
      
    });
});

test('Execute SQL Query with Multiple WHERE Clause', async () => {
    const query = 'SELECT id, name FROM sample WHERE age = 30 AND name = John';
    const result = await executeSELECTQuery(query);
    expect(result.length).toBe(1);
    expect(result[0]).toEqual({ id: '1', name: 'John' });
});

test()

