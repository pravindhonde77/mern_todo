import Todo from "../model/Todo.js"



const addTodo = async (req, res) => {
    // console.log(req.body)
    try {
        const newTodo = await Todo.create({
            data: req.body.data,
            createdAt: Date.now()
        })
        await newTodo.save()
        return res.status(200).json(newTodo)

    } catch (error) {
        return res.status(500).json(error.message)
    }

}

const getAllTodos = async (req, res) => {
    try {
        const todos = await Todo.find({}).sort({ "createdAT": -1 })

        return res.status(200).json(todos)

    } catch (error) {
        return res.status(500).json(error.message)
    }
}

const toggleTodoDone = async (req, res) => {
    try {
      const todoRef=  await Todo.findById(req.params.id)
      const todo=await Todo.findOneAndUpdate(
        {_id:req.params.id},
        {done:!todoRef.done}
      )

      await todo.save()
        return res.status(200).json(todo)

    } catch (error) {
        return res.status(500).json(error.message)
    }
}


const updateTodo = async (req, res) => {
    try {
     
      await Todo.findOneAndUpdate(
        {_id:req.params.id},
        {data:req.body.data}
      )

      const todo=await Todo.findById(req.params.id)
        return res.status(200).json(todo)

    } catch (error) {
        return res.status(500).json(error.message)
    }
}

const deleteTodo = async (req, res) => {
    try {
      const todo=await Todo.findByIdAndDelete(req.params.id)
        return res.status(200).json(todo)

    } catch (error) {
        return res.status(500).json(error.message)
    }
}

export { addTodo, getAllTodos,toggleTodoDone ,updateTodo,deleteTodo}