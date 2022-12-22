const {Sequelize, DataTypes} = require('sequelize');

// Create instance of sequalize
const sequelize = new Sequelize({
    dialect: 'mysql',
    host: 'localhost',
    username: 'root',
    password: 'Experion@123',
    database: 'mybank'
});

// Define user model
const User = sequelize.define('User', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },

    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    phone : {
        type : DataTypes.BIGINT,
        allowNull : false,
        unique: true

    },
    address  : {
        type : DataTypes.STRING(100),
        allowNull : false

    },
    panNumber : {
        type : DataTypes.BIGINT,
        allowNull : false,
        unique:true
    },
    aadhaarNumber  : {
        type : DataTypes.BIGINT,
        allowNull: false,
        unique:true
    },

    password: {
        type: DataTypes.STRING(150),
        allowNull: false
    },

    role: {
        type: DataTypes.STRING(30),
        allowNull: false,
        defaultValue: 'user'
    },
    approvalStatus : {
        type : DataTypes.STRING(30),
        defaultValue : 'pending'
    }
});

const Bank = sequelize.define('Bank', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },

    name: {
        type: DataTypes.STRING(50),
        allowNull: false
    },

    email: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true
    },
    phone : {
        type : DataTypes.BIGINT,
        allowNull : false,
        unique: true



    },
    password: {
        type: DataTypes.STRING(150),
        allowNull: false
    },

    role: {
        type: DataTypes.STRING(30),
        allowNull: false,
        defaultValue: 'bank'
    }
});

const Account = sequelize.define('Account', {
    accountId : {
        type : DataTypes.BIGINT,
        autoIncrement : true,
        primaryKey : true

    } ,
    accountNumber : {
        type : DataTypes.BIGINT,
        unique: true
        
    },
    dateOpened : {
        type : DataTypes.DATEONLY,
        allowNull : false
    },
    currentBalance : {
        type : DataTypes.BIGINT,
        defaultValue:0
    },
    userId:{
        type:DataTypes.INTEGER,
        onDelete:"cascade",
references:{
    model:'users',
    key:'id'
}

    }
});

const Transaction = sequelize.define('Transaction', {
    transactionId : {
        type : DataTypes.BIGINT,
        autoIncrement : true,
        primaryKey : true,

    } ,
    accountId : {
        type : DataTypes.BIGINT,
        onDelete:'cascade',
        references:{
            model:'Accounts',
            key:'accountId'
        }
        
    },
    dateOfTrasaction : {
        type : DataTypes.DATEONLY,
        allowNull : false
    },
    amount : {
        type : DataTypes.BIGINT
    },
    transactionType:{
        type : DataTypes.STRING(50)
    },
    userId:{
        type:DataTypes.INTEGER,
        onDelete:"cascade",
references:{
    model:'Users',
    key:'id'
}

    }

});

const Loan = sequelize.define('Loan', {
    loanId : {
        type : DataTypes.BIGINT,
        autoIncrement : true,
        primaryKey : true,

    } ,
    accountId : {
        type : DataTypes.BIGINT,
        onDelete:'cascade',
        references:{
            model:'Accounts',
            key:'accountId'
        }
        
    },
    amount : {
        type : DataTypes.BIGINT,
        allowNull : false
    },
    interest : {
        type : DataTypes.BIGINT
    },
    startDate:{
        type : DataTypes.DATEONLY
    },
    endDate: {
        type : DataTypes.DATEONLY
    },
    userId:{
        type:DataTypes.INTEGER,
        onDelete:"cascade",
references:{
    model:'Users',
    key:'id'
}

    },
    approvalStatus:{
        type:DataTypes.STRING,
        defaultValue:'pending'
    }

});


const LoanTypes = sequelize.define('loantype', {

    loanTypeId : {

        type : DataTypes.INTEGER,

        autoIncrement : true,

        primaryKey : true



    } ,

    loanName : {

        type : DataTypes.STRING(50),

        unique: true

       

    },

    interest : {

        type  :DataTypes.INTEGER

    }

   

   



   

});


module.exports.User = User;
module.exports.Account = Account;
module.exports.Transaction = Transaction;
module.exports.Loan = Loan;

module.exports.Loantypes = LoanTypes;

module.exports.sequelize = sequelize;
module.exports.Bank = Bank;


