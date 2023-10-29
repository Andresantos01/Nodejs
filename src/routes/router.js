const router = require('express').Router();
const { PrismaClient } = require('@prisma/client');

const prisma = new PrismaClient();

router.post('/login', async (req, res) => {
    
    const { email, password } = req.body;
    
    try {
        const user = await prisma.user.findUnique({
            select: {
                id: true,
                name: true,
                email: true,
                password: false,
                remember_token: true,
                createdAt: true,
                updateAt: true
            },
            where: {
                email: email
            }
        });

        if (!user) {
            return res.status(404).json({ message: "User not found" });
        }

        return res.json(user);
        
    } catch (error) {
        console.error(error);
        return res.status(500).json({ message: "Server error" });
    }
});

//criar
router.post('/produtos', async (req, res)=>{
    const {name, price} = req.body

    const produto = await prisma.produtos.create({
        data: {
            name: name,
            price: price
        }
    })

    if(produto){
        //criado
        return res.status(201).json({
            message: 'produto cadastrado com sucesso!',
            data: produto
        })
    }else{
        return res.status(400).json({
            message: 'deu ruim',
        })
    }
    
})

//listar todos
router.get('/produtos',async (req, res)=>{
        const produto = await prisma.produtos.findMany()

        return res.json(produto)
})

//listar por id
router.get('/produtos/:id',async (req,res)=>{

    const id = parseInt(req.params.id, 10); 

    if(!id){
        return res.status(301).json({message: 'id invalido'})
    }

    const produto = await prisma.produtos.findUnique({
        where:{id: id}
    })

    if(!produto){
        return res.status(404).json({message: 'produto não encontrado'})
    }

    return res.json(produto)
})

router.put('/produtos/:id', async(req, res)=>{
    const id = parseInt(req.params.id, 10); 

    if(!id){
        return res.status(301).json({message: 'id invalido'})
    }
    const {name, price} = req.body

    const produto = await prisma.produtos.update({
        data:{
            name: name,
            price: price
        },
        where:{
            id: id
        }
    })


    if(!produto){
        return res.status(500).json({message: 'falha na atualização do produto'})
    }
    return res.status(201).json({
        message: 'produto editado com sucesso!',
        data: produto
    })

})

router.delete('/produtos/:id',async(req, res)=>{
    const id = parseInt(req.params.id, 10); 

    if(!id){
        return res.status(301).json({message: 'id invalido'})
    }

    const produto = await prisma.produtos.delete({
        where: {
            id: id
        }
    })

    if(!produto){
        return res.status(500).json({message: 'falha na deleção do produto'})
    }
    return res.status(201).json({
        message: 'produto deletado com sucesso!',
        data: produto
    })

})

module.exports = router;
