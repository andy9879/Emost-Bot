
# Video Demonstration
[![IMAGE ALT TEXT HERE](https://img.youtube.com/vi/cdkUnAxJbh0/0.jpg)](https://www.youtube.com/watch?v=cdkUnAxJbh0)

https://youtu.be/cdkUnAxJbh0

# Emost-Bot
Emost-Bot is a music bot for discord using only voice commands. It will listen to only one person who types the {prefix}connect command in a text channel. The bot works in a similar manner to the voice assistant on modern phones.

**There needs to be a very small delay (~0.5s) in order for the bot to start listening for the command. So say 'bumblebee...pause' rather than 'bumblebee pause'.**

# Text Commands(default prefix: !)
* connect - connect to the voice channel that the user is in
* disconnect - disconnect from the voice channel that it was in (will auto disconnect if a user disconnects from the voice channel)

# Voice Commands (default hotword: bumblebee)
* play {song name} - play {song name} or add the {song name} to the queue if a song is currently playing
* skip - skip the current song playing
* pause - pause the current song
* resume - resume the current song

# Known Issues
* Occasionally, porcupine will fail to initialize due to sensitivity range issues (unsure why)
* Sometimes YT-DL will fail, known issue.

# Planned Implementations(TBD)
* Add a signal to indicate the hotword has been recognized (e.g. ping noise when hotword is heard)
* Allow the ability to listen to multiple users as opposed to one
* More commands
* Faster and offline speech to text 

# Hosting your own voice recognition bot
Requirements:
* Google's Speech to Text API key
* Discord Bot Token
* ffmpeg
* Mac or Linux (don't know if Windows works as I don't have a Windows device)


1. To run the bot: clone the repository
```git clone https://github.com/SteTR/Emost-Bot.git``` or by clicking the "Code" button and download

2. Run ```npm install``` in the directory with your preferred CLI to install dependencies

3. Create a .env file in the project's directory and put DISCORD_TOKEN={YOUR DISCORD BOT TOKEN HERE WITHOUT CURLY BRACES}

*You can obtain a token in ```discord.com/developers``` and go to ```bots``` tab to reveal token* 

4. Place your Google Service API Key json file in the config folder and rename it to ```google_speech.json```

*You can obtain the api key on ```https://console.cloud.google.com/iam-admin/serviceaccounts```. The json file can be generated by going to the service account and the key tab to generate a json file.*

5. While in the project directory, run ```npm run start``` and the bot should be online

**Have only tested on Linux, no idea if it will work on Windows or Mac due to some dependencies not working on those platforms.**


