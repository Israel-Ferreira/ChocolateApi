import App from './app';

const { app } = App;
const PORT = process.env.PORT || 3450;

app.listen(PORT,() => console.log(`Aee PORRA!!! Tá funcionando`));

process.on("SIGUSR2",() => {
    App.closeDBConnection('nodemon restart', () => process.kill(process.pid,'SIGUSR2'));
})

process.on("SIGINT",() => {
    App.closeDBConnection('A Conexão foi interrompida',() => process.exit(0));
})