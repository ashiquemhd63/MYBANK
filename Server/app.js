const express = require('express');

 

const bodyParser = require('body-parser');
const publicRoutes = require('./apps/public/routes');
const userRoutes = require('./apps/user/routes');
const adminRoutes = require('./apps/admin/routes');
// app.use('/user',TransactionRoutes);

const dotEnv = require('dotenv');

const authMiddleware = require('./middlewares/authMiddlewares');

const cors = require('cors');

dotEnv.config();

const app = express();

app.use(cors({origin: '*'}));

app.use(authMiddleware);
app.use(bodyParser.json({inflate: true}));

app.use('/money',userRoutes);
app.use('/auth',publicRoutes);
app.use('/user',userRoutes);
app.use('/admin',adminRoutes);


app.listen(80);