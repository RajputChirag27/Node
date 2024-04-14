const { dbConnect, close } = require("./mongodb");

const insert = async () => {
  try {
    const db = await dbConnect();
    const result = await db.insertMany([
      {
        name: "Note 5",
        brand: "Vivo",
        price: 20000,
        category: "mobile",
      },
      {
        name: "Note 8",
        brand: "Oppo",
        price: 25000,
        category: "mobile",
      },
    ]);
    //   console.log(result);
    if (result.acknowledged === true && result.insertedCount > 0) {
      console.log("Data Inserted Successfully...");
    } else console.log("Data not Inserted...");
  } finally {
    await close();
  }
};

insert();
