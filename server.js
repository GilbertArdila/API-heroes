//montamos el backend y el servidor
const server=jsonserver.create()
const router=jsonserver.router('db.json')
const middlewares=jsonserver.defaults()
const port=process.env.PORT || 4000;
server.use(middlewares)
server.use(router)
server.listen(port)