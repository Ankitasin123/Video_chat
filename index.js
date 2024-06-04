const app = require("express")();
const server = require("http").createServer(app);
const cors = require("cors");
const { Socket } = require("socket.io");

const io= require("socket.io")(server,{
    cors: {
        origin: "*",
        methods: ["GET","POST"]
    }
    });

app.use(cors());

const PORT = process.env.PORT || 5000;

app.get("/",(req,res)=>{
    res.send('Server is running.');
});

io.on("connection", (Socket) =>{

    Socket.emit("me",Socket.id);

    Socket.on("disconnect",()=>{ 
        Socket.broadcast.emit("callended")
    });  //for disconnect call

    Socket.on("calluser",({usertocall,signaldata,from,name})=>{ 
        io.to(usertocall).emit("calluser",{signal: signaldata,from,name});
    });  //for calling someone

    Socket.on("answercall",(data) =>{
        io.to(data.to).emit("callAccepted",data.signal)
    }); //for answering call
});

server.listen(PORT ,() => console.log(`server listening on port ${PORT}`));