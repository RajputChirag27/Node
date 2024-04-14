const { dbConnect, close } = require("./mongodb");

const update = async () => {
  try {
    const db = await dbConnect();
    const res = await db.updateOne(
      { brand: "Vivo" },
      { $set: { brand: "Oppo", price: 30000 } }
    );
    //   console.log(res)
    if (res.acknowledged === true && res.modifiedCount > 0) {
      console.log("Data Updated Successfully");
    } else console.log("Data not Updated Successfully");
  } finally {
    await close();
  }
};

update();
