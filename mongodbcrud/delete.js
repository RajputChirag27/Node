const { dbConnect, close } = require("./mongodb");

const deleteRow = async () => {
  try {
    const db = await dbConnect();
    const result = await db.deleteOne({
      brand: "Vivo",
    });
    //   console.log(result)
    if (result.acknowledged === true && result.deletedCount > 0)
      console.log("Data deleted Successfully");
    else console.log("Error in deleting the data");
  } finally {
    await close();
  }
};

deleteRow();
