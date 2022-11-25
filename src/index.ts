require('dotenv').config()
import app from "./models/Server";

const port = process.env.PORT;

app.listen(port, () => {
    console.log(`Clow reading app listening on port ${port}`);
});
