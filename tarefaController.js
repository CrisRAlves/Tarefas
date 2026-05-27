const tarefaModel = require('../models/tarefaModel');

// Listar
exports.listarTarefas = (req,res) => {
    const tarefas = tarefaModel.listar();
    res.json(tarefas);
};

// Criar
exports.criarTarefa = (req, res) => {
    const { titulo } = req.body;
    const novaTarefa = tarefaModel.criar(titulo);
    res.status(201).json(novaTarefa);
};

// BUSCAR POR ID
exports.buscarTarefaPorId = (req, res) => {
    console.log("ROTA DE ID FOI CHAMADA ✅");
    const { id } = req.params;
    const tarefa = tarefaModel.buscarPorId(id);
    if(!tarefa){
        return res.status(404).json({ mensagem: "Tarefa não encontrada" });
    }
    res.json(tarefa);
};