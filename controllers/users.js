const User = require('../models/user');
const Car = require('../models/car');

module.exports = {
    index: async (req, res, next) => {
        const users = await User.find({});
        res.status(200).json(users);
    },

    newUser: async (req, res, next) => {
        const newUser = new User(req.body);
        const user = await newUser.save();
        res.status(201).json(user);
    },

    getUser: async (req, res, next) => {
        const { userId } = req.value.params;
        // const { userId } = req.params;
        const user = await User.findById(userId);
        res.status(200).json(user);
    },
    replaceUser: async (req, res, next) => {
        // enforce that req.body must contain all the fields
        const { userId } = req.params;
        const reUser = await User.findByIdAndUpdate(userId, req.body);
        console.log('userId is ', userId);
        console.log('reUser is ', reUser);
        res.status(200).json({ success: true });
    },
    updateUser: async (req, res, next) => {
        // req.body may contain any number of fields
        const { userId } = req.params;
        const upUser = await User.findByIdAndUpdate(userId, req.body);
        console.log('userId is ', userId);
        console.log('upUser is ', upUser);
        res.status(200).json({ success: true });
    },
    deleteUser: async (req, res, next) => {
        const { userId } = req.params;
        const deUser = await User.deleteOne({ _id: userId });
        console.log('userId is ', userId);
        console.log('deUser is ', deUser);
        res.status(200).json({ success: true });
    },

    getUserCars: async (req, res, next) => {
        const { userId } = req.params;
        const user = await User.findOne({ _id: userId }).populate('cars');
        res.status(200).json(user.cars);
    },
    newUserCar: async (req, res, next) => {
        const { userId } = req.params;
        // Create a new Car
        const newCar = new Car(req.body);
        // Get user
        const user = await User.findById(userId);
        // Assign user as a car's seller 
        newCar.seller = user;
        // Save the car
        await newCar.save();
        // Add car to the user's selling array 'cars'
        console.log('newCar is ', newCar);
        user.cars.push(newCar);
        // Save the user
        await user.save();
        res.status(201).json(newCar);
    }
};


/*
与数据库交互 有三种方式：
1.Callbacks
2.Promises
3.Async/Await(Promises)

*/