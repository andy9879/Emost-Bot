// song object, storing song information
// No usage at the moment.

class Song
{
	public _name: any;
	public _url: any;
	public stream: any;

    constructor(songName, songUrl, songStream)
    {
        this._name = songName;
        this._url = songUrl;
        this.stream = songStream;
    }

    pause()
    {

    }

    resume()
    {

    }
}