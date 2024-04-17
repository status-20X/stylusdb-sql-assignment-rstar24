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
  });
});



test()

