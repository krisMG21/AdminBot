# DiscordBot
Bot de prueba desarrollado en JavaScript usando las dependencias de 'discord.js'
-> [Tutorial](https://discordjs.guide/creating-your-bot/event-handling.html#individual-event-files)

## Instalación y Configuración

**Prerrequisitos:**

* **Node.js y npm (o yarn):** Asegúrate de tener instaladas las últimas versiones de Node.js y npm (o yarn), que son los gestores de paquetes de JavaScript necesarios para ejecutar el proyecto.
* **Cuenta de Desarrollador de Discord:** Necesitarás una cuenta en el portal de desarrolladores de Discord para crear un bot y obtener un token.

### Clonación del Repositorio:
```bash
git clone https://github.com/krisMG21/DiscordBot
```

## Instalación de Dependencias:

Una vez clonado el repositorio, navega hasta el directorio del proyecto y ejecuta el siguiente comando para instalar las dependencias listadas en el archivo ```package.json:```
(Esto instala en el directorio las librerías de Node.js y discord.js, pero nos quita de tener que subirlas a github)

```bash
npm install
```

## Configuración del Token de Bot:
El token de acceso al bot, se encuentra dentro de un archivo de entorno ```.env``` privado.
**process.env:**
```env
DISCORD_TOKEN = token_privado_del_bot
```

## ¿Cómo funciona Discord.js?

Discord.js es una biblioteca de Node.js que facilita la creación de bots para Discord. Proporciona una interfaz intuitiva para interactuar con la API de Discord, permitiendo a los desarrolladores gestionar eventos, mensajes, usuarios y servidores de manera sencilla.

## Componentes clave de Discord.js:

* ```Client```: Representa una conexión a Discord. Es el punto de entrada para todas las interacciones con la API.
* ```Intents```: Definen los eventos a los que el bot se suscribirá. Por ejemplo, puedes suscribirte a eventos de mensajes, reacciones, miembros que se unen, etc.
* ```Guilds```: Representan los servidores de Discord.
* ```Channels```: Representan los canales de texto, voz y categorías dentro de un servidor.
* ```Users```: Representan a los usuarios de Discord.
* ```Messages```: Representan los mensajes de texto enviados en los canales.

## Interacción entre componentes:

* Creación del ```Client```: Se crea una instancia de Client para establecer una conexión con Discord. ej:
  ```js
  // index.js
  const client = new Client({ intents: [GatewayIntentBits.Guilds] });
  ```
* Suscripción a Eventos: Se utilizan los métodos on o once del Client para suscribirse a eventos específicos. Por ejemplo, client.on('messageCreate', (message) => { ... }) se ejecutará cada vez que se envíe un nuevo mensaje. ej:
  ```js
  // index.js
  client.once(Events.ClientReady, readyClient => {
	 console.log(`Ready! Logged in as ${readyClient.user.tag}`);
  });
  ```
* Manejo de Eventos: Dentro de los manejadores de eventos, se puede acceder a información relevante como el autor del mensaje, el contenido del mensaje, el canal donde se envió, etc.
  ```js
  // ../commands/utility/user.js
  async execute(interaction) {
		// interaction.user is the object representing the User who ran the command
		// interaction.member is the GuildMember object, which represents the user in the specific guild

		await interaction.reply(`This command was run by ${interaction.user.username}, who joined on ${interaction.member.joinedAt}.)`) // <--
	},
  ```
* Interacción con la API: Discord.js proporciona métodos para realizar diversas acciones, como enviar mensajes, crear roles, modificar canales, etc.

## Contribuyendo

Si deseas contribuir a este proyecto, por favor, sigue estas pautas:

* **Haz fork del repositorio:** Crea una copia del repositorio en tu cuenta de GitHub.
* **Crea una rama:** Crea una nueva rama para tus cambios.
* **Realiza tus cambios:** Edita los archivos y agrega las nuevas funcionalidades.
* **Envía una pull request:** Describe claramente los cambios que has realizado y por qué son útiles.
