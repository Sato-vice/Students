const Driver = require("./models/DriverModel")
const Task = require("./models/TaskMode")
const {
    GraphQLObjectType,
    GraphQLID,
    GraphQLString,
    GraphQLList,
    GraphQLSchema,
    GraphQLNonNull,
    GraphQLEnumType
} = require("graphql")

const DriverType = new GraphQLObjectType({
    name: "Driver",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        email: { type: GraphQLString },
        phone: { type: GraphQLString },
    })
})

const TaskType = new GraphQLObjectType({
    name: "Task",
    fields: () => ({
        id: { type: GraphQLID },
        name: { type: GraphQLString },
        description: { type: GraphQLString },
        timestamps: { type: GraphQLString },
        endingtimestamps: { type: GraphQLString },
        status: { type: GraphQLString },
        driver: {
            type: DriverType,
            resolve(parent, args) {
                return Driver.findById(parent.driverId)
            }
        }
    })
})


const RootQuery = new GraphQLObjectType({
    name: "RootQuery",
    fields: {
        tasks: {
            type: new GraphQLList(TaskType),
            resolve(parent, ars) {
                return Task.find()
            }
        },
        task: {
            type: TaskType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Task.findById(args.id)
            }
        },
        drivers: {
            type: new GraphQLList(DriverType),
            resolve(parent, ars) {
                return Driver.find()
            }
        },
        driver: {
            type: DriverType,
            args: { id: { type: GraphQLID } },
            resolve(parent, args) {
                return Driver.findById(args.id)
            }
        },
    }
})

const mutation = new GraphQLObjectType({
    name: "Mutation",
    fields: {
        addDriver: {
            type: DriverType,
            args: {
                name: { type: GraphQLNonNull(GraphQLString) },
                email: { type: GraphQLNonNull(GraphQLString) },
                phone: { type: GraphQLNonNull(GraphQLString) },
            },
            resolve(parent, args) {
                const driver = new Driver({
                    name: args.name,
                    email: args.email,
                    phone: args.phone,
                })

                return driver.save()
            },
        },
        deleteDriver: {
            type: DriverType,
            args: { id: { type: GraphQLNonNull(GraphQLID) } },
            resolve(parent, args) {
                Task.find({ driverId: args.id }).then((tasks) => {
                    tasks.forEach(task => {
                        task.deleteOne()
                    })
                })

                return Driver.findByIdAndDelete(args.id)
            }
        },
        addTask: {
            type: TaskType,
            args: {
                name: { type: GraphQLNonNull(GraphQLString) },
                description: { type: GraphQLNonNull(GraphQLString) },
                timestamps: { type: GraphQLNonNull(GraphQLString) },
                endingtimestamps: { type: GraphQLNonNull(GraphQLString) },
                status: {
                    type: new GraphQLEnumType({
                        name: "TaskStatus",
                        values: {
                            "new": { value: "Not Started" },
                            "progress": { value: "In Progress" },
                            "completed": { value: "Completed" }
                        }
                    }),
                    defaultValue: "Not Started"
                },
                driverId: { type: GraphQLNonNull(GraphQLID) }
            },
            resolve(parent, args) {
                const task = new Task({
                    name: args.name,
                    description: args.description,
                    timestamps: args.timestamps,
                    endingtimestamps: args.endingtimestamps,
                    status: args.status,
                    driverId: args.driverId,
                })
                return task.save()
            }
        },
        deleteTask: {
            type: TaskType,
            args: { id: { type: GraphQLNonNull(GraphQLID) } },
            resolve(parent, args) {
                return Task.findByIdAndDelete(args.id)
            }
        },
        updateTask: {
            type: TaskType,
            args: {
                id: { type: GraphQLNonNull(GraphQLID) },
                name: { type: GraphQLNonNull(GraphQLString) },
                description: { type: GraphQLNonNull(GraphQLString) },
                timestamps: { type: GraphQLNonNull(GraphQLString) },
                endingtimestamps: { type: GraphQLNonNull(GraphQLString) },
                status: {
                    type: new GraphQLEnumType({
                        name: "TaskStatusUpdate",
                        values: {
                            "new": { value: "Not Started" },
                            "progress": { value: "In Progress" },
                            "completed": { value: "Completed" }
                        }
                    }),
                },
            },
            resolve(parent, args) {
                return Task.findByIdAndUpdate(
                    args.id,
                    {
                        $set: {
                            name: args.name,
                            description: args.description,
                            timestamps: args.timestamps,
                            endingtimestamps: args.endingtimestamps,
                            status: args.status,

                        }
                    },
                    { new: true }
                )
            }
        }
    }
})

module.exports = new GraphQLSchema({
    query: RootQuery,
    mutation
})
