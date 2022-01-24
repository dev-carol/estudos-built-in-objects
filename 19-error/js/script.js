try {
    throw new Error("Deu um problema no código");
} catch (error) {
    console.log(error.name + ": " + error.message);
}