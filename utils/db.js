const mongoose = require('mongoose')

mongoose.connect('mongodb+srv://123:123@cluster0.0ahlf.mongodb.net/kiiitsco', {
    useCreateIndex: true,
    useNewUrlParser: true,
    useUnifiedTopology: true
})