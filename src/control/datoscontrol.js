import Task from "../modelo/Datos";

export const compilarTask = async (req, res) => {
    const tasks = await Task.find().lean();
    res.render('index', { tasks: tasks });
};

export const ingresar = async (req, res) => {
    try {
        const task = Task(req.body);
        await task.save();
        res.redirect("/");
    } catch (error) {
        console.log(error);
    }
};

export const compilarTaskEditar = async (req, res) => {
    try {
        const task = await Task.findById(req.params.id).lean();
        res.render('edit', { task });
    } catch (error) {
        console.log(error.message);
    } 
};

export const editarTask = async (req, res) => {
    const {id} = req.params
    await Task.findByIdAndUpdate(id, req.body);
    res.redirect("/");
};

export const eliminarTask = async (req, res) => {
    const {id} = req.params
    await Task.findByIdAndDelete(id);
    res.redirect("/");
};

export const finalizarTask = async (req, res) => {
    const {id} = req.params;
    const task = await Task.findById(id);
    task.done = !task.done;
    await task.save();
    res.redirect("/");
};